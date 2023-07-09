import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  FormButtonDetails,
  FormInputDetails,
} from '../../interfaces/formDetails.interface';

@Component({
  selector: 'app-template-form-page',
  templateUrl: './template-form-page.component.html',
  styleUrls: ['./template-form-page.component.css'],
})
export class TemplateFormPageComponent {
  @Input() title: string = "";
  @Input() formGroup: FormGroup;
  @Input() formInputDetails: FormInputDetails[];
  @Input() formButtonDetails: FormButtonDetails[];
  @Output() onSubmit: EventEmitter<FormGroup>;
  constructor() {
    this.formGroup = new FormGroup({});
    this.onSubmit = new EventEmitter<FormGroup>();
    this.formInputDetails = [];
    this.formButtonDetails = [];
  }

  ngOnInit() {}

  getObjectKeys(obj: Object) {
    return Object.keys(obj);
  }

  getFormControl(name: string): FormControl {
    return this.formGroup.get(name) as FormControl;
  }

}
