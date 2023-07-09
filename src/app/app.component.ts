import { Component, OnInit } from '@angular/core';
import { DataUserService } from './core/services/data-user.service';
import { DatabaseUserService } from './core/services/database-users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Proyecto_Carpooling';
  isLoading: boolean = true;

  constructor(private userService: DataUserService, private databaseUserService: DatabaseUserService){}

  ngOnInit(){
    this.isLoading = false;
  }
}
