package com.backend.service;

import com.backend.dto.PaymentRequestDto;
import com.backend.dto.PaymentResponseDto;

public interface PaymentService {

    PaymentResponseDto makePayment(Long bookingId, PaymentRequestDto request);
}
