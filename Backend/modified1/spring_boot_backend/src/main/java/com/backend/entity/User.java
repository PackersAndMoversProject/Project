package com.backend.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

    private String fullName;
    private String email;
    private String phone;
    private String password;

    @ManyToOne
    @JoinColumn(name = "role_id")
    private Role role;

    private Boolean isActive = true;

    // getters & setters
}

