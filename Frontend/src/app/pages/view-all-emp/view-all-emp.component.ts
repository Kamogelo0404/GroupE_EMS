import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/interface/employee';
import { EmployeeService } from 'src/app/services/employee/employee.service';

@Component({
  selector: 'app-view-all-emp',
  templateUrl: './view-all-emp.component.html',
  styleUrls: ['./view-all-emp.component.css'],
})
export class ViewAllEmpComponent{

  // employees: Employee[];

  // constructor(private employeeService: EmployeeService,private router: Router) {}

  // ngOnInit(): void {
  //   this.getAllEmployees();
  // }

  // private getAllEmployees(){
  //   this.employeeService.getAllEmployees().subscribe(data => {
  //     this.employees = data;
  //   })
  // }
}
