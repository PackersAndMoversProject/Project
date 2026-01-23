package com.backend.entity;

import com.backend.enums.*;
import jakarta.persistence.*;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "quotations")
public class Quotation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long quotationId;

    @ManyToOne
    private User customer;

    @ManyToOne
    private Service service;

    private LocalDate pickupDate;
    private String pickupCity;
    private String dropCity;
    private String pickupAddress;
    private String dropAddress;

    private String goodsCategory;
    private Integer approximateWeightKg;
    private Integer numberOfItems;
    private Integer pickupFloor;
    private Integer dropFloor;
    private Boolean liftAvailable;

    private String vehicleType;
    private Integer manpowerCount;
    private Boolean packingRequired;
    private Boolean unpackingRequired;

    private Boolean insuranceRequired;
    private Boolean storageRequired;

    @Enumerated(EnumType.STRING)
    private SpecialHandlingType specialHandling;

    private Double quotedAmount;

    @Enumerated(EnumType.STRING)
    private QuotationStatus status;

    private LocalDate validTill;
    private LocalDateTime createdAt = LocalDateTime.now();

    // getters & setters
}
