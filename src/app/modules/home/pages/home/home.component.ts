import { Component, OnInit, inject } from '@angular/core';
import { delay } from 'rxjs';
import { UserAuthService } from 'src/app/core/services/user-auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit{
  userAuth = inject(UserAuthService);
  username: string = "";

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
}
