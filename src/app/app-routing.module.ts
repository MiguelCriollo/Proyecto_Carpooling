import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/welcome/welcome.module').then((m) => m.WelcomeModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./modules/welcome/welcome.module').then((m) => m.WelcomeModule),
  },
  {
    path: 'sign-in',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'Register',
    loadChildren: () =>
      import('./modules/register/register.module').then(
        (m) => m.RegisterModule
      ),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
