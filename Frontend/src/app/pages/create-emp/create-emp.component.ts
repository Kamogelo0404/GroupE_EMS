import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { Employee } from 'src/app/employee';
import { EmployeeService } from 'src/app/services/employee/employee.service';
import { Employee } from 'src/app/interface/employee';
import { FormControl,Validators,FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-emp',
  templateUrl: './create-emp.component.html',
  styleUrls: ['./create-emp.component.css']
})
export class CreateEmpComponent implements OnInit{

  employee: Employee = new Employee();
  navigation: any;
  submitted: boolean= false;

  createForm = new FormGroup({
    firstName: new FormControl('',Validators.required),
    lastName: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required, Validators.email]),
    contactNo: new FormControl('',Validators.required),
  });
  


  constructor(
    private employeeService: EmployeeService, 
    private router:Router,
    private fb: FormBuilder
    ) {}
    
  ngOnInit(): void {
    this.createForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contactNo: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
    });
  }

  get createFormControl() {
    return this.createForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.createForm.valid) {
      this.employeeService.createEmployee
    (this.employee).subscribe(data =>
    {
      console.log(data);
      alert('New employee added successfully');
       console.table(this.createForm.value);
      this.router.navigate(['./view-all-emp']);
    },
    error => console.log(error));
      

    }
  }

  submit(){
    console.log(this.employee);
    this.saveEmp(); 
    this.navigation.back();

  }

  saveEmp()
  {
    // this.employeeService.createEmployee
    // (this.employee).subscribe(data =>
    // {
    //   console.log(data);
    //   alert('New employee added successfully');
    //   this.router.navigate(['./view-all-emp']);
    // },
    // error => console.log(error));
    
  }




}
