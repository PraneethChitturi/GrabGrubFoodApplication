package com.example.GrabGrubApp.service;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import com.example.GrabGrubApp.model.Order;
import com.example.GrabGrubApp.response.PaymentResponse;

import lombok.Data;

public interface PaymentService {
    public PaymentResponse createPaymentLink(Order order);
}
