import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './container/container.component'; // Importa los componentes que necesites

const routes: Routes = [
  { path: 'Container', component: ContainerComponent },
  // Agrega otras rutas para los componentes del módulo
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
