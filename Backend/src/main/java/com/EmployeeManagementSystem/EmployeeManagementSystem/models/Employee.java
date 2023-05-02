package com.EmployeeManagementSystem.EmployeeManagementSystem.models;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="employee")
public class Employee {
       @Id
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
    public int id;
    public String firstName;
    public String lastName;
    public String email;
    public String contactNo;
    
    @Column(name = "id")
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id=id;
    }

    @Column(name = "firstName")
    public String getFirstName(){
        return firstName;
    }

    public void setFirstName(String firstName){
        this.firstName=firstName;
    }

    @Column(name = "lastName")
    public String getLastName(){
        return lastName;
    }

    public void setLastName(String lastName){
        this.lastName=lastName;
    }

    @Column(name = "email")
    public String getEmail(){
        return email;
    }

    public void setEmail(String email){
        this.email=email;
    }

    @Column(name = "contactNo")
    public String getContactNo(){
        return contactNo;
    }
    public void setContactNo(String contactNo){
        this.contactNo=contactNo;
    }

}

