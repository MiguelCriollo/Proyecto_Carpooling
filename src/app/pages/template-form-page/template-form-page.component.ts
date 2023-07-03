import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-template-form-page',
  templateUrl: './template-form-page.component.html',
  styleUrls: ['./template-form-page.component.css']
})
export class TemplateFormPageComponent {
  @Input() title: string = "";
}
