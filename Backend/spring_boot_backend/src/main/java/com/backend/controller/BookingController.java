package com.backend.controller;

import com.backend.dto.BookingResponseDto;
import com.backend.dto.BookingStatusUpdateDto;
import com.backend.entity.Booking;
import com.backend.service.BookingService;

import java.util.List;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/bookings")
@CrossOrigin
public class BookingController {

    private final BookingService bookingService;

    public BookingController(BookingService bookingService) {
        this.bookingService = bookingService;
    }

    // ===============================
    // Convert quotation → booking
    // ===============================
    @PostMapping("/from-quotation/{quotationId}")
    public BookingResponseDto createBookingFromQuotation(
            @PathVariable Long quotationId) {

        return bookingService.createBookingFromQuotation(quotationId);
    }
 // =======================
 // GET all bookings of customer
 // =======================
 @GetMapping("/customer/{customerId}")
 public List<Booking> getBookingsByCustomer(@PathVariable Long customerId) {
     return bookingService.getBookingsByCustomer(customerId);
 }

 // =======================
 // GET booking by ID
 // =======================
 @GetMapping("/{bookingId}")
 public Booking getBookingById(@PathVariable Long bookingId) {
     return bookingService.getBookingById(bookingId);
 }
//=======================
//UPDATE booking status
//=======================
@PutMapping("/{bookingId}/status")
public String updateBookingStatus(
      @PathVariable Long bookingId,
      @RequestBody BookingStatusUpdateDto request) {

  bookingService.updateBookingStatus(bookingId, request.status);
  return "Booking status updated successfully";
}

@DeleteMapping("/{bookingId}")
public String deleteBooking(@PathVariable Long bookingId) {
    bookingService.deleteBooking(bookingId);
    return "Booking deleted successfully";
}

}
