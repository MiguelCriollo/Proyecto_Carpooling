import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { SignInPageComponent } from './pages/sign-in-page/sign-in-page.component';
import { FormTemplateModule } from 'src/app/shared/form-template/form-template.module';



@NgModule({
  declarations: [
    SignInPageComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormTemplateModule
  ]
})
export class AuthModule { }
