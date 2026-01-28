package com.backend.entity;

import com.backend.enums.BookingStatus;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "bookings")
@Setter
@Getter
public class Booking {

	 @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long bookingId;

	    @Enumerated(EnumType.STRING)
	    @Column(length = 50)
	    private BookingStatus bookingStatus;

	    @ManyToOne
	    @JoinColumn(name = "customer_user_id", nullable = false)
	    private User customer;

	    @ManyToOne
	    @JoinColumn(name = "service_service_id", nullable = false)
	    private Service service;

	    // 🔥 THIS IS THE KEY FIX 🔥
	    @OneToOne(optional = false)
	    @JoinColumn(name = "quotation_id", nullable = false, unique = true)
	    private Quotation quotation;

	    // OPTIONAL (can be null initially)
	    @ManyToOne
	    @JoinColumn(name = "driver_driver_id")
	    private Driver driver;

	    @ManyToOne
	    @JoinColumn(name = "vehicle_vehicle_id")
	    private Vehicle vehicle;

	    private LocalDate shiftingDate;

	    private LocalDateTime createdAt;
	

    // getters & setters
}

