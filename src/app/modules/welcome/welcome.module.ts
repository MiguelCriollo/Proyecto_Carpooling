import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { FormTemplateModule } from 'src/app/shared/form-template/form-template.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';

@NgModule({
  declarations: [
    LoginPageComponent,
  ],
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    FormTemplateModule,
  ]
})
export class WelcomeModule { }
