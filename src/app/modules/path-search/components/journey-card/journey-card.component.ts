import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Stop, Stops } from 'src/app/modules/path-search/model/stop.model';

@Component({
  selector: 'app-journey-card',
  templateUrl: './journey-card.component.html',
  styleUrls: ['./journey-card.component.css'],
})
export class JourneyCardComponent {

  @Input() stops: Stops;
  @Input() arrival: string = "";
  @Output('dropDownMenu') dropDownMenuEvent: EventEmitter<Stops>;

  constructor() {
    this.dropDownMenuEvent = new EventEmitter();

    this.stops = { data: [] };
  }

  dropdownMenu(){
    this.dropDownMenuEvent.emit(this.stops);
  }
}
