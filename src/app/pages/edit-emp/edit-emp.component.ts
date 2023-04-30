import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-emp',
  templateUrl: './edit-emp.component.html',
  styleUrls: ['./edit-emp.component.css']
})
export class EditEmpComponent {

  constructor(private router: Router) {}
  
  backToEmpolyee(){
    this.router.navigate(['/view-emp']);
  }
}
