import { Component, inject } from '@angular/core';
import { DriverFormService } from '../../services/driver-form.service';
import { FormGroup } from '@angular/forms';
import { FormsService } from 'src/app/shared/form-template/services/forms.service';
import { DriverDataService } from '../../services/driver-data.service';
import { repeat } from 'rxjs';
import { UserAuthService } from 'src/app/core/services/user-auth.service';

@Component({
  selector: 'app-driver-form',
  templateUrl: './driver-form.component.html',
  styleUrls: ['./driver-form.component.css'],
})
export class DriverFormComponent {
  private driverForm = inject(DriverFormService);
  private formService = inject(FormsService);
  private driverData = inject(DriverDataService);
  private userAuth = inject(UserAuthService);
  private userId: string = '';

  driverFormGroup: FormGroup = new FormGroup({});

  ngOnInit() {
    this.driverForm.getForm().subscribe((form) => {
      this.driverFormGroup = form;
      console.log(this.driverFormGroup);
    });
    this.userAuth.localUserId.subscribe((id) => {
      console.log(id);
      this.userId = id;
    });
  }

  getFormControl(controlName: string) {
    return this.formService.getFormControl(this.driverFormGroup, controlName);
  }

  onSubmit() {
    if (!this.driverFormGroup.valid) return;
    this.driverData.verifyData().subscribe((exist) => {
      if (exist) return;
      this.driverData
        .postData({
          license: this.getFormControl('license').value,
          yearsofdriving: this.getFormControl('yearsOfDriving').value,
          numberofcars: this.getFormControl('numberOfCars').value,
          users_permissions_user: this.userId,
        })
        .subscribe(() => {
          console.log('succes in up data');
          console.log('user id', this.userId);
        });
    });
  }
}
