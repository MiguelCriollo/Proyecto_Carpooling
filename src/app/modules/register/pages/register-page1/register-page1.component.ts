import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  FormButtonDetails,
  FormInputDetails,
} from 'src/app/shared/form-template/interfaces/formDetails.interface';

@Component({
  selector: 'app-register-page1',
  templateUrl: './register-page1.component.html',
  styleUrls: ['./register-page1.component.css'],
  providers: [],
})
export class RegisterPage1Component {
  formGroup: FormGroup;
  formInputDetails: FormInputDetails[] = [
    {
      id: 'fname',
      name: 'name',
      type: 'text',
      textLabel: 'Nombre: ',
      placeHolder: 'Luis',
    },
    {
      id: 'fidCard',
      name: 'idCard',
      type: 'text',
      textLabel: 'Cédula: ',
      placeHolder: '1328812923',
    },
  ];
  formButtonDetails: FormButtonDetails[] = [
    { type: 'button', link: '/Register/2', textContent: 'Siguiente' },
    {
      type: 'button',
      link: '/Sign_in',
      textContent: 'Iniciar Sesión',
      secondText: "¿Ya tienes cuenta?",
      transparent: true
    },
  ];

  constructor() {
    this.formGroup = new FormGroup({
      name: new FormControl(null, Validators.required),
      idCard: new FormControl(null, Validators.required),
    });
  }
}
