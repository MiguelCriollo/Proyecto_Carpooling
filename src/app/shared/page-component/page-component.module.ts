import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogotypeComponent } from './components/logotype/logotype.component';
import { ExitButtonComponent } from './components/exit-button/exit-button.component';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [
    LogotypeComponent,
    ExitButtonComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class PageComponentModule { }
