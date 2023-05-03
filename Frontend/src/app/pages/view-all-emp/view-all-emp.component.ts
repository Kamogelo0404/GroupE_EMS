import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/interface/employee';
import { EmployeeService } from 'src/app/services/employee/employee.service';

@Component({
  selector: 'app-view-all-emp',
  templateUrl: './view-all-emp.component.html',
  styleUrls: ['./view-all-emp.component.css'],
})
export class ViewAllEmpComponent implements OnInit {
  constructor(
    private employee: EmployeeService,
    private router: Router
  ) {}

  employees: Employee[] = [];

  ngOnInit(): void {
    this.employee.getAllEmployees().subscribe((employees: any) => {
      console.table(employees);
      this.employees = employees;
    });
  }

  // private getAllEmployees(){
  //   this.employeeService.getAllEmployees().subscribe(data => {
  //     this.employees = data;
  //   })
  // }
}