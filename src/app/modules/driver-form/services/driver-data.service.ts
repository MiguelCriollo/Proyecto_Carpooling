import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { catchError, map, throwError } from 'rxjs';
import { Driver, User } from 'src/app/core/models/user.model';
import { UserAuthService } from 'src/app/core/services/user-auth.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class DriverDataService {
  private http = inject(HttpClient);
  private userAuth = inject(UserAuthService);

  constructor() {}

  verifyData() {
    return this.http
      .get<User>(environment.apiStrapiUrl + '/users/me?populate=driver', {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.userAuth.localJwt}`,
        }),
      })
      .pipe(
        catchError(this.handleErrors),
        map((res) => {
          if (res.driver == null) {
            return false;
          } else {
            return true;
          }
        })
      );
  }

  postData(driverData: Driver) {
    return this.http.post(
      environment.apiStrapiUrl + '/drivers',
      { data: driverData },
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.userAuth.localJwt}`,
        }),
      }
    );
  }

  handleErrors(error: HttpErrorResponse) {
    console.log('error');
    return throwError(() => new Error('error ocurred in get driver data'));
  }
}
