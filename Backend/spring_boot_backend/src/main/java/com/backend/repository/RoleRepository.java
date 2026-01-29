package com.backend.repository;

import com.backend.entity.Role;
import com.backend.entity.User;
import com.backend.enums.RoleName;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByRoleName(RoleName roleName);

	
}

