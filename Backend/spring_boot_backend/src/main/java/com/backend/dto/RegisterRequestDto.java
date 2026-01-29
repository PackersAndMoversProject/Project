package com.backend.dto;

import lombok.Data;

@Data
public class RegisterRequestDto {
    public String fullName;
    public String email;
    public String password;
    public String phone;
    public Integer roleId; // Optional: Keep for legacy or remove if using roleName
    
    // New Fields
    public String role; // "CUSTOMER" or "DRIVER"
    public String licenseNumber;
    public String vehicleNumber;
    public String vehicleType; // Enum as String
}
