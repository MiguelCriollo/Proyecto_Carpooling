import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() mainText: string = "TextExample";
  @Input() subText: string = "";
  @Input() path: string = "";
  @Input() transparent: boolean = false;

  constructor(private route: Router){}

  navigateTo(): void{
    this.route.navigate([this.path]);
  }
}
