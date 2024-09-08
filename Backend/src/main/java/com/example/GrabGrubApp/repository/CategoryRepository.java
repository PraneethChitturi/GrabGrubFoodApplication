package com.example.GrabGrubApp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.GrabGrubApp.model.Category;
import java.util.List;

public interface CategoryRepository extends JpaRepository<Category, Long> {
    public List<Category> findByRestaurantId(Long id);

}
