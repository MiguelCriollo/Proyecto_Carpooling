import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-usertype-radio',
  templateUrl: './usertype-radio.component.html',
  styleUrls: ['./usertype-radio.component.css']
})
export class UsertypeRadioComponent {
  @Input() title: string = "";
  @Input() description: string = "";
  @Input() value: string = "";
  @Input() control: FormControl = new FormControl({});
}
