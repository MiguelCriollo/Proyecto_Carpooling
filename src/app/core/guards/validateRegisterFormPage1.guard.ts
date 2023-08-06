import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';
import { tap } from 'rxjs';
import { RegisterFormService } from 'src/app/modules/register/services/register-form.service';

export const validateRegisterFormPage1Guard: CanActivateChildFn = () => {
  let registerForm = inject(RegisterFormService);
  let router = inject(Router);
  return registerForm.isPageOneValid().pipe(tap(isValid=>{
    if(!isValid) router.navigate(['']);
  }));
};
