package com.backend.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "driver_documents")
@Getter
@Setter
public class DriverDocument {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long documentId;

    @ManyToOne(optional = false)
    @JoinColumn(name = "driver_id", nullable = false)
    private Driver driver;

    @Column(nullable = false)
    private String documentName; // e.g., "Driving License", "Insurance"

    @Column(nullable = false)
    private String documentUrl; // Path or URL to file

    private Boolean isVerified = false;
    
    // Optional: Rejection reason
    private String rejectionReason;
}
