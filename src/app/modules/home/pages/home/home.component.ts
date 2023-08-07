import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, delay } from 'rxjs';
import { IsAuth } from 'src/app/core/models/auth-user.model';
import { UserAuthService } from 'src/app/core/services/user-auth.service';
import { StopService } from '../../services/stop.service';
import { Stops } from '../../model/stop.model';
import { JourneyService } from '../../services/journey.service';
import { Journeys } from '../../model/journey.model';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, IsAuth {
  private router = inject(Router);
  private userAuth = inject(UserAuthService);
  private stops = inject(StopService);
  private journeys = inject(JourneyService);
  stops$: Observable<Stops>;
  journeys$: Observable<Journeys>;
  journeyCoincidences$: Observable<Journeys>;
  username: string = '';
  isAuth = false;
  stopSearch: FormGroup;

  constructor(){
    this.stops$ = new Observable();
    this.journeys$ = new Observable();
    this.journeyCoincidences$ = new Observable();
    this.stopSearch = new FormGroup({
      stop: new FormControl('')
    });
  }

  ngOnInit() {
    if (this.userAuth.isUserAlrealdyAuth()) {
      this.userAuth
        .getDataUser(this.userAuth.localJwt)
        .pipe(delay(500))
        .subscribe((res) => {
          this.username = res.username;
          this.isAuth = true;
          console.log(this.username);
          this.userAuth.updateUserAuth(true);
        });

      this.stops$ = this.stops.get();
      this.journeys$ = this.journeys.get();
      this.journeyCoincidences$ = this.journeys.getCoincidences('Bolivia');
    }
  }

  logout() {
    sessionStorage.clear();
    this.isAuth = false;
    this.router.navigate(['']);
  }

  toDriverForm() {
    this.router.navigate(['/home', 'driverform']);
  }

  isAlreadyAuth() {
    if (this.isAuth) {
      return false;
    }

    return true;
  }

  searchJourneys(){
    console.log(this.getFormControl('stop').value)
    this.journeyCoincidences$ = this.journeys.getCoincidences(this.getFormControl('stop').value);
  }

  getFormControl(controlName: string){
    return this.stopSearch.get(controlName) as FormControl;
  }
}
