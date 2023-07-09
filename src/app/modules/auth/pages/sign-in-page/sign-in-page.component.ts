import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  FormButtonDetails,
  FormInputDetails,
} from 'src/app/shared/form-template/interfaces/formDetails.interface';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.css'],
  providers: [],
})
export class SignInPageComponent {
  formGroup: FormGroup;
  formInputDetails: FormInputDetails[] = [
    {
      id: 'femail',
      name: 'email',
      type: 'email',
      textLabel: 'Correo Electrónico',
      placeHolder: 'name@example.com',
    },
    {
      id: 'fpassword',
      name: 'password',
      type: 'password',
      textLabel: 'Contraseña',
      placeHolder: '*********',
    },
  ];
  formButtonDetails: FormButtonDetails[] = [
    { type: 'submit', textContent: 'Iniciar Sesión' },
    {
      type: 'button',
      link: "/Register",
      textContent: 'Registrarse',
      secondText: '¿Aun no tienes cuenta?',
      transparent: true
    },
  ];
  constructor() {
    this.formGroup = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
    });
  }

  printForm(form: FormGroup){
    console.log(form);
  }
}
