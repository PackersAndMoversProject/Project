package com.backend.repository;

import com.backend.entity.Quotation;
import com.backend.enums.QuotationStatus;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface QuotationRepository extends JpaRepository<Quotation, Long> {
    List<Quotation> findByCustomer_UserId(Long customerId);
    List<Quotation> findByStatus(QuotationStatus status);
}
