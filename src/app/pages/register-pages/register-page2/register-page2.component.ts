import { Component } from '@angular/core';
import { DataUserService } from 'src/app/services/data-user.service';
import { PathService } from 'src/app/services/routes.service';

@Component({
  selector: 'app-register-page2',
  templateUrl: './register-page2.component.html',
  styleUrls: ['./register-page2.component.css'],
  providers: [PathService],
})
export class RegisterPage2Component {
  paths: any;

  constructor(private pathService: PathService, private userService: DataUserService) {
    this.paths = pathService.paths;
  }

  setEmailUser(event: string) {
    this.userService.setEmail(event);
  }
  setPasswordUser(event: string) {
    this.userService.setPassword(event);
  }
  setConfirmedPasswordUser(event: string) {
    this.userService.setConfirmedPassword(event);
  }
}
