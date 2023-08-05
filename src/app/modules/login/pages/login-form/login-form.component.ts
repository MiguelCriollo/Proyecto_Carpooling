import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsService } from 'src/app/shared/form-template/services/forms.service';
import { UserAuthService } from 'src/app/core/services/user-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {
  loginForm: FormGroup;
  constructor(
    private formService: FormsService,
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

  ngOnInit() {
  }

  getFormControl(controlName: string) {
    return this.formService.getFormControl(this.loginForm, controlName);
  }

  onSubmit() {
    this.loginForm.markAllAsTouched();

    if (this.loginForm.valid) {
      this.userAuth
        .getToken(this.loginForm.value.email, this.loginForm.value.password)
        .subscribe((res) => {
          this.userAuth.getDataUser(res.jwt).subscribe((res) => {
            console.log(res);
            this.userAuth.updateUserAuth(true);
            this.router.navigate(['/home']);
          });
        });
    }
  }
}
