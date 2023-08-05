import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-selector-type',
  templateUrl: './selector-type.component.html',
  styleUrls: ['./selector-type.component.css'],
})
export class SelectorTypeComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() name: string = "default";
}
