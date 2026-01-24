package com.backend.service;

import com.backend.dto.QuotationRequestDto;
import com.backend.dto.QuotationResponseDto;

public interface QuotationService {

    QuotationResponseDto createQuotation(QuotationRequestDto request);
}

