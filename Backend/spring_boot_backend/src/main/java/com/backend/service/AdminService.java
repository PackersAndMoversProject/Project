package com.backend.service;

import com.backend.entity.Booking;
import com.backend.entity.Driver;
import com.backend.entity.User;
import com.backend.entity.Vehicle;
import com.backend.enums.BookingStatus;

import java.util.List;

public interface AdminService {
    List<User> getAllUsers();
    List<Driver> getAllDrivers();
    List<Booking> getAllBookings();
    Booking assignDriverToBooking(Long bookingId, Long driverId);
    Vehicle addVehicle(Vehicle vehicle);
    void verifyDriver(Long driverId);
    void verifyDriverDocument(Long documentId, Boolean approved, String reason);
}
