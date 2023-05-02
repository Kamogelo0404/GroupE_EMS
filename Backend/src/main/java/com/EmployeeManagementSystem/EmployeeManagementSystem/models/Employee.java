package com.EmployeeManagementSystem.EmployeeManagementSystem.models;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="employee")
public class Employee {
    public int id;
    public String firstName;
    public String lastName;
    public String email;
    public String contactNo;

    public Employee() {
    }


    public Employee(int id, String firstName, String lastName, String email,String contactNo) {
        
        this.id=id;
        this.firstName=firstName;
        this.lastName=lastName;
        this.email=email;
        this.contactNo=contactNo;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public int getId() {
        return id;
    }

    public void setId(int id){
        this.id=id;
    }

    public String getFirstName(){
        return firstName;
    }

    public void setFirstName(String firstName){
        this.firstName=firstName;
    }

    public String getLastName(){
        return lastName;
    }

    public void setLastName(String lastName){
        this.lastName=lastName;
    }

    public String getEmail(){
        return email;
    }

    public void setEmail(String email){
        this.email=email;
    }

    public String getContactNo(){
        return contactNo;
    }
    public void setContactNo(String contactNo){
        this.contactNo=contactNo;
    }

}

