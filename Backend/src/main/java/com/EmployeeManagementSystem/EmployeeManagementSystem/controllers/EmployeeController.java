package com.EmployeeManagementSystem.EmployeeManagementSystem.controllers;


import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.NonNull;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.EmployeeManagementSystem.EmployeeManagementSystem.models.Employee;
import com.EmployeeManagementSystem.EmployeeManagementSystem.repo.EmployeeRepo;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping(value="/employees")
public class EmployeeController {
    @Autowired 
    private EmployeeRepo employeeRepo;
    
    @GetMapping
    public List<Employee>getEmployees(){
        return employeeRepo.findAll();
    }

    @PostMapping
    public Employee save(@Validated @NonNull @RequestBody Employee employee){
        return employeeRepo.save(employee);
    }

    @PutMapping("{empId}")
    public ResponseEntity<Employee> update(@PathVariable int empId,@RequestBody Employee employee) {
        Employee update = employeeRepo.findById(empId)
            .orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id: " + empId));

        update.setFirstName(employee.getFirstName());
        update.setLastName(employee.getLastName());
        update.setEmail(employee.getEmail());
        update.setContactNo(employee.getContactNo());

        employeeRepo.save(update);

        return ResponseEntity.ok(update);
    }

    @DeleteMapping("{empId}")
    public void  delete(@PathVariable("empId") int empId) {
        employeeRepo.deleteById(empId);
    }

}
    


