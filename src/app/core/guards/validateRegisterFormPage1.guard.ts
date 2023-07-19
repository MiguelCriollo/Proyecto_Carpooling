import { inject } from "@angular/core";
import { CanActivateChildFn, Router } from "@angular/router";
import { RegisterFormService } from "src/app/modules/register/services/register-form.service";

export const validateRegisterFormPage1Guard: CanActivateChildFn = ()=>{
    let registerForm = inject(RegisterFormService);
    let router = inject(Router);
    let isValid = false;
    let registerForm$ = registerForm.isValidPageOne().subscribe(valid=>{
        isValid = valid;
    })
    registerForm$.unsubscribe();

    if(!isValid){
        router.navigate(['/register']);
    }

    return isValid;
}