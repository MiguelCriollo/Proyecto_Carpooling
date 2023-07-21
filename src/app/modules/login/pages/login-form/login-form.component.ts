import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsService } from 'src/app/shared/form-template/services/forms.service';
import { catchError, throwError } from 'rxjs';
import { UserAuthService } from 'src/app/core/services/user-auth.service';
import { Router } from '@angular/router';
import { UserAuthModel } from '../../models/user.model';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {
  loginForm: FormGroup;
  constructor(
    private formService: FormsService,
    private http: HttpClient,
    private userAuth: UserAuthService,
    private router: Router
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }

  getFormControl(controlName: string) {
    return this.formService.getFormControl(this.loginForm, controlName);
  }

  onSubmit() {
    this.loginForm.markAllAsTouched();

    if (this.loginForm.valid) {
      /*       this.http
        .post<UserAuthModel>('http://localhost:1337/api/auth/local', {
          identifier: this.loginForm.value.email,
          password: this.loginForm.value.password,
        })
        .pipe(catchError(this.handleError))
        .subscribe((res) => {
          this.getUserData(res.jwt, res.user.id);
        }); */
      this.userAuth
        .getToken(this.loginForm.value.email, this.loginForm.value.password)
        .subscribe((res) => {
          console.log(res.jwt);
        });
    }
  }

  handleError(error: HttpErrorResponse) {
    this.userAuth.updateUserAuth(false);
    return throwError(() => new Error('there was an error in the post'));
  }

  getUserData(jwt: string, userId: number) {
    this.http
      .get(`http://localhost:1337/api/users/${userId}`, {
        headers: new HttpHeaders({
          Authorization: `Bearer ${jwt}`,
        }),
      })
      .subscribe((res) => {
        console.log(res);
        this.userAuth.updateUserAuth(true);
        this.router.navigate(['/home']);
      });
  }
}
