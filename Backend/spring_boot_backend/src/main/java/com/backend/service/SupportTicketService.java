package com.backend.service;

import com.backend.entity.SupportTicket;
import com.backend.enums.SupportTicketCategory;
import com.backend.enums.SupportTicketStatus;

import java.util.List;

public interface SupportTicketService {
    SupportTicket createTicket(Long userId, SupportTicket ticket);
    SupportTicket updateTicketStatus(Long ticketId, SupportTicketStatus status, String adminResponse);
    List<SupportTicket> getAllTickets();
    List<SupportTicket> getUserTickets(Long userId);
    List<SupportTicket> getTicketsByStatus(SupportTicketStatus status);
}
