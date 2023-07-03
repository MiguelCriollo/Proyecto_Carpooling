import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoadingPageComponent } from './pages/loading-page/loading-page.component';
import { LogotypeComponent } from './logo/logotype/logotype.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

import { SubmitButtonDirective } from './directives/submit-button/submit-button.directive';
import { SignInPageComponent } from './pages/sign-in-page/sign-in-page.component';
import { RegisterPage1Component } from './pages/register-pages/register-page1/register-page1.component';
import { RegisterPage2Component } from './pages/register-pages/register-page2/register-page2.component';
import { ButtonComponent } from './form-page-components/button/button.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { ExitButtonComponent } from './form-page-components/button/exit-button/exit-button.component';
import { FormInputComponent } from './form-page-components/form-input/form-input.component';
import { TemplateFormPageComponent } from './pages/template-form-page/template-form-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DataUserService } from './services/data-user.service';
import { DatabaseUserService } from './services/database-users.service';
import { PathService } from './services/routes.service';


@NgModule({
  declarations: [
    AppComponent,
    LoadingPageComponent,
    LogotypeComponent,
    LoginPageComponent,
    SubmitButtonDirective,
    SignInPageComponent,
    RegisterPage1Component,
    RegisterPage2Component,
    ButtonComponent,
    ErrorPageComponent,
    ExitButtonComponent,
    FormInputComponent,
    TemplateFormPageComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [DataUserService, DatabaseUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
