package com.backend.service;

import com.backend.entity.Driver;
import com.backend.entity.DriverDocument;
import com.backend.entity.Booking;

import java.util.List;

public interface DriverService {
    Driver getDriverProfile(Long userId);
    Driver updateDriverAvailability(Long driverId, Boolean available);
    DriverDocument uploadDocument(Long driverId, String docName, String docUrl);
    List<DriverDocument> getDriverDocuments(Long driverId);
    List<Booking> getAssignedJobs(Long driverId);
    Booking acceptJob(Long driverId, Long bookingId);
    Booking markJobCompleted(Long driverId, Long bookingId);
}
