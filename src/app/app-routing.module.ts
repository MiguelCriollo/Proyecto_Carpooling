import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoadingPageComponent } from './pages/loading-page/loading-page.component';
import { PathService } from './services/routes.service';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPage1Component } from './pages/register-pages/register-page1/register-page1.component';

const paths = new PathService().paths;

const routes: Routes = [
  {path: "", component: LoginPageComponent},
  {path: paths.loginPage, component: LoginPageComponent},
  {path: paths.register1, component: RegisterPage1Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
