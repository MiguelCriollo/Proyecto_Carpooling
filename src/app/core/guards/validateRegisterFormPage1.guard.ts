import { inject } from '@angular/core';
import { CanActivateChildFn } from '@angular/router';
import { RegisterFormService } from 'src/app/modules/register/services/register-form.service';

export const validateRegisterFormPage1Guard: CanActivateChildFn = () => {
  let registerForm = inject(RegisterFormService);
  return registerForm.isPageOneValid();
};
