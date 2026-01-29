package com.backend.service;

import com.backend.dto.LoginRequestDto;
import com.backend.dto.LoginResponseDto;
import com.backend.dto.RegisterRequestDto;

public interface AuthService {
    LoginResponseDto login(LoginRequestDto loginRequest);
    String register(RegisterRequestDto registerRequest);
}
