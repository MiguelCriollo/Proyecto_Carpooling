import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { StopService } from './services/stop.service';
import { JourneyCardComponent } from './components/journey-card/journey-card.component';
import { JourneyService } from './services/journey.service';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    JourneyCardComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    HomeRoutingModule
  ],
  providers: [StopService, JourneyService]
})
export class HomeModule { }
