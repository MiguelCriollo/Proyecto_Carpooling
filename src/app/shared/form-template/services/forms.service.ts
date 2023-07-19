import { Injectable } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Injectable()
export class FormsService{
    getFormControl(formGroup: FormGroup, controlName: string ){
        return formGroup.get(controlName) as FormControl;
    }
}