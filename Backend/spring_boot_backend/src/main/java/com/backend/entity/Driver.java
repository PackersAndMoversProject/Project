package com.backend.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "drivers")
@Getter
@Setter
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
    
    // Earnings & Banking
    private Double totalEarnings = 0.0;
    private String bankAccountNumber;
    private String ifscCode;
    
    // Verification
    private Boolean isVerified = false;

    // Vehicle Details
    private String vehicleNumber;
    
    @Enumerated(EnumType.STRING)
    private com.backend.enums.VehicleType vehicleType;

}
