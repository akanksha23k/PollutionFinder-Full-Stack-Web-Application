package com.pollutionfinder.backend.service;

import com.pollutionfinder.backend.dto.LoginRequest;
import com.pollutionfinder.backend.dto.RegisterRequest;
import com.pollutionfinder.backend.entity.User;
import com.pollutionfinder.backend.repository.UserRepository;
import com.pollutionfinder.backend.security.JwtUtil;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    private final UserRepository userRepository;
    private final JwtUtil jwtUtil;

    public AuthService(UserRepository userRepository, JwtUtil jwtUtil) {
        this.userRepository = userRepository;
        this.jwtUtil = jwtUtil;
    }

    // ✅ REGISTER METHOD (THIS WAS MISSING)
    public String register(RegisterRequest request) {

        User user = new User();
        user.setUsername(request.getUsername());
        user.setEmail(request.getEmail());
        user.setPassword(request.getPassword()); // plain text for project

        userRepository.save(user);

        return "User registered successfully";
    }

    // LOGIN METHOD
    public String login(LoginRequest request) {

        User user = userRepository.findByUsername(request.getUsername())
                .orElseThrow(() -> new RuntimeException("User not found"));

        if (!user.getPassword().equals(request.getPassword())) {
            throw new RuntimeException("Invalid password");
        }

        return jwtUtil.generateToken(user.getUsername());
    }
}
