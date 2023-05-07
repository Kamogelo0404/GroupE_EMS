import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { Employee } from 'src/app/employee';
import { EmployeeService } from 'src/app/services/employee/employee.service';
import { Employee } from 'src/app/interface/employee';
import Swal from 'sweetalert2';

import {
  FormControl,
  Validators,
  FormBuilder,
  FormGroup,
} from '@angular/forms';

@Component({
  selector: 'app-create-emp',
  templateUrl: './create-emp.component.html',
  styleUrls: ['./create-emp.component.css'],
})
export class CreateEmpComponent implements OnInit {
  name = 'Angular';
  employee: Employee = new Employee();
  navigation: any;
  submitted: boolean = false;

  createForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    contactNo: new FormControl('', [
      Validators.required,
      Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
    ]),
  });

  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.createForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contactNo: [
        '',
        [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')],
      ],
    });
  }

  get createFormControl() {
    return this.createForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.createForm.valid) {
      this.employeeService.createEmployee(this.employee).subscribe(
        (data) => {
          console.log(data);
          console.table(this.createForm.value);
          this.router.navigate(['./view-all-emp']);

          Swal.fire({
            icon: 'success',
            title: 'Successfully Created Employee',
            showClass: {
              popup: 'animate__animated animate__fadeInDown',
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp',
            },
            customClass: {
              confirmButton: 'btn btn-success',
            },
            confirmButtonText: '<i class="fas fa-check-circle"></i> OK',
          });
        },
        (error) => console.log(error)
      );
    }
  }

  submit() {
    console.log(this.employee);
    this.saveEmp();
    this.navigation.back();
  }

  saveEmp() {
    this.employeeService.createEmployee(this.employee).subscribe(
      (data) => {
        console.log(data);
        Swal.fire('Thank you...', 'You submitted successfully!', 'success');
        this.router.navigate(['./view-all-emp']);
      },
      (error) => console.log(error)
    );
  }
}
