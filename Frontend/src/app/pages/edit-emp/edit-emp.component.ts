import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/interface/employee';
import { EmployeeService } from 'src/app/services/employee/employee.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-emp',
  templateUrl: './edit-emp.component.html',
  styleUrls: ['./edit-emp.component.css'],
})
export class EditEmpComponent implements OnInit {
  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.route.paramMap.subscribe((paraMap) => {
      console.log(paraMap.get('id'));
    });
  }
  id: any;
  employee: Employee = new Employee();
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

  ngOnInit(): void {
    this.getEmployee((this.id = this.route.snapshot.params['id']));
    //this.getEmployee(this.id=44)
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
  private getEmployee(id: any) {
    //this.id=44;

    this.employeeService.getEmployeeById(this.id).subscribe(
      (data) => {
        this.employee = data;
        console.log(data);
      },
      (error) => console.log(error)
    );

  }

  update() {
    this.submitted=true;
    if(this.createForm.valid){

    this.employeeService.editEmployee(this.id, this.employee).subscribe(
      (data) => {
        this.goToEmployeeList();
        Swal.fire({
          icon: 'success',
          title: 'Successfully Updated Employee',
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

  goToEmployeeList() {
    this.router.navigate(['./view-all-emp']);
  }
}