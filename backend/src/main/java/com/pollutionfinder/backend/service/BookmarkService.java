package com.pollutionfinder.backend.service;

import com.pollutionfinder.backend.entity.Bookmark;
import com.pollutionfinder.backend.repository.BookmarkRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookmarkService {

    private final BookmarkRepository repository;

    public BookmarkService(BookmarkRepository repository) {
        this.repository = repository;
    }

    public Bookmark save(Bookmark bookmark) {
        return repository.save(bookmark);
    }

    public List<Bookmark> getAll(String username) {
        return repository.findByUsername(username);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }
}
