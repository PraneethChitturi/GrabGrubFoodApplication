package com.example.GrabGrubApp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.GrabGrubApp.model.Order;
import java.util.List;

public interface OrderRepository extends JpaRepository<Order, Long> {
    public List<Order> findByCustomerId(Long userId);

    public List<Order> findByRestaurantId(Long restaurantId);

}
