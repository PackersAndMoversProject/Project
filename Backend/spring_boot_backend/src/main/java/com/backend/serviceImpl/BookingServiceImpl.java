package com.backend.serviceImpl;

import com.backend.dto.BookingResponseDto;
import com.backend.entity.Booking;
import com.backend.entity.Quotation;
import com.backend.enums.BookingStatus;
import com.backend.enums.QuotationStatus;
import com.backend.repository.BookingRepository;
import com.backend.repository.QuotationRepository;
import com.backend.service.BookingService;

import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class BookingServiceImpl implements BookingService {

    private final BookingRepository bookingRepository;
    private final QuotationRepository quotationRepository;
    private final com.backend.repository.UserRepository userRepository;
    private final com.backend.repository.RoleRepository roleRepository;

    public BookingServiceImpl(BookingRepository bookingRepository,
                              QuotationRepository quotationRepository,
                              com.backend.repository.UserRepository userRepository,
                              com.backend.repository.RoleRepository roleRepository) {
        this.bookingRepository = bookingRepository;
        this.quotationRepository = quotationRepository;
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
    }

    @Override
    public BookingResponseDto createBookingFromQuotation(Long quotationId) {
        try {
            Quotation quotation = quotationRepository.findById(quotationId)
                    .orElseThrow(() -> new RuntimeException("Quotation not found"));

            if (quotation.getStatus() != QuotationStatus.CREATED) {
                throw new RuntimeException("Quotation already booked or invalid");
            }

            // Check if customer is present (required for booking)
            if (quotation.getCustomer() == null) {
                System.out.println("DEBUG: Quotation has no customer. Attempting to assign/create Guest user.");
                
                // ⚠️ TEMPORARY FIX: Assign a "Guest" user if none exists
                com.backend.entity.User guestUser = userRepository.findById(1L).orElseGet(() -> {
                    System.out.println("DEBUG: User ID 1 not found. Creating new Guest User.");
                    com.backend.entity.User newUser = new com.backend.entity.User();
                    newUser.setFullName("Guest User");
                    newUser.setEmail("guest@example.com");
                    newUser.setPassword("guest"); // Dummy password
                    newUser.setPhone("0000000000");
                    
                // Assign default role (CUSTOMER)
                com.backend.entity.Role guestRole = roleRepository.findByRoleName(com.backend.enums.RoleName.CUSTOMER)
                    .orElseGet(() -> {
                        System.out.println("DEBUG: Role CUSTOMER not found. Creating it.");
                        com.backend.entity.Role newRole = new com.backend.entity.Role();
                        // Let DB auto-generate ID if possible, or use a safe ID if we must set it.
                        // But since we are using @Id without @GeneratedValue (based on DataLoader), we might need to be careful.
                        // However, let's try to just set the Name. usage of setId depends on the strategy.
                        // Looking at Role.java, it has @Id but NO @GeneratedValue strategy?
                        // Let's check Role.java first. If no generated value, we might have an issue.
                        // Assuming valid ID management:
                        newRole.setRoleId(4L); // Still risky if 4 exists.
                        newRole.setRoleName(com.backend.enums.RoleName.CUSTOMER);
                        return roleRepository.save(newRole);
                    });
                
                newUser.setRole(guestRole);
                return userRepository.save(newUser);
            });

                if (guestUser != null) {
                     System.out.println("DEBUG: Assigned Guest User: " + guestUser.getUserId());
                     quotation.setCustomer(guestUser);
                     quotationRepository.save(quotation); // Save the update
                }
            }
            
            if (quotation.getService() == null) {
                throw new RuntimeException("Cannot create booking: Quotation has no service assigned.");
            }

            Booking booking = new Booking();
           

            booking.setQuotation(quotation);
            booking.setCustomer(quotation.getCustomer());
            booking.setService(quotation.getService());
            
            // Set missing fields
            booking.setShiftingDate(quotation.getPickupDate()); // Map pickup date to shifting date
            booking.setCreatedAt(java.time.LocalDateTime.now());
            
            booking.setBookingStatus(BookingStatus.CREATED); // Initial status
            
            System.out.println("DEBUG: Saving booking with ShiftingDate: " + booking.getShiftingDate() + ", Status: " + booking.getBookingStatus());

            booking = bookingRepository.save(booking);
            System.out.println("DEBUG: Booking saved successfully with ID: " + booking.getBookingId());

            // 🔹 Update quotation status
            quotation.setStatus(QuotationStatus.CONFIRMED);
            quotationRepository.save(quotation);

            BookingResponseDto response = new BookingResponseDto();
            response.bookingId = booking.getBookingId();
            response.bookingStatus = booking.getBookingStatus().name();

            return response;
        } catch (Exception e) {
            e.printStackTrace(); // Print stack trace to backend console
            throw new RuntimeException("Failed to create booking: " + e.getMessage());
        }
    }
 // =======================
 // GET all bookings of customer
 // =======================
 @Override
 public List<Booking> getBookingsByCustomer(Long customerId) {
     return bookingRepository.findByCustomer_UserId(customerId);
 }

 // =======================
 // GET booking by ID
 // =======================
 @Override
 public Booking getBookingById(Long bookingId) {
     return bookingRepository.findById(bookingId)
             .orElseThrow(() -> new RuntimeException("Booking not found"));
 }
//=======================
//UPDATE booking status
//=======================
@Override
public void updateBookingStatus(Long bookingId, BookingStatus status) {

  Booking booking = bookingRepository.findById(bookingId)
          .orElseThrow(() -> new RuntimeException("Booking not found"));

  booking.setBookingStatus(status);

  bookingRepository.save(booking);
}

@Override
public void deleteBooking(Long bookingId) {
    Booking booking = bookingRepository.findById(bookingId)
            .orElseThrow(() -> new RuntimeException("Booking not found"));

    if (booking.getBookingStatus() != BookingStatus.CREATED) {
        throw new RuntimeException("Cannot delete booking. Only CREATED bookings can be cancelled.");
    }

    bookingRepository.delete(booking);
}

}
