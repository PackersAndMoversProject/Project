package com.backend.entity;

import com.backend.enums.BookingStatus;
import jakarta.persistence.*;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "bookings")
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long bookingId;

    @OneToOne
    private Quotation quotation;

    @ManyToOne
    private User customer;

    @ManyToOne
    private Service service;

    @ManyToOne
    private Vehicle vehicle;

    @ManyToOne
    private Driver driver;

    private LocalDate shiftingDate;

    @Enumerated(EnumType.STRING)
    private BookingStatus bookingStatus;

    private LocalDateTime createdAt = LocalDateTime.now();

    // getters & setters
}

