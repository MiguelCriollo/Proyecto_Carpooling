import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RegisterFormService } from '../../services/register-form.service';
import { FormsService } from 'src/app/shared/form-template/services/forms.service';

@Component({
  selector: 'app-register-page2',
  templateUrl: './register-page2.component.html',
  styleUrls: ['./register-page2.component.css'],
  providers: [],
})
export class RegisterPage2Component {
  registerFormPage2: FormGroup;

  constructor(
    private registerForm: RegisterFormService,
    private formService: FormsService
  ) {
    this.registerFormPage2 = new FormGroup({});
  }

  ngOnInit() {
    this.registerForm.getRegisterForm().subscribe((form) => {
      this.registerFormPage2 = form.get('page2') as FormGroup;
    });
  }

  getFormControl(controlName: string) {
    return this.formService.getFormControl(this.registerFormPage2, controlName);
  }

  onSubmit(){
    console.log(this.registerFormPage2.value);
  }
}
