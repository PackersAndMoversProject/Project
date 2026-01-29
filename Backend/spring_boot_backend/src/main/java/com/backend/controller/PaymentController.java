package com.backend.controller;

import com.backend.dto.PaymentRequestDto;
import com.backend.dto.PaymentResponseDto;
import com.backend.service.PaymentService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/payments")
@CrossOrigin
public class PaymentController {

    private final PaymentService paymentService;

    public PaymentController(PaymentService paymentService) {
        this.paymentService = paymentService;
    }

    // =========================
    // MOCK PAYMENT API
    // =========================
    @PostMapping("/pay/{bookingId}")
    public PaymentResponseDto makePayment(
            @PathVariable Long bookingId,
            @RequestBody PaymentRequestDto request) {

        return paymentService.makePayment(bookingId, request);
    }
}
