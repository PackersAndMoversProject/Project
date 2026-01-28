package com.backend.repository;

import com.backend.entity.Booking;
import com.backend.enums.BookingStatus;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BookingRepository extends JpaRepository<Booking, Long> {
    List<Booking> findByCustomer_UserId(Long customerId);
    List<Booking> findByBookingStatus(BookingStatus status);
    List<Booking> findByDriver_DriverId(Long driverId);
}
