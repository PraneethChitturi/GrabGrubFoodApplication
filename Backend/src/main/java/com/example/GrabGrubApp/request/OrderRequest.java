package com.example.GrabGrubApp.request;

import com.example.GrabGrubApp.model.Address;

import lombok.Data;

@Data
public class OrderRequest {
    private Long restaurantId;
    private Address deliveryAddress;

}
