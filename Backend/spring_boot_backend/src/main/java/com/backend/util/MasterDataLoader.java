package com.backend.util;

import com.backend.entity.Driver;
import com.backend.entity.Role;
import com.backend.entity.Service;
import com.backend.entity.User;
import com.backend.enums.RoleName;
import com.backend.repository.DriverRepository;
import com.backend.repository.RoleRepository;
import com.backend.repository.ServiceRepository;
import com.backend.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

@Component
public class MasterDataLoader implements CommandLineRunner {

    private final RoleRepository roleRepository;
    private final ServiceRepository serviceRepository;
    private final UserRepository userRepository;
    private final DriverRepository driverRepository;

    public MasterDataLoader(RoleRepository roleRepository,
                            ServiceRepository serviceRepository,
                            UserRepository userRepository,
                            DriverRepository driverRepository) {
        this.roleRepository = roleRepository;
        this.serviceRepository = serviceRepository;
        this.userRepository = userRepository;
        this.driverRepository = driverRepository;
    }

    @Override
    @Transactional
    public void run(String... args) throws Exception {
        
        // 1. Roles
        Role adminRole = createRoleIfNotFound(1L, RoleName.ADMIN);
        Role employeeRole = createRoleIfNotFound(2L, RoleName.EMPLOYEE);
        Role driverRole = createRoleIfNotFound(3L, RoleName.DRIVER);
        Role customerRole = createRoleIfNotFound(4L, RoleName.CUSTOMER);

        // 2. Services
        createServiceIfNotFound(1, "HOME_SHIFTING", 5000.0);
        createServiceIfNotFound(2, "OFFICE_SHIFTING", 8000.0);
        createServiceIfNotFound(3, "VEHICLE_SHIFTING", 3000.0);

        // 3. Users
        if (userRepository.findByEmail("admin@example.com").isEmpty()) {
            User admin = new User();
            admin.setFullName("System Admin");
            admin.setEmail("admin@example.com");
            admin.setPhone("9999999999");
            admin.setPassword("admin123");
            admin.setRole(adminRole);
            userRepository.save(admin);
        }

        if (userRepository.findByEmail("driver@example.com").isEmpty()) {
            User driverUser = new User();
            driverUser.setFullName("John Driver");
            driverUser.setEmail("driver@example.com");
            driverUser.setPhone("8888888888");
            driverUser.setPassword("driver123");
            driverUser.setRole(driverRole);
            userRepository.save(driverUser);

            Driver driverProfile = new Driver();
            driverProfile.setUser(driverUser);
            driverProfile.setLicenseNumber("Dl-12345");
            driverProfile.setExperienceYears(4);
            driverRepository.save(driverProfile);
        }

        if (userRepository.findByEmail("customer@example.com").isEmpty()) {
            User customer = new User();
            customer.setFullName("Alice Customer");
            customer.setEmail("customer@example.com");
            customer.setPhone("7777777777");
            customer.setPassword("customer123");
            customer.setRole(customerRole);
            userRepository.save(customer);
        }
        
        System.out.println("Master Data Loaded Successfully!");
    }

    private Role createRoleIfNotFound(Long id, RoleName name) {
        return roleRepository.findByRoleName(name).orElseGet(() -> {
            Role role = new Role();
            role.setRoleId(id);
            role.setRoleName(name);
            return roleRepository.save(role);
        });
    }

    private void createServiceIfNotFound(Integer id, String name, Double price) {
        if (!serviceRepository.existsById(id)) {
            Service service = new Service();
            service.setServiceId(id);
            service.setServiceName(name);
            service.setBasePrice(price);
            serviceRepository.save(service);
        }
    }
}
