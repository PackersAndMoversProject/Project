package com.backend.entity;
import com.backend.enums.RoleName;
import jakarta.persistence.*;

@Entity
@Table(name = "roles")
public class Role {

    @Id
    private Integer roleId;

    @Enumerated(EnumType.STRING)
    @Column(unique = true, nullable = false)
    private RoleName roleName;

    // getters & setters
    public Integer getRoleId() { return roleId; }
    public void setRoleId(Integer roleId) { this.roleId = roleId; }

    public RoleName getRoleName() { return roleName; }
    public void setRoleName(RoleName roleName) { this.roleName = roleName; }
}

