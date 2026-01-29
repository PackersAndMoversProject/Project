package com.backend.serviceImpl;

import com.backend.dto.PaymentRequestDto;
import com.backend.dto.PaymentResponseDto;
import com.backend.entity.Booking;
import com.backend.entity.Payment;
import com.backend.enums.PaymentStatus;
import com.backend.repository.BookingRepository;
import com.backend.repository.PaymentRepository;
import com.backend.service.PaymentService;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class PaymentServiceImpl implements PaymentService {

    private final PaymentRepository paymentRepository;
    private final BookingRepository bookingRepository;

    public PaymentServiceImpl(PaymentRepository paymentRepository,
                              BookingRepository bookingRepository) {
        this.paymentRepository = paymentRepository;
        this.bookingRepository = bookingRepository;
    }

    @Override
    public PaymentResponseDto makePayment(Long bookingId, PaymentRequestDto request) {

        Booking booking = bookingRepository.findById(bookingId)
                .orElseThrow(() -> new RuntimeException("Booking not found"));

        Payment payment = new Payment();
        payment.setBooking(booking);
        payment.setAmount(
                booking.getQuotation().getQuotedAmount()
        );
        payment.setPaymentMethod(request.paymentMethod);
        payment.setPaymentStatus(PaymentStatus.SUCCESS);
        payment.setTransactionId(UUID.randomUUID().toString());

        paymentRepository.save(payment);

        PaymentResponseDto response = new PaymentResponseDto();
        response.paymentId = payment.getPaymentId();
        response.paymentStatus = payment.getPaymentStatus().name();
        response.transactionId = payment.getTransactionId();

        return response;
    }
}
