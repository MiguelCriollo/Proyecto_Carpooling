import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterRoutingModule } from './register-routing.module';
import { RegisterPage1Component } from './pages/register-page1/register-page1.component';
import { RegisterPage2Component } from './pages/register-page2/register-page2.component';
import { FormTemplateModule } from 'src/app/shared/form-template/form-template.module';



@NgModule({
  declarations: [
    RegisterPage1Component,
    RegisterPage2Component
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    FormTemplateModule
  ]
})
export class RegisterModule { }
