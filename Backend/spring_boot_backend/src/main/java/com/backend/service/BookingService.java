package com.backend.service;

import java.util.List;

import com.backend.dto.BookingResponseDto;
import com.backend.entity.Booking;
import com.backend.enums.BookingStatus;

public interface BookingService {

    // 🔹 ADD THIS METHOD
    BookingResponseDto createBookingFromQuotation(Long quotationId);
    
    List<Booking> getBookingsByCustomer(Long customerId);

    Booking getBookingById(Long bookingId);
    void updateBookingStatus(Long bookingId, BookingStatus status);
    void deleteBooking(Long bookingId);

}
