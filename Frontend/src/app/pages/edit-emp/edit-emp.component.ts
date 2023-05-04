import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/interface/employee';
import { EmployeeService } from 'src/app/services/employee/employee.service';

@Component({
  selector: 'app-edit-emp',
  templateUrl: './edit-emp.component.html',
  styleUrls: ['./edit-emp.component.css']
})
export class EditEmpComponent implements OnInit{

  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute 
  ) {
    this.route.paramMap.subscribe(paraMap => {
      console.log(paraMap.get('id'))
    
    })
  }
  id: any;
  employee: Employee = new Employee();



  ngOnInit():void{
  
    this.getEmployee(this.id = this.route.snapshot.params['id']);
   //this.getEmployee(this.id=44)
    ;

  }

  private getEmployee(id: any){
    //this.id=44;
    this.employeeService.getEmployeeById(this.id).subscribe(data => {
     
      this.employee = data;
      console.log(data);
    }, error => console.log(error));

  }

  update()
  {
    this.employeeService.editEmployee(this.id, this.employee).subscribe
    (data => {
      this.goToEmployeeList();
    }, error => console.log(error))

  }

  goToEmployeeList()
  {
    this.router.navigate(['./view-all-emp'])
  }



  
}


