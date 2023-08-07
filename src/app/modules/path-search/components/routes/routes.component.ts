import { Component, inject } from '@angular/core';
import { StopService } from '../../services/stop.service';
import { JourneyService } from '../../services/journey.service';
import { Observable } from 'rxjs';
import { Stops } from 'src/app/modules/home/model/stop.model';
import { Journeys } from 'src/app/modules/home/model/journey.model';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.css'],
})
export class RoutesComponent {
  private stops = inject(StopService);
  private journeys = inject(JourneyService);

  stops$: Observable<Stops>;
  journeys$: Observable<Journeys>;
  stopSearch: FormGroup;

  constructor() {
    this.stops$ = new Observable();
    this.journeys$ = new Observable();

    this.stopSearch = new FormGroup({
      stop: new FormControl(''),
    });
  }

  ngOnInit() {
    this.stops$ = this.stops.get();
    this.journeys$ = this.journeys.get();
  }

  getFormControl(controlName: string) {
    return this.stopSearch.get(controlName) as FormControl;
  }

  searchJourneys() {
    this.journeys$ = this.journeys.getCoincidences(
      this.getFormControl('stop').value
    );
  }
}
