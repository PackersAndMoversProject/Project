package com.backend.service;

import com.backend.dto.QuotationRequestDto;
import com.backend.dto.QuotationResponseDto;
import com.backend.entity.Quotation;

import java.util.List;

public interface QuotationService {

    // already exists
    QuotationResponseDto createQuotation(QuotationRequestDto request);

    // NEW
    List<Quotation> getQuotationsByCustomer(Long customerId);

    // NEW
    Quotation getQuotationById(Long quotationId);
}
