import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Proyecto_Carpooling';
  isLoading: boolean = true;

  constructor(){}

  ngOnInit(){
    this.isLoading = false;
  }
}
