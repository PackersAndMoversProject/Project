package com.backend.util;

import com.backend.entity.Role;
import com.backend.entity.Service;
import com.backend.enums.RoleName;
import com.backend.repository.RoleRepository;
import com.backend.repository.ServiceRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class MasterDataLoader implements CommandLineRunner {

    private final RoleRepository roleRepository;
    private final ServiceRepository serviceRepository;

    public MasterDataLoader(RoleRepository roleRepository,
                            ServiceRepository serviceRepository) {
        this.roleRepository = roleRepository;
        this.serviceRepository = serviceRepository;
    }

    @Override
    public void run(String... args) {

        // -------- INSERT ROLES --------
        if (roleRepository.count() == 0) {

            Role admin = new Role();
            admin.setRoleId(1);
            admin.setRoleName(RoleName.ADMIN);

            Role employee = new Role();
            employee.setRoleId(2);
            employee.setRoleName(RoleName.EMPLOYEE);

            Role driver = new Role();
            driver.setRoleId(3);
            driver.setRoleName(RoleName.DRIVER);

            Role customer = new Role();
            customer.setRoleId(4);
            customer.setRoleName(RoleName.CUSTOMER);

            roleRepository.save(admin);
            roleRepository.save(employee);
            roleRepository.save(driver);
            roleRepository.save(customer);
        }

        // -------- INSERT SERVICES --------
        if (serviceRepository.count() == 0) {

            Service home = new Service();
            home.setServiceId(1);
            home.setServiceName("HOME_SHIFTING");
            home.setBasePrice(5000.0);

            Service office = new Service();
            office.setServiceId(2);
            office.setServiceName("OFFICE_SHIFTING");
            office.setBasePrice(8000.0);

            Service vehicle = new Service();
            vehicle.setServiceId(3);
            vehicle.setServiceName("VEHICLE_SHIFTING");
            vehicle.setBasePrice(3000.0);

            serviceRepository.save(home);
            serviceRepository.save(office);
            serviceRepository.save(vehicle);
        }
    }
}

