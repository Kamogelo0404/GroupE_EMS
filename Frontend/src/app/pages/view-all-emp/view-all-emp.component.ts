import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { identity } from 'rxjs';
import { Employee } from 'src/app/interface/employee';
import { EmployeeService } from 'src/app/services/employee/employee.service';

@Component({
  selector: 'app-view-all-emp',
  templateUrl: './view-all-emp.component.html',
  styleUrls: ['./view-all-emp.component.css'],
})
export class ViewAllEmpComponent implements OnInit {
  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  employees: Employee[] = [];

  ngOnInit(): void {
    this.getEmployees();
  }


  private getEmployees(){
    this.employeeService.getAllEmployees().subscribe((employees: any) => {
      console.table(employees);
      this.employees = employees;


    });
  }

  deleteEmployee(id: any){
 
    this.router.navigate(['./delete-emp', id]);   
  }

  viewEmployee(id: any)
  {
    this.router.navigate(['./view-single-emp', id]);
  
  }
  
editEmployee(id: any)
{
  this.router.navigate(['./edit-emp', id]);
}
  // private getAllEmployees(){
  //   this.employeeService.getAllEmployees().subscribe(data => {
  //     this.employees = data;
  //   })
  // }
}
