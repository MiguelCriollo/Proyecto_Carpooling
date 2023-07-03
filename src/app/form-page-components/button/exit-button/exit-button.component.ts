import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exit-button',
  templateUrl: './exit-button.component.html',
  styleUrls: ['./exit-button.component.css']
})
export class ExitButtonComponent {
  constructor(private route: Router){}
  
  navigateTo(){
    this.route.navigate(['']);
  }
}
