import { Component, inject } from '@angular/core';
import { DriverFormService } from '../../services/driver-form.service';
import { FormsService } from 'src/app/shared/form-template/services/forms.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-driver-form',
  templateUrl: './driver-form.component.html',
  styleUrls: ['./driver-form.component.css']
})
export class DriverFormComponent {
  private driverForm = inject(DriverFormService);
  private formService = inject(FormsService);
  driverFormGroup: FormGroup = new FormGroup({});

  ngOnInit(){
    this.driverForm.getDriverForm().subscribe(form=>{
      this.driverFormGroup = form;
    })
  }

  getFormControl(controlName: string){
    return this.formService.getFormControl(this.driverFormGroup, controlName);
  }

  onSubmit(){
    
  }
}
