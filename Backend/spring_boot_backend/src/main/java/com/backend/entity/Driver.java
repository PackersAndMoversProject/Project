package com.backend.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "drivers")
public class Driver {

    @Id
    private Long driverId;

    @OneToOne
    @MapsId
    @JoinColumn(name = "driver_id")
    private User user;

    private String licenseNumber;
    private Integer experienceYears;
    private Boolean availability = true;

    // getters & setters
}

