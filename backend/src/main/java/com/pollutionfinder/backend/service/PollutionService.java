package com.pollutionfinder.backend.service;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class PollutionService {

    private static final String URL = "http://localhost:3000/data";

    public Object getPollutionByCountry(String country) {
        RestTemplate restTemplate = new RestTemplate();
        Object[] data = restTemplate.getForObject(URL, Object[].class);

        return data;
    }
}
