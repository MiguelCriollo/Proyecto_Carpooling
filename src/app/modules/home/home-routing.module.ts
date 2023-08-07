import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../path-search/path-search.module').then(
        (m) => m.PathSearchModule
      ),
  },
  {
    path: 'driverform',
    loadChildren: () =>
      import('../driver-form/driver-form.module').then(
        (m) => m.DriverFormModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
