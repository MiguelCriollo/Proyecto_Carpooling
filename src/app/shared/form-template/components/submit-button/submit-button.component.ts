import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-submit-button',
  templateUrl: './submit-button.component.html',
  styleUrls: ['./submit-button.component.css'],
})
export class SubmitButtonComponent {
  @Input() type: string = 'submit';
  @Input() textContent: string = 'Example';
  @Input() secondContent: string = '';
  @Input() link: string = '';
  @Input() transparent: boolean = false;
  @Input() isDisabled: boolean = false;
  @Input() deactiveLink: boolean = false;

  constructor(private router: Router) {}

  navigateTo() {
    if (!this.deactiveLink) this.router.navigate([this.link]);
  }
}
