package com.backend.controller;

import com.backend.service.AdminService;
import com.backend.service.SupportTicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

// Employee reuses admin service methods for verification and support ticket logic
@RestController
@RequestMapping("/api/employee")
@CrossOrigin("*")
public class EmployeeController {

    @Autowired
    private AdminService adminService;
    
    @Autowired
    private SupportTicketService supportTicketService;

    @PutMapping("/verify-document/{documentId}")
    public ResponseEntity<Void> verifyDocument(@PathVariable Long documentId,
                                               @RequestParam Boolean approved,
                                               @RequestParam(required = false) String reason) {
        adminService.verifyDriverDocument(documentId, approved, reason);
        return ResponseEntity.ok().build();
    }
    
    // Additional employee specific endpoints can go here
}
