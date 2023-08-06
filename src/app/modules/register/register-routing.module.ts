import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterPage1Component } from './pages/register-page1/register-page1.component';
import { RegisterPage2Component } from './pages/register-page2/register-page2.component';
import { validateRegisterFormPage1Guard } from 'src/app/core/guards/validateRegisterFormPage1.guard';
import { UsertypeComponent } from './pages/usertype/usertype.component';
import { DriverFormComponent } from './pages/driver-form/driver-form.component';

const routes: Routes = [
  { path: '', component: RegisterPage1Component },
  {
    path: '2',
    component: RegisterPage2Component,
    canActivate: [validateRegisterFormPage1Guard],
  },
  {
    path: 'usertype',
    component: UsertypeComponent,
  },
  {
    path: 'driverform',
    component: DriverFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterRoutingModule {}
