package com.backend.controller;

import com.backend.dto.QuotationRequestDto;
import com.backend.dto.QuotationResponseDto;
import com.backend.entity.Quotation;
import com.backend.service.QuotationService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/quotations")
@CrossOrigin
public class QuotationController {

    private final QuotationService quotationService;

    public QuotationController(QuotationService quotationService) {
        this.quotationService = quotationService;
    }

    // already exists
    @PostMapping
    public QuotationResponseDto createQuotation(@RequestBody QuotationRequestDto request) {
        return quotationService.createQuotation(request);
    }

    // 🔹 GET ALL quotations for a customer
    @GetMapping("/customer/{customerId}")
    public List<Quotation> getQuotationsByCustomer(@PathVariable Long customerId) {
        return quotationService.getQuotationsByCustomer(customerId);
    }

    // 🔹 GET quotation by ID
    @GetMapping("/{quotationId}")
    public Quotation getQuotationById(@PathVariable Long quotationId) {
        return quotationService.getQuotationById(quotationId);
    }
}
