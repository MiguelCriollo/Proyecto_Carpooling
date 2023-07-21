import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RegisterFormService } from '../../services/register-form.service';
import { FormsService } from 'src/app/shared/form-template/services/forms.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-register-page2',
  templateUrl: './register-page2.component.html',
  styleUrls: ['./register-page2.component.css'],
  providers: [],
})
export class RegisterPage2Component {
  registerFormPage2: FormGroup;
  registerFormData: FormGroup;

  constructor(
    private registerForm: RegisterFormService,
    private formService: FormsService,
    private http: HttpClient
  ) {
    this.registerFormPage2 = new FormGroup({});
    this.registerFormData = new FormGroup({});
  }

  ngOnInit() {
    this.registerForm.getRegisterForm().subscribe((form) => {
      this.registerFormData = form;
      this.registerFormPage2 = form.get('page2') as FormGroup;
    });
  }

  getFormControl(controlName: string) {
    return this.formService.getFormControl(this.registerFormPage2, controlName);
  }

  onSubmit() {
    console.log(this.registerFormData.value.page1.username);
    this.registerFormData.markAllAsTouched();
    if (this.registerFormData.valid) {
      this.http
        .post('http://localhost:1337/api/auth/local/register', {
          username: this.registerFormData.value.page1.username,
          email: this.registerFormData.value.page2.email,
          password: this.registerFormData.value.page2.password,
        })
        .pipe(catchError(this.handleError))
        .subscribe((res) => {
          console.log(res);
        });
    }
  }

  handleError(error: HttpErrorResponse) {
    console.log(error);
    return throwError(() => new Error('Error'));
  }
}
