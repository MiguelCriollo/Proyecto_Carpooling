import { Component, EventEmitter, Output, inject } from '@angular/core';
import { Stops } from '../../model/stop.model';
import { FormControl, FormGroup } from '@angular/forms';
import { StopService } from '../../services/stop.service';
import { Observable } from 'rxjs';
import { FormsService } from 'src/app/shared/form-template/services/forms.service';

@Component({
  selector: 'app-stop-search-bar',
  templateUrl: './stop-search-bar.component.html',
  styleUrls: ['./stop-search-bar.component.css']
})
export class StopSearchBarComponent {
  stops = inject(StopService);
  formService = inject(FormsService);
  
  stopSearch: FormGroup;
  stops$: Observable<Stops>;
  @Output('onSubmit') onSubmitEvent: EventEmitter<string>;

  constructor(){
    this.onSubmitEvent = new EventEmitter();
    this.stops$ = new Observable(); 
    this.stopSearch = new FormGroup({
      stop: new FormControl('')
    })
  }

  ngOnInit(){
    this.stops$ = this.stops.get();
  }
  getFormControl(controlName: string){
    return this.formService.getFormControl(this.stopSearch, controlName);
  }

  onSubmit(){
    this.onSubmitEvent.emit(this.getFormControl('stop').value);
  }
}
