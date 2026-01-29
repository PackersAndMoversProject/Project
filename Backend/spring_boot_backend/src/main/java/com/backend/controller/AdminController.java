package com.backend.controller;

import com.backend.entity.Booking;
import com.backend.entity.Driver;
import com.backend.entity.User;
import com.backend.entity.Vehicle;
import com.backend.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin("*")
public class AdminController {

    @Autowired
    private AdminService adminService;

    @GetMapping("/users")
    public ResponseEntity<List<User>> getAllUsers() {
        return ResponseEntity.ok(adminService.getAllUsers());
    }

    @GetMapping("/drivers")
    public ResponseEntity<List<Driver>> getAllDrivers() {
        return ResponseEntity.ok(adminService.getAllDrivers());
    }

    @GetMapping("/bookings")
    public ResponseEntity<List<Booking>> getAllBookings() {
        return ResponseEntity.ok(adminService.getAllBookings());
    }

    @PutMapping("/assign-driver/{bookingId}")
    public ResponseEntity<Booking> assignDriver(@PathVariable Long bookingId, @RequestParam Long driverId) {
        return ResponseEntity.ok(adminService.assignDriverToBooking(bookingId, driverId));
    }

    @PostMapping("/add-vehicle")
    public ResponseEntity<Vehicle> addVehicle(@RequestBody Vehicle vehicle) {
        return ResponseEntity.ok(adminService.addVehicle(vehicle));
    }

    @PutMapping("/verify-driver/{driverId}")
    public ResponseEntity<Void> verifyDriver(@PathVariable Long driverId) {
        adminService.verifyDriver(driverId);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/verify-document/{documentId}")
    public ResponseEntity<Void> verifyDocument(@PathVariable Long documentId,
                                               @RequestParam Boolean approved,
                                               @RequestParam(required = false) String reason) {
        adminService.verifyDriverDocument(documentId, approved, reason);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/drivers/pending")
    public ResponseEntity<List<Driver>> getPendingDrivers() {
        return ResponseEntity.ok(adminService.getAllDrivers().stream().filter(d -> !d.getIsVerified()).toList());
    }

    @PutMapping("/drivers/{driverId}/approve")
    public ResponseEntity<Void> approveDriver(@PathVariable Long driverId) {
        adminService.verifyDriver(driverId);
        return ResponseEntity.ok().build();
    }
}
