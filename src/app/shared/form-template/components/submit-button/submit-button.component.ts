import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-submit-button',
  templateUrl: './submit-button.component.html',
  styleUrls: ['./submit-button.component.css']
})
export class SubmitButtonComponent {
  @Input() type: string = "submit";
  @Input() textContent: string = "Example";
  @Input() secondContent: string = "";
  @Input() link: string = "";
  @Input() transparent: boolean = false;
  @Input() isDisabled: boolean = false;
}
