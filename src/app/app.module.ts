import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoadingPageComponent } from './pages/loading-page/loading-page.component';
import { LogotypeComponent } from './logo/logotype/logotype.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

import { SubmitButtonDirective } from './directives/submit-button/submit-button.directive';
import { SignInPageComponent } from './pages/sign-in-page/sign-in-page.component';
import { RegisterPage1Component } from './pages/register-pages/register-page1/register-page1.component';
import { RegisterPage2Component } from './pages/register-pages/register-page2/register-page2.component';

@NgModule({
  declarations: [
    AppComponent,
    LoadingPageComponent,
    LogotypeComponent,
    LoginPageComponent,
    SubmitButtonDirective,
    SignInPageComponent,
    RegisterPage1Component,
    RegisterPage2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
