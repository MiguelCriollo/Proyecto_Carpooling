import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterPage1Component } from './pages/register-page1/register-page1.component';
import { RegisterPage2Component } from './pages/register-page2/register-page2.component';
import { validateRegisterFormPage1Guard } from 'src/app/core/guards/validateRegisterFormPage1.guard';

const routes: Routes = [
  { path: '', component: RegisterPage1Component },
  {
    path: '2',
    component: RegisterPage2Component,
    canActivate: [validateRegisterFormPage1Guard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterRoutingModule {}
