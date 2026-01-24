package com.backend.dto;

import com.backend.enums.SpecialHandlingType;

import java.time.LocalDate;

public class QuotationRequestDto {

    public Long customerId;
    public Integer serviceId;

    public LocalDate pickupDate;
    public String pickupCity;
    public String dropCity;
    public String pickupAddress;
    public String dropAddress;

    public String goodsCategory;
    public Integer approximateWeightKg;
    public Integer numberOfItems;
    public Integer pickupFloor;
    public Integer dropFloor;
    public Boolean liftAvailable;

    public String vehicleType;
    public Integer manpowerCount;
    public Boolean packingRequired;
    public Boolean unpackingRequired;

    public Boolean insuranceRequired;
    public Boolean storageRequired;
    public SpecialHandlingType specialHandling;
}

