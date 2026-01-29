package com.backend.controller;

import com.backend.entity.SupportTicket;
import com.backend.enums.SupportTicketStatus;
import com.backend.service.SupportTicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/support-tickets")
@CrossOrigin("*")
public class SupportTicketController {

    @Autowired
    private SupportTicketService ticketService;

    @PostMapping("/create/{userId}")
    public ResponseEntity<SupportTicket> createTicket(@PathVariable Long userId, @RequestBody SupportTicket ticket) {
        return ResponseEntity.ok(ticketService.createTicket(userId, ticket));
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<SupportTicket>> getUserTickets(@PathVariable Long userId) {
        return ResponseEntity.ok(ticketService.getUserTickets(userId));
    }

    @GetMapping("/all")
    public ResponseEntity<List<SupportTicket>> getAllTickets() {
        return ResponseEntity.ok(ticketService.getAllTickets());
    }

    @GetMapping("/status/{status}")
    public ResponseEntity<List<SupportTicket>> getTicketsByStatus(@PathVariable SupportTicketStatus status) {
        return ResponseEntity.ok(ticketService.getTicketsByStatus(status));
    }

    @PutMapping("/update/{ticketId}")
    public ResponseEntity<SupportTicket> updateTicketStatus(@PathVariable Long ticketId,
                                                            @RequestParam SupportTicketStatus status,
                                                            @RequestParam(required = false) String adminResponse) {
        return ResponseEntity.ok(ticketService.updateTicketStatus(ticketId, status, adminResponse));
    }
}
