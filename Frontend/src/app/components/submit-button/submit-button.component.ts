import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/employee';
import { NavigationService } from 'src/app/services/navigation/navigation.service';

@Component({
  selector: 'app-submit-button',
  templateUrl: './submit-button.component.html',
  styleUrls: ['./submit-button.component.css']
})
export class SubmitButtonComponent {

  employee: Employee = new Employee();
  constructor(private router:Router, private navigation:NavigationService ){}

  submit(){
    console.log(this.employee)
    this.navigation.back();
  }
}
