package com.backend.dto;

import com.backend.enums.RoleName;

public class LoginResponseDto {
    public String token;
    public RoleName role;
    public Long userId;
    public String email;
    public String fullName;
}
