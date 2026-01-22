package com.pollutionfinder.backend.controller;

import com.pollutionfinder.backend.dto.LoginRequest;
import com.pollutionfinder.backend.dto.RegisterRequest;
import com.pollutionfinder.backend.dto.AuthResponse;
import com.pollutionfinder.backend.service.AuthService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/register")
    public String register(@RequestBody RegisterRequest request)
    {
        return authService.register(request);
    }

    @PostMapping("/login")
    public AuthResponse login(@RequestBody LoginRequest request) {
        String token = authService.login(request);
        return new AuthResponse(token);
    }
}
