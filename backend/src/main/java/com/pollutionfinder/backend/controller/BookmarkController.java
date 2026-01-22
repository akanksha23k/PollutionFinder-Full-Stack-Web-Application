package com.pollutionfinder.backend.controller;

import com.pollutionfinder.backend.entity.Bookmark;
import com.pollutionfinder.backend.service.BookmarkService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/bookmarks")
@CrossOrigin
public class BookmarkController {

    private final BookmarkService service;

    public BookmarkController(BookmarkService service) {
        this.service = service;
    }

    @PostMapping
    public Bookmark save(@RequestBody Bookmark bookmark) {
        return service.save(bookmark);
    }

    @GetMapping
    public List<Bookmark> getAll(@RequestParam String username) {
        return service.getAll(username);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }
}
