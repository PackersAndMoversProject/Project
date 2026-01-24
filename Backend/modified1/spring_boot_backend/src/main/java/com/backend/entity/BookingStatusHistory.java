package com.backend.entity;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "booking_status_history")
public class BookingStatusHistory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private Booking booking;

    private String status;

    @ManyToOne
    private User changedBy;

    private LocalDateTime changedAt = LocalDateTime.now();

    // getters & setters
}

