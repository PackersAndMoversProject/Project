package com.backend.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "vehicles")
public class Vehicle {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long vehicleId;

    private String vehicleType;
    private Integer capacityKg;
    private Double pricePerKm;
    private Boolean availability = true;

    // getters & setters
}

