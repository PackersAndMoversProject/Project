package com.backend.serviceImpl;

import com.backend.entity.Booking;
import com.backend.entity.Driver;
import com.backend.entity.DriverDocument;
import com.backend.enums.BookingStatus;
import com.backend.repository.BookingRepository;
import com.backend.repository.DriverDocumentRepository;
import com.backend.repository.DriverRepository;
import com.backend.service.DriverService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DriverServiceImpl implements DriverService {

    @Autowired
    private DriverRepository driverRepository;
    
    @Autowired
    private DriverDocumentRepository driverDocumentRepository;
    
    @Autowired
    private BookingRepository bookingRepository;

    @Override
    public Driver getDriverProfile(Long userId) {
        // Assuming driverId is same as userId due to @MapsId
        return driverRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("Driver profile not found"));
    }

    @Override
    public Driver updateDriverAvailability(Long driverId, Boolean available) {
        Driver driver = driverRepository.findById(driverId)
                .orElseThrow(() -> new RuntimeException("Driver not found"));
        driver.setAvailability(available);
        return driverRepository.save(driver);
    }

    @Override
    public DriverDocument uploadDocument(Long driverId, String docName, String docUrl) {
        Driver driver = driverRepository.findById(driverId)
                .orElseThrow(() -> new RuntimeException("Driver not found"));
        
        DriverDocument doc = new DriverDocument();
        doc.setDriver(driver);
        doc.setDocumentName(docName);
        doc.setDocumentUrl(docUrl);
        doc.setIsVerified(false);
        
        return driverDocumentRepository.save(doc);
    }

    @Override
    public List<DriverDocument> getDriverDocuments(Long driverId) {
        return driverDocumentRepository.findByDriver_DriverId(driverId);
    }

    @Override
    public List<Booking> getAssignedJobs(Long driverId) {
        // Need to add method in BookingRepository or use example
        // Assuming Booking has driver field
        return bookingRepository.findAll().stream()
                .filter(b -> b.getDriver() != null && b.getDriver().getDriverId().equals(driverId))
                .toList(); 
    }

    @Override
    public Booking acceptJob(Long driverId, Long bookingId) {
        Booking booking = bookingRepository.findById(bookingId)
                .orElseThrow(() -> new RuntimeException("Booking not found"));
        
        if (booking.getDriver() != null && !booking.getDriver().getDriverId().equals(driverId)) {
             throw new RuntimeException("Booking already assigned to another driver");
        }
        
        // Logic to confirm acceptance if needed, or if admin assigns it directly
        // Currently assuming admin assigns and driver sees it.
        // If driver "accepts", maybe we update status to DRIVER_ASSIGNED if it was pending?
        // Let's assume acceptance moves it to CONFIRMED_BY_DRIVER state if we had one.
        // For now, just return booking.
        return booking;
    }

    @Override
    public Booking markJobCompleted(Long driverId, Long bookingId) {
        Booking booking = bookingRepository.findById(bookingId)
                .orElseThrow(() -> new RuntimeException("Booking not found"));
        
        if (!booking.getDriver().getDriverId().equals(driverId)) {
            throw new RuntimeException("Unauthorized");
        }
        
        booking.setBookingStatus(BookingStatus.COMPLETED);
        // Update driver earnings logic here if needed
        return bookingRepository.save(booking);
    }
}
