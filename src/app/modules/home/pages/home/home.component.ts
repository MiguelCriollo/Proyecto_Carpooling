import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { delay } from 'rxjs';
import { IsAuth } from 'src/app/core/models/auth-user.model';
import { UserAuthService } from 'src/app/core/services/user-auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, IsAuth {
  username: string = '';
  router = inject(Router);
  userAuth = inject(UserAuthService);
  isAuth = false;

  ngOnInit() {
    if (this.userAuth.isUserAlrealdyAuth()) {
      this.userAuth
        .getDataUser(this.userAuth.localJwt)
        .pipe(delay(500))
        .subscribe((res) => {
          this.username = res.username;
          this.isAuth = true;
          console.log(this.username);
          this.userAuth.updateUserAuth(true);
        });
    }
  }

  logout() {
    sessionStorage.clear();
    this.isAuth = false;
    this.router.navigate(['']);
  }

  toDriverForm(){
    this.router.navigate(['/home', 'driverform']);
  }

  isAlreadyAuth() {
    if (this.isAuth) {
      return false;
    }

    return true;
  }
}
