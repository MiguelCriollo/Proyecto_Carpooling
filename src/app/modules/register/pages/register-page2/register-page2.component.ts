import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  FormButtonDetails,
  FormInputDetails,
} from 'src/app/shared/form-template/interfaces/formDetails.interface';

@Component({
  selector: 'app-register-page2',
  templateUrl: './register-page2.component.html',
  styleUrls: ['./register-page2.component.css'],
  providers: [],
})
export class RegisterPage2Component {
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
      textLabel: 'Contraseña: ',
      placeHolder: '*******',
    },
    {
      id: 'fpasswordConfirm',
      name: 'passwordConfirm',
      type: 'password',
      textLabel: 'Confirmar Contraseña: ',
      placeHolder: '*******',
    },
  ];
  formButtonDetails: FormButtonDetails[] = [
    {type: "submit", textContent: "Registrarse"}
  ];

  constructor() {
    this.formGroup = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      passwordConfirm: new FormControl(null, Validators.required),
    });
  }

  printForm(form: FormGroup){
    console.log(form);
  }
}
