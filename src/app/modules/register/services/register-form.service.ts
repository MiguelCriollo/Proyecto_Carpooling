import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class RegisterFormService {
  private registerForm: FormGroup;
  private registerForm$: BehaviorSubject<FormGroup>;
  private isPageOneValid$: BehaviorSubject<boolean>;

  constructor() {
    this.registerForm = new FormGroup({
      page1: new FormGroup({
        username: new FormControl('', [Validators.required]),
      }),
      page2: new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(8),
        ]),
        confirmPassword: new FormControl('', [
          Validators.required,
          Validators.minLength(8),
        ]),
      }),
    });

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
}
