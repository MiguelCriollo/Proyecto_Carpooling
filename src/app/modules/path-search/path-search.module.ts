import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PathSearchRoutingModule } from './path-search-routing.module';
import { MainContainerComponent } from './pages/main-container/main-container.component';
import { LogoComponent } from './components/logo/logo.component';
import { RoutesComponent } from './components/routes/routes.component';
import { StopService } from './services/stop.service';
import { JourneyService } from './services/journey.service';
import { JourneyCardComponent } from './components/journey-card/journey-card.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MainContainerComponent,
    LogoComponent,
    RoutesComponent,
    JourneyCardComponent,
  ],
  imports: [
    CommonModule,
    PathSearchRoutingModule,
    ReactiveFormsModule
  ],
  providers: [StopService, JourneyService]
})
export class PathSearchModule { }
