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

  ngOnInit():void{
    this.getEmployee(this.id = this.route.snapshot.params['id']);
    ;

  }


  private getEmployee(id:any){
  
    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      console.log(data);
      this.employee = data;
    }, error => console.log(error));

  }

  deleteEmployee(id: any){
 
    this.router.navigate(['./delete-emp', id]);   
  }

  editEmployee(id: any)
{
  this.router.navigate(['./edit-emp', id]);
}

}
