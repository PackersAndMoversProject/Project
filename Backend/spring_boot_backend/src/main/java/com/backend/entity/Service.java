package com.backend.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "services")
public class Service {

    @Id
    private Integer serviceId;

    private String serviceName;
    private Double basePrice;

    // getters & setters
}

