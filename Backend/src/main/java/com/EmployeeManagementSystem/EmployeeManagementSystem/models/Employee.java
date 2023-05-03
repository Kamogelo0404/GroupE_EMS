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
    public String firstname;
    public String lastname;
    public String email;
    public String contactno;
    
    public Employee() {
    }


    public Employee(int id, String firstname, String lastname, String email,String contactno) {
        
        this.id=id;
        this.firstname=firstname;
        this.lastname=lastname;
        this.email=email;
        this.contactno=contactno;
    }

    @Column(name = "id")
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id=id;
    }

    @Column(name = "firstname")
    public String getFirstName(){
        return firstname;
    }

    public void setFirstName(String firstname){
        this.firstname=firstname;
    }

    @Column(name = "lastname")
    public String getLastName(){
        return lastname;
    }

    public void setLastName(String lastname){
        this.lastname=lastname;
    }

    @Column(name = "email")
    public String getEmail(){
        return email;
    }

    public void setEmail(String email){
        this.email=email;
    }

    @Column(name = "contactno")
    public String getContactNo(){
        return contactno;
    }
    public void setContactNo(String contactno){
        this.contactno=contactno;
    }

}

