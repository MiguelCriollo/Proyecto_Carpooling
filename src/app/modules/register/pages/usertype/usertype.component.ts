import { Component, inject } from '@angular/core';
import { RegisterFormService } from '../../services/register-form.service';
import { FormGroup } from '@angular/forms';
import { FormsService } from 'src/app/shared/form-template/services/forms.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usertype',
  templateUrl: './usertype.component.html',
  styleUrls: ['./usertype.component.css'],
})
export class UsertypeComponent{
  private registerForm = inject(RegisterFormService);
  private formService = inject(FormsService);
  private router = inject(Router);
  usertypeGroup: FormGroup = new FormGroup({});

  ngOnInit() {
    this.registerForm.getRegisterForm().subscribe((form) => {
      this.usertypeGroup = form.get('usertype') as FormGroup;
    });
  }
  getFormControl(controlName: string) {
    return this.formService.getFormControl(this.usertypeGroup, controlName);
  }
  onSubmit() {
    console.log(this.getFormControl('type').value);

    if (!this.usertypeGroup.valid) return;

    if (this.getFormControl('type').value === 'passenger') {
      this.router.navigate(['/register', '2']);
    }
    if (this.getFormControl('type').value === 'driver') {
      this.router.navigate(['/register', 'driverform']);
    }
  }
}
