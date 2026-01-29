package com.backend.serviceImpl;

import com.backend.entity.*;
import com.backend.enums.BookingStatus;
import com.backend.repository.*;
import com.backend.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminServiceImpl implements AdminService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private DriverRepository driverRepository;

    @Autowired
    private BookingRepository bookingRepository;

    @Autowired
    private VehicleRepository vehicleRepository;
    
    @Autowired
    private DriverDocumentRepository driverDocumentRepository;

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public List<Driver> getAllDrivers() {
        return driverRepository.findAll();
    }

    @Override
    public List<Booking> getAllBookings() {
        return bookingRepository.findAll();
    }

    @Override
    public Booking assignDriverToBooking(Long bookingId, Long driverId) {
        Booking booking = bookingRepository.findById(bookingId)
                .orElseThrow(() -> new RuntimeException("Booking not found"));
        Driver driver = driverRepository.findById(driverId)
                .orElseThrow(() -> new RuntimeException("Driver not found"));
        
        booking.setDriver(driver);
        booking.setBookingStatus(BookingStatus.ASSIGNED); // Driver assigned
        return bookingRepository.save(booking);
    }

    @Override
    public Vehicle addVehicle(Vehicle vehicle) {
        return vehicleRepository.save(vehicle);
    }

    @Override
    public void verifyDriver(Long driverId) {
        Driver driver = driverRepository.findById(driverId)
                .orElseThrow(() -> new RuntimeException("Driver not found"));
        driver.setIsVerified(true);
        
        // Activate the User account
        if (driver.getUser() != null) {
            driver.getUser().setActive(true);
            userRepository.save(driver.getUser());
        }
        
        driverRepository.save(driver);
    }

    @Override
    public void verifyDriverDocument(Long documentId, Boolean approved, String reason) {
        DriverDocument doc = driverDocumentRepository.findById(documentId)
                .orElseThrow(() -> new RuntimeException("Document not found"));
        doc.setIsVerified(approved);
        if (!approved) {
            doc.setRejectionReason(reason);
        }
        driverDocumentRepository.save(doc);
    }
}
