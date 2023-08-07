import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriverFormComponent } from './pages/driver-form/driver-form.component';
import { DriverFormRoutingModule } from './driver-form-routing.module';
import { FormTemplateModule } from 'src/app/shared/form-template/form-template.module';
import { BodyTemplateModule } from 'src/app/shared/body-template/body-template.module';
import { PageComponentModule } from 'src/app/shared/page-component/page-component.module';
import { DriverFormService } from './services/driver-form.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DriverDataService } from './services/driver-data.service';



@NgModule({
  declarations: [
    DriverFormComponent
  ],
  imports: [
    CommonModule,
    DriverFormRoutingModule,
    FormTemplateModule,
    BodyTemplateModule,
    PageComponentModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [DriverFormService, DriverDataService]
})
export class DriverFormModule { }
