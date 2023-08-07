import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DriverFormService {
  private driverForm: FormGroup;
  private driverForm$: BehaviorSubject<FormGroup>;

  constructor() {
    this.driverForm = new FormGroup({
      license: new FormControl('', Validators.required),
      yearsOfDriving: new FormControl('', Validators.required),
      numberOfCars: new FormControl('', Validators.required),
    });

    this.driverForm$ = new BehaviorSubject(this.driverForm);
  }

  getForm() {
    return this.driverForm$.asObservable();
  }
}
