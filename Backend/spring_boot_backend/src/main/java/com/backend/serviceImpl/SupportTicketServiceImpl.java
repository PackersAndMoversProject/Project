package com.backend.serviceImpl;

import com.backend.entity.SupportTicket;
import com.backend.entity.User;
import com.backend.enums.SupportTicketStatus;
import com.backend.repository.SupportTicketRepository;
import com.backend.repository.UserRepository;
import com.backend.service.SupportTicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SupportTicketServiceImpl implements SupportTicketService {

    @Autowired
    private SupportTicketRepository ticketRepository;

    @Autowired
    private UserRepository userRepository;

    @Override
    public SupportTicket createTicket(Long userId, SupportTicket ticket) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));
        ticket.setCreatedBy(user);
        ticket.setStatus(SupportTicketStatus.OPEN);
        return ticketRepository.save(ticket);
    }

    @Override
    public SupportTicket updateTicketStatus(Long ticketId, SupportTicketStatus status, String adminResponse) {
        SupportTicket ticket = ticketRepository.findById(ticketId)
                .orElseThrow(() -> new RuntimeException("Ticket not found"));
        ticket.setStatus(status);
        if (adminResponse != null) {
            ticket.setAdminResponse(adminResponse);
        }
        return ticketRepository.save(ticket);
    }

    @Override
    public List<SupportTicket> getAllTickets() {
        return ticketRepository.findAll();
    }

    @Override
    public List<SupportTicket> getUserTickets(Long userId) {
        return ticketRepository.findByCreatedBy_UserId(userId);
    }

    @Override
    public List<SupportTicket> getTicketsByStatus(SupportTicketStatus status) {
        return ticketRepository.findByStatus(status);
    }
}
