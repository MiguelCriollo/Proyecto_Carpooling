import { Component, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css'],
})
export class FormInputComponent {
  @Input() id: string = "1";
  @Input() name: string = 'Name';
  @Input() label: string = "";
  @Input() placeHolder: string = "text example";
  textContent: string = "";

  @Output() actualTextContent: EventEmitter<string> = new EventEmitter<string>;
}
