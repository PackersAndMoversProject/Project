package com.backend.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "services")
@Getter
@Setter
public class Service {

    @Id
    private Integer serviceId;

    private String serviceName;
    private Double basePrice;
	

    // getters & setters
}

