import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormTemplateModule } from 'src/app/shared/form-template/form-template.module';
import { LoginFormComponent } from './pages/login-form/login-form.component';
import { LoginRoutingModule } from './login-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BodyTemplateModule } from 'src/app/shared/body-template/body-template.module';
import { PageComponentModule } from 'src/app/shared/page-component/page-component.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [LoginFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormTemplateModule,
    LoginRoutingModule,
    BodyTemplateModule,
    PageComponentModule,
    HttpClientModule,
  ],
})
export class LoginModule {}
