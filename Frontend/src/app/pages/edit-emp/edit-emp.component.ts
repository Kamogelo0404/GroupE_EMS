import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/interface/employee';
import { EmployeeService } from 'src/app/services/employee/employee.service';
import Swal from 'sweetalert2';

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
      Swal.fire({
        icon: 'success',
        title: 'Updated',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        },
        customClass: {
          confirmButton: 'btn btn-success'
        },
        confirmButtonText: '<i class="fas fa-check-circle"></i> OK'
      });
      
    }, error => console.log(error))

  }

  goToEmployeeList()
  {
    this.router.navigate(['./view-all-emp'])
  }



  
}


