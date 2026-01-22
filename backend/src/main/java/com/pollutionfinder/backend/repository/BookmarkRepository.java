package com.pollutionfinder.backend.repository;

import com.pollutionfinder.backend.entity.Bookmark;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BookmarkRepository extends JpaRepository<Bookmark, Long> {
    List<Bookmark> findByUsername(String username);
}
