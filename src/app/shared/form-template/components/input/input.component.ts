import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  @Input('control') formControl: FormControl;
  @Input() id: string = "";
  @Input() textLabel: string = "Name: ";
  @Input() type: string = "text";
  @Input() placeHolder: string = "";

  constructor(){
    this.formControl = new FormControl();
  }

}
