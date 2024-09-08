package com.example.GrabGrubApp.repository;

import com.example.GrabGrubApp.model.Cart;
import com.example.GrabGrubApp.model.CartItem;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CartItemRepository extends JpaRepository<CartItem, Long> {

}
