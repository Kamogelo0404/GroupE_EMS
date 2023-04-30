import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.css']
})
export class BackButtonComponent {

  constructor(private location:Location, private navigation:NavigationService){}

  // goBackToPrevPage(){
  //   this.location.back();
  // }
  back():void{
    this.navigation.back();
  }
}
