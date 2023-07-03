import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataUserService } from 'src/app/services/data-user.service';
import { DatabaseUserService } from 'src/app/services/database-users.service';
import { PathService } from 'src/app/services/routes.service';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.css'],
  providers: [PathService],
})
export class SignInPageComponent {
  paths: any;

  constructor(
    private pathService: PathService,
    private userService: DataUserService,
    private databaseUserService: DatabaseUserService,
    private route: Router
  ) {
    this.paths = pathService.paths;
  }

  setEmailUser(event: string) {
    this.userService.setEmail(event);
  }
  setPasswordUser(event: string) {
    this.userService.setPassword(event);
  }
}
