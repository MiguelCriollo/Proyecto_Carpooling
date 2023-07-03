import { Component } from '@angular/core';
import { DataUserService } from 'src/app/services/data-user.service';
import { PathService } from 'src/app/services/routes.service';

@Component({
  selector: 'app-register-page1',
  templateUrl: './register-page1.component.html',
  styleUrls: ['./register-page1.component.css'],
  providers: [PathService],
})
export class RegisterPage1Component {
  paths: any;

  constructor(
    private pathService: PathService,
    private userService: DataUserService
  ) {
    this.paths = pathService.paths;
  }

  setNameUser(event: string) {
    this.userService.setName(event);
  }
}
