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
import { PageComponentModule } from 'src/app/shared/page-component/page-component.module';
import { BodyTemplateModule } from 'src/app/shared/body-template/body-template.module';
import { StopSearchBarComponent } from './components/stop-search-bar/stop-search-bar.component';
import { StopDropdownMenuComponent } from './components/stop-dropdown-menu/stop-dropdown-menu.component';
import { ToFixedPipe } from './pipes/to-fixed.pipe';

@NgModule({
  declarations: [
    MainContainerComponent,
    LogoComponent,
    RoutesComponent,
    JourneyCardComponent,
    StopSearchBarComponent,
    StopDropdownMenuComponent,
    ToFixedPipe,
  ],
  imports: [
    CommonModule,
    PathSearchRoutingModule,
    ReactiveFormsModule,
    PageComponentModule,
    BodyTemplateModule,
  ],
  providers: [StopService, JourneyService],
})
export class PathSearchModule {}
