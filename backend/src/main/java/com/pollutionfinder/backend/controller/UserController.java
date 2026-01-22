package com.pollutionfinder.backend.controller;

import com.pollutionfinder.backend.entity.User;
import com.pollutionfinder.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:5173")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    // REGISTER
    @PostMapping("/register")
    public User registerUser(@RequestBody User user) {
        return userRepository.save(user);
    }

    // LOGIN (simple login for demo)
    @PostMapping("/login")
    public User login(@RequestBody User user) {
        Optional<User> existingUser =
                userRepository.findByUsername(user.getUsername());

        if (existingUser.isPresent() &&
                existingUser.get().getPassword().equals(user.getPassword())) {
            return existingUser.get(); // SUCCESS
        }

        throw new RuntimeException("Invalid username or password");
    }
}
