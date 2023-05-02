import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-emp',
  templateUrl: './create-emp.component.html',
  styleUrls: ['./create-emp.component.css']
})
export class CreateEmpComponent {

  constructor(private router: Router) {}

  save(){
    this.router.navigate(['/view-all-emp']);
  }

  back(){
    this.router.navigate(['/view-all-emp']);
  }
}
