import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { Employee } from 'src/app/employee';
import { Employee } from 'src/app/employee';
import { EmployeeService } from 'src/app/services/employee/employee.service';
//import { Employee } from 'src/app/interface/employee';

@Component({
  selector: 'app-create-emp',
  templateUrl: './create-emp.component.html',
  styleUrls: ['./create-emp.component.css']
})
export class CreateEmpComponent implements OnInit{

  employee: Employee = new Employee();


  constructor(private employeeService: EmployeeService) {}
  ngOnInit(): void {
    
  }

  save(){
    console.log(this.employee);
    this.saveEmp(); 
  }

  saveEmp()
  {
    this.employeeService.createEmployee
    (this.employee).subscribe(data =>
    {
      console.log(data);
    },
    error => console.log(error));
  }

  back(){
    //this.router.navigate(['/view-all-emp']);
  }


}
