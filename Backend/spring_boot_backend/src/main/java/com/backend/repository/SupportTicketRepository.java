package com.backend.repository;

import com.backend.entity.SupportTicket;
import com.backend.enums.SupportTicketStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SupportTicketRepository extends JpaRepository<SupportTicket, Long> {
    List<SupportTicket> findByCreatedBy_UserId(Long userId);
    List<SupportTicket> findByStatus(SupportTicketStatus status);
}
