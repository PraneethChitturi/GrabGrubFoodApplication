package com.example.GrabGrubApp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.GrabGrubApp.model.Address;

public interface AddressRepository extends JpaRepository<Address, Long> {

}
