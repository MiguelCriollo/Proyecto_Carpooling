import { Component } from '@angular/core';
import { PathService } from 'src/app/services/routes.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
  providers: [PathService]
})
export class LoginPageComponent {
  paths: any;

  constructor(private _paths: PathService){
    this.paths = _paths.paths;
  }
}
