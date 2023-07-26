import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { delay } from 'rxjs';
import { UserAuthService } from 'src/app/core/services/user-auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit{
  username: string = "";
  router = inject(Router);
  userAuth = inject(UserAuthService);


  ngOnInit() {
    if (this.userAuth.isUserAlrealdyAuth()) {
      this.userAuth
        .getDataUser(this.userAuth.localJwt)
        .pipe(delay(500))
        .subscribe((res) => {
          this.username = res.username;
          console.log(this.username);
        });
    }
  }

  onClick(){
    sessionStorage.clear();
    this.router.navigate(['']);
  }
}
