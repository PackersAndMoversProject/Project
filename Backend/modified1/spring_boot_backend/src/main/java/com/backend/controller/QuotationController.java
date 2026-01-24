package com.backend.controller;

import com.backend.dto.QuotationRequestDto;
import com.backend.dto.QuotationResponseDto;
import com.backend.service.QuotationService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/quotations")
@CrossOrigin
public class QuotationController {

    private final QuotationService quotationService;

    public QuotationController(QuotationService quotationService) {
        this.quotationService = quotationService;
    }

    @PostMapping
    public QuotationResponseDto createQuotation(
            @RequestBody QuotationRequestDto request) {

        return quotationService.createQuotation(request);
    }
}

