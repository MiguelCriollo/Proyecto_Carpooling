import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsService } from 'src/app/shared/form-template/services/forms.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {
  loginForm: FormGroup;
  constructor(private formService: FormsService, private http: HttpClient) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    });
  }

  getFormControl(controlName: string) {
    return this.formService.getFormControl(this.loginForm, controlName);
  }

  onSubmit() {
    console.log(this.loginForm.value);
    console.log(this.loginForm.valid);
    if(this.loginForm.valid){
      this.http.post('http://localhost:1337/api/auth/local', {
        "identifier": this.loginForm.value.email,
        "password": this.loginForm.value.password
      }).subscribe(res=>{
        console.log(res);
      })
    }
  }
}
