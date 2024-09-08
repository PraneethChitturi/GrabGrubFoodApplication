package com.example.GrabGrubApp.response;

import com.example.GrabGrubApp.model.USER_ROLE;

import lombok.Data;

@Data
public class AuthResponse {
    private String jwt;
    private String message;
    private USER_ROLE role;
}
