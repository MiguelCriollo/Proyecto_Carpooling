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
import { UsertypeComponent } from './pages/usertype/usertype.component';
import { UsertypeRadioComponent } from './components/usertype-radio/usertype-radio.component';
import { DriverFormComponent } from './pages/driver-form/driver-form.component';
import { DriverFormService } from './services/driver-form.service';



@NgModule({
  declarations: [
    RegisterPage1Component,
    RegisterPage2Component,
    UsertypeComponent,
    UsertypeRadioComponent,
    DriverFormComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    FormTemplateModule,
    BodyTemplateModule,
    ReactiveFormsModule,
    PageComponentModule,
    HttpClientModule
  ],
  providers: [RegisterFormService, DriverFormService]
})
export class RegisterModule { }
