import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Stops } from '../../model/stop.model';

@Component({
  selector: 'app-stop-dropdown-menu',
  templateUrl: './stop-dropdown-menu.component.html',
  styleUrls: ['./stop-dropdown-menu.component.css'],
})
export class StopDropdownMenuComponent {
  @Input() stops: Stops;
  @Output() exitEvent: EventEmitter<boolean>;
  constructor() {
    this.stops = { data: [] };
    this.exitEvent = new EventEmitter();
  }

  exit(){
    this.exitEvent.emit(false);
  }
}
