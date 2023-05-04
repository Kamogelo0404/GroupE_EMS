import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/interface/employee'; 
import { EmployeeService } from 'src/app/services/employee/employee.service';

@Component({
  selector: 'app-view-single-emp',
  templateUrl: './view-single-emp.component.html',
  styleUrls: ['./view-single-emp.component.css']
})
export class ViewSingleEmpComponent implements OnInit {

  id: any;
  employee: Employee = new Employee();

  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute 
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.employeeService.getEmployeeById(this.id).subscribe(data => {
       console.log(data);
       this.employee = data;
    }, error => console.log(error));

  }

}
