package com.pollutionfinder.backend.controller;

import com.pollutionfinder.backend.service.PollutionService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/pollution")
@CrossOrigin
public class PollutionController {

    private final PollutionService service;

    public PollutionController(PollutionService service) {
        this.service = service;
    }

    @GetMapping
    public Object getPollution(@RequestParam String country) {
        return service.getPollutionByCountry(country);
    }
}
