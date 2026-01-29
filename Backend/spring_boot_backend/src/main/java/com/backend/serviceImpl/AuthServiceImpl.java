package com.backend.serviceImpl;

import com.backend.dto.LoginRequestDto;
import com.backend.dto.LoginResponseDto;
import com.backend.dto.RegisterRequestDto;
import com.backend.entity.Role;
import com.backend.entity.User;
import com.backend.enums.RoleName;
import com.backend.repository.RoleRepository;
import com.backend.repository.UserRepository;
import com.backend.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AuthServiceImpl implements AuthService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private com.backend.repository.DriverRepository driverRepository;

    @Override
    public LoginResponseDto login(LoginRequestDto loginRequest) {
        Optional<User> userOpt = userRepository.findByEmail(loginRequest.getEmail());
        
        if (userOpt.isPresent()) {
            User user = userOpt.get();
            // In real app: BCrypt.checkpw(loginRequest.getPassword(), user.getPassword())
            if (user.getPassword().equals(loginRequest.getPassword())) {
                
                // Check if user is active (Driver approval check)
                if (!user.getActive()) {
                    throw new RuntimeException("Account is inactive. Pending Admin Approval.");
                }

                LoginResponseDto response = new LoginResponseDto();
                response.userId = user.getUserId(); 
                response.email = user.getEmail();
                response.fullName = user.getFullName();
                response.role = user.getRole().getRoleName();
                response.token = "mock-jwt-token-" + user.getUserId();
                return response;
            }
        }
        throw new RuntimeException("Invalid email or password");
    }

    @Override
    public String register(RegisterRequestDto req) {
        if (userRepository.findByEmail(req.getEmail()).isPresent()) {
            throw new RuntimeException("Email already in use");
        }

        User user = new User();
        user.setFullName(req.getFullName());
        user.setEmail(req.getEmail());
        user.setPhone(req.getPhone());
        user.setPassword(req.getPassword()); // In real app: encode password

        // Determine Role
        String roleStr = req.getRole() != null ? req.getRole().toUpperCase() : "CUSTOMER";
        RoleName roleNameEnum = RoleName.CUSTOMER;
        if ("DRIVER".equals(roleStr)) {
            roleNameEnum = RoleName.DRIVER;
        }

        Role role = roleRepository.findByRoleName(roleNameEnum)
                .orElseThrow(() -> new RuntimeException("Role " + roleStr + " not found"));
        
        user.setRole(role);

        // Driver Specific Logic
        if (roleNameEnum == RoleName.DRIVER) {
            user.setActive(false); // Inactive until approved
            User savedUser = userRepository.save(user);

            com.backend.entity.Driver driver = new com.backend.entity.Driver();
            driver.setUser(savedUser);
            driver.setLicenseNumber(req.getLicenseNumber());
            driver.setVehicleNumber(req.getVehicleNumber());
            if (req.getVehicleType() != null) {
                driver.setVehicleType(com.backend.enums.VehicleType.valueOf(req.getVehicleType()));
            }
            driver.setIsVerified(false);
            driverRepository.save(driver);

            return "Driver registration successful. Pending Admin Approval.";
        } else {
            // Customer
            user.setActive(true);
            userRepository.save(user);
            return "User registered successfully";
        }
    }
}
