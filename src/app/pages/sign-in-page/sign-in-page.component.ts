import { Component } from '@angular/core';
import { PathService } from 'src/app/services/routes.service';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.css'],
  providers: [PathService]
})
export class SignInPageComponent {
  paths: any;

  constructor(private pathService: PathService) {
    this.paths = pathService.paths;
  }
}
