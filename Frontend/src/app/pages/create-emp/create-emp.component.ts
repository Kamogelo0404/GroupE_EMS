import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { Employee } from 'src/app/employee';
import { EmployeeService } from 'src/app/services/employee/employee.service';
import { Employee } from 'src/app/interface/employee';

@Component({
  selector: 'app-create-emp',
  templateUrl: './create-emp.component.html',
  styleUrls: ['./create-emp.component.css']
})
export class CreateEmpComponent implements OnInit{

  employee: Employee = new Employee();
  navigation: any;


  constructor(private employeeService: EmployeeService, private router:Router) {}
  ngOnInit(): void {
    
  }

  save(){
    console.log(this.employee);
    this.saveEmp(); 
    this.navigation.back();
 
  }

  saveEmp()
  {
    this.employeeService.createEmployee
    (this.employee).subscribe(data =>
    {
      console.log(data);
      alert('New employee added successfully');
      this.router.navigate(['./view-all-emp']);
    },
    error => console.log(error));
    
  }

  back(){
    //this.router.navigate(['/view-all-emp']);
  }


}
