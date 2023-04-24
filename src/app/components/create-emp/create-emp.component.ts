import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-emp',
  templateUrl: './create-emp.component.html',
  styleUrls: ['./create-emp.component.css']
})
export class CreateEmpComponent {

  constructor(private router: Router) {}

  saveNewEmp(){
    alert("hi there");
  }
}
