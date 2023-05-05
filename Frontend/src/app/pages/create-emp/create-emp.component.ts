import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { Employee } from 'src/app/employee';
import { EmployeeService } from 'src/app/services/employee/employee.service';
import { Employee } from 'src/app/interface/employee';
import Swal from 'sweetalert2';
 


@Component({
  selector: 'app-create-emp',
  templateUrl: './create-emp.component.html',
  styleUrls: ['./create-emp.component.css']
})
export class CreateEmpComponent implements OnInit{
  name="Angular";
  employee: Employee = new Employee();
  navigation: any;


  constructor(private employeeService: EmployeeService, private router:Router) {}
  ngOnInit(): void {
    
  }

  submit(){
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
      Swal.fire('Thank you...', 'You submitted successfully!', 'success'
      );
      this.router.navigate(['./view-all-emp']);
    },
    error => console.log(error));
    
  }
  



}
