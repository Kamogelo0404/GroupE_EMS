import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from 'src/app/services/navigation/navigation.service';

@Component({
  selector: 'app-delete-emp',
  templateUrl: './delete-emp.component.html',
  styleUrls: ['./delete-emp.component.css']
})
export class DeleteEmpComponent {
  constructor(private router:Router){}

  confirmDelete(){
    
    this.router.navigate(['/view-all-emp']);
  }
}
