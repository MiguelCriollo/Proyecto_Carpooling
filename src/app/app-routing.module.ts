import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoadingPageComponent } from './pages/loading-page/loading-page.component';
import { PathService } from './services/routes.service';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPage1Component } from './pages/register-pages/register-page1/register-page1.component';
import { SignInPageComponent } from './pages/sign-in-page/sign-in-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { RegisterPage2Component } from './pages/register-pages/register-page2/register-page2.component';

const paths = new PathService().paths;

const routes: Routes = [
  {path: "", component: LoginPageComponent},
  {path: paths.loginPage, component: LoginPageComponent},
  {path: paths.signInPage, component: SignInPageComponent},
  {path: paths.register1, component: RegisterPage1Component},
  {path: paths.register2, component: RegisterPage2Component},
  {path: '**', component: ErrorPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
