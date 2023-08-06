import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RegisterFormService } from '../../services/register-form.service';
import { FormsService } from 'src/app/shared/form-template/services/forms.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page1',
  templateUrl: './register-page1.component.html',
  styleUrls: ['./register-page1.component.css'],
  providers: [],
})
export class RegisterPage1Component {
  registerFormPage1: FormGroup;
  constructor(
    private registerForm: RegisterFormService,
    private formService: FormsService,
    private router: Router
  ) {
    this.registerFormPage1 = new FormGroup({});
  }

  ngOnInit() {
    this.registerForm.getRegisterForm().subscribe((form) => {
      this.registerFormPage1 = form.get('page1') as FormGroup;
    });
  }

  getFormControl(controlName: string) {
    return this.formService.getFormControl(this.registerFormPage1, controlName);
  }

  onSubmit(){
    this.registerFormPage1.markAllAsTouched();
    this.registerForm.updateValidationOfPageOne(this.registerFormPage1.valid);
    if(this.registerFormPage1.valid){
      this.router.navigate(['/register','usertype']);
    }
  }

}
