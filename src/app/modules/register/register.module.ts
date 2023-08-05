import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterRoutingModule } from './register-routing.module';
import { RegisterPage1Component } from './pages/register-page1/register-page1.component';
import { RegisterPage2Component } from './pages/register-page2/register-page2.component';
import { FormTemplateModule } from 'src/app/shared/form-template/form-template.module';
import { RegisterFormService } from './services/register-form.service';
import { ReactiveFormsModule } from '@angular/forms';
import { BodyTemplateModule } from 'src/app/shared/body-template/body-template.module';
import { PageComponentModule } from 'src/app/shared/page-component/page-component.module';
import { HttpClientModule } from '@angular/common/http';
import { UsertypeComponent } from 'src/app/shared/dialogs/usertype/usertype.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [RegisterPage1Component, RegisterPage2Component],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    FormTemplateModule,
    BodyTemplateModule,
    ReactiveFormsModule,
    PageComponentModule,
    HttpClientModule,
    MatDialogModule,
  ],
  providers: [RegisterFormService],
})
export class RegisterModule {}
