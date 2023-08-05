import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RegisterFormService } from '../../services/register-form.service';
import { FormsService } from 'src/app/shared/form-template/services/forms.service';
import { UserRegisterService } from 'src/app/core/services/user-register.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { UsertypeComponent } from 'src/app/shared/dialogs/usertype/usertype.component';

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
    private userRegister: UserRegisterService,
    private router: Router,
    private dialog: MatDialog
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
    this.showDialogUserType();
    console.log(this.registerFormData.value.page1.username);
    this.registerFormData.markAllAsTouched();
    if (this.registerFormData.valid) {
      this.userRegister
        .register({
          username: this.registerFormData.value.page1.username,
          email: this.registerFormData.value.page2.email,
          password: this.registerFormData.value.page2.password,
        })
        .subscribe((res) => {
          this.router.navigate(['/home']);
        });
    }
  }

  showDialogUserType() {
    this.dialog.open(UsertypeComponent);
  }
}
