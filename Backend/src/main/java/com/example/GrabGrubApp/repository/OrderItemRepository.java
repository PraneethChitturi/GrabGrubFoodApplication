package com.example.GrabGrubApp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.GrabGrubApp.model.OrderItem;

public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {

}
