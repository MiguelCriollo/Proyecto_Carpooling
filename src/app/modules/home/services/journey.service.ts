import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { UserAuthService } from 'src/app/core/services/user-auth.service';
import { environment } from 'src/environments/environment';
import { Journeys } from '../model/journey.model';

@Injectable()
export class JourneyService {
  http = inject(HttpClient);
  userAuth = inject(UserAuthService);

  get() {
    return this.http.get<Journeys>(
      environment.apiStrapiUrl + '/journeys?populate=*',
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.userAuth.localJwt}`,
        }),
      }
    );
  }
  getCoincidences(stopName: string) {
    return this.http.get<Journeys>(
      environment.apiStrapiUrl +
        `/journeys?filters[stops][place][$eq]=${stopName}&populate=*`,
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.userAuth.localJwt}`,
        }),
      }
    );
  }
}
