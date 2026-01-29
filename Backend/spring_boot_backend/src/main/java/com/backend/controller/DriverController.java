package com.backend.controller;

import com.backend.entity.Booking;
import com.backend.entity.Driver;
import com.backend.entity.DriverDocument;
import com.backend.service.DriverService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/drivers")
@CrossOrigin("*")
public class DriverController {

    @Autowired
    private DriverService driverService;

    @GetMapping("/{driverId}/profile")
    public ResponseEntity<Driver> getDriverProfile(@PathVariable Long driverId) {
        return ResponseEntity.ok(driverService.getDriverProfile(driverId));
    }

    @PutMapping("/{driverId}/availability")
    public ResponseEntity<Driver> updateAvailability(@PathVariable Long driverId, @RequestParam Boolean available) {
        return ResponseEntity.ok(driverService.updateDriverAvailability(driverId, available));
    }

    @PostMapping("/{driverId}/upload-document")
    public ResponseEntity<DriverDocument> uploadDocument(@PathVariable Long driverId,
                                                         @RequestParam String docName,
                                                         @RequestParam String docUrl) {
        return ResponseEntity.ok(driverService.uploadDocument(driverId, docName, docUrl));
    }

    @GetMapping("/{driverId}/documents")
    public ResponseEntity<List<DriverDocument>> getDocuments(@PathVariable Long driverId) {
        return ResponseEntity.ok(driverService.getDriverDocuments(driverId));
    }

    @GetMapping("/{driverId}/jobs")
    public ResponseEntity<List<Booking>> getAssignedJobs(@PathVariable Long driverId) {
        return ResponseEntity.ok(driverService.getAssignedJobs(driverId));
    }

    @PutMapping("/{driverId}/accept-job/{bookingId}")
    public ResponseEntity<Booking> acceptJob(@PathVariable Long driverId, @PathVariable Long bookingId) {
        return ResponseEntity.ok(driverService.acceptJob(driverId, bookingId));
    }

    @PutMapping("/{driverId}/graduate-job/{bookingId}")
    public ResponseEntity<Booking> completeJob(@PathVariable Long driverId, @PathVariable Long bookingId) {
        return ResponseEntity.ok(driverService.markJobCompleted(driverId, bookingId));
    }
}
