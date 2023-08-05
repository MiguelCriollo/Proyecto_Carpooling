import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PathSearchRoutingModule } from './path-search-routing.module';
import { MainContainerComponent } from './main-container/main-container.component';
import { LogoComponent } from './logo/logo.component';
import { RoutesComponent } from './routes/routes.component';


@NgModule({
  declarations: [
    MainContainerComponent,
    LogoComponent,
    RoutesComponent
  ],
  imports: [
    CommonModule,
    PathSearchRoutingModule
  ]
})
export class PathSearchModule { }
