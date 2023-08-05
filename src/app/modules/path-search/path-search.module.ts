import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PathSearchRoutingModule } from './path-search-routing.module'
import { ContainerComponent } from './container/container.component';
import { LogoComponent } from './logo/logo.component';
import { UserInteractionComponent } from './user-interaction/user-interaction.component';



@NgModule({
  declarations: [
    ContainerComponent,
    LogoComponent,
    UserInteractionComponent
  ],
  imports: [
    CommonModule,
    PathSearchRoutingModule
  ]
})
export class PathSearchModule { }
