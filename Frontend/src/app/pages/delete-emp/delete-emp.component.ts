import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/interface/employee';
import { EmployeeService } from 'src/app/services/employee/employee.service';
import { NavigationService } from 'src/app/services/navigation/navigation.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-delete-emp',
  templateUrl: './delete-emp.component.html',
  styleUrls: ['./delete-emp.component.css']
})
export class DeleteEmpComponent implements OnInit {
 id:any;
 employee: Employee = new Employee();
  constructor(private employeeService: EmployeeService, 
    private router:Router,
    private route:ActivatedRoute){}



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


  confirmDelete(id:any){
    this.employeeService.deleteEmployee(id).subscribe( data => {
      console.log(data);
     this.getEmployee(this.id = this.route.snapshot.params['id']); 
     
     Swal.fire({
      icon: 'warning',
      title: 'deleted',
      confirmButtonColor: '#d33',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      },
      customClass: {
        confirmButton: 'btn btn-success'
      },
      confirmButtonText: '<i class="fa fa-trash"></i> OK'
    });
    
      
      //confirmButtonColor: '#d33',
      
    
     this.router.navigate(['./view-all-emp']);
    });
   
  } 


}
