import { Component, Input } from '@angular/core';
import { Stops } from 'src/app/modules/home/model/stop.model';

@Component({
  selector: 'app-journey-card',
  templateUrl: './journey-card.component.html',
  styleUrls: ['./journey-card.component.css'],
})
export class JourneyCardComponent {
  @Input() stops: Stops;
  @Input() arrival: string = "";

  constructor() {
    this.stops = { data: [] };
  }
}
