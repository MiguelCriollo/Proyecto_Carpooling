import { Injectable } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class RegisterFormService {
  private registerForm: FormGroup;
  private registerForm$: BehaviorSubject<FormGroup>;
  private isPageOneValid$: BehaviorSubject<boolean>;

  constructor(formBuilder: FormBuilder) {
    this.registerForm = formBuilder.group({
      page1: new FormGroup({
        username: new FormControl('', [Validators.required]),
      }),
      page2: formBuilder.group(
        {
          email: new FormControl('', [Validators.required, Validators.email]),
          password: new FormControl('', [
            Validators.required,
            Validators.minLength(8),
          ]),
          confirmPassword: new FormControl('', [
            Validators.required,
            Validators.minLength(8),
          ]),
        },
        {
          validators: this.MustMatch('password', 'confirmPassword'),
        }
      ),
      usertype: new FormGroup({
        type: new FormControl('', Validators.required),
      }),
    });

    console.log(this.registerForm.value?.page2?.password);

    this.registerForm$ = new BehaviorSubject<FormGroup>(this.registerForm);
    this.isPageOneValid$ = new BehaviorSubject<boolean>(false);
  }

  getRegisterForm() {
    return this.registerForm$.asObservable();
  }

  isPageOneValid() {
    return this.isPageOneValid$.asObservable();
  }
  updateValidationOfPageOne(valid: boolean) {
    this.isPageOneValid$.next(valid);
  }

  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }
}
