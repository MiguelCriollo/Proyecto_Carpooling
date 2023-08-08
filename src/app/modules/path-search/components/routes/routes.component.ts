import { Component, inject } from '@angular/core';
import { JourneyService } from '../../services/journey.service';
import { Observable } from 'rxjs';
import { Journeys } from 'src/app/modules/path-search/model/journey.model';
import { Stops } from '../../model/stop.model';

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.css'],
})
export class RoutesComponent {
  private journeys = inject(JourneyService);
  private stopName: string = '';
  stops: Stops;
  displayStopMenu: boolean = false;

  journeys$: Observable<Journeys>;

  constructor() {
    this.journeys$ = new Observable();
    this.stops = { data: [] };
  }

  ngOnInit() {
    this.journeys$ = this.journeys.get();
  }

  searchJourneys(stopName: string) {
    if (this.stopName != stopName) {
      this.stopName = stopName;
      this.journeys$ = this.journeys.getCoincidences(stopName);
    }
  }

  dropDownMenu(stops: Stops) {
    this.displayStopMenu = true;
    this.stops = stops;
  }
}
