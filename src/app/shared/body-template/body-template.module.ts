import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyCenterComponent } from './templates/body-center/body-center.component';
import { BodySpaceComponent } from './templates/body-space/body-space.component';

@NgModule({
  declarations: [BodyCenterComponent, BodySpaceComponent],
  imports: [CommonModule],
  exports: [BodyCenterComponent, BodySpaceComponent],
})
export class BodyTemplateModule {}
