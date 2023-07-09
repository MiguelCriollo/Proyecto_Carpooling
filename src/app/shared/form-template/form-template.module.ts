import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormTemplateRoutingModule } from './form-template-routing.module';
import {ReactiveFormsModule} from "@angular/forms";
import { SubmitButtonComponent } from './components/submit-button/submit-button.component';
import { TemplateFormPageComponent } from './pages/template-form-page/template-form-page.component';
import { TitleComponent } from './components/title/title.component';
import { InputComponent } from './components/input/input.component';

@NgModule({
  declarations: [
    SubmitButtonComponent,
    TemplateFormPageComponent,
    TitleComponent,
    InputComponent
  ],
  imports: [
    CommonModule,
    FormTemplateRoutingModule,
    ReactiveFormsModule,
  ],
  exports: [
    TemplateFormPageComponent,
    SubmitButtonComponent
  ]
})
export class FormTemplateModule { }
