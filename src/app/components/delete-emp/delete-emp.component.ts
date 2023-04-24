import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-emp',
  templateUrl: './delete-emp.component.html',
  styleUrls: ['./delete-emp.component.css']
})
export class DeleteEmpComponent {
  constructor(private router: Router) {}


  confirmedDelete(){
    this.router.navigate(['/view-all-emp']);
  }

  backToView(){
    this.router.navigate(['/view-all-emp']);
  }
}

