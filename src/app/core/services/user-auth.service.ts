import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, catchError, tap, throwError } from 'rxjs';
import { UserAuthModel } from 'src/app/modules/login/models/user.model';

@Injectable()
export class UserAuthService {
  private isUserAuth$: BehaviorSubject<boolean>;
  private http = inject(HttpClient);

  constructor() {
    this.isUserAuth$ = new BehaviorSubject(false);
  }

  updateUserAuth(state: boolean) {
    this.isUserAuth$.next(state);
  }

  isUserAuth() {
    return this.isUserAuth$.asObservable();
  }

  getToken(email: string, password: string) {
    return this.http
      .post<UserAuthModel>('http://localhost:1337/api/auth/local', {
        identifier: email,
        password: password,
      })
      .pipe(
        catchError(this.handleErrors),
        tap((res) => {
          sessionStorage.setItem('jwtAuth', res.jwt);
          sessionStorage.setItem('userId', res.user.id.toString());
        })
      );
  }
  getDataUser(jwt: string, userId: number) {
    return this.http
      .get(`http://localhost:1337/api/users/${userId}`, {
        headers: new HttpHeaders({
          Authorization: `Bearer ${jwt}`,
        }),
      })
      .pipe(catchError(this.handleErrors));
  }

  isUserAuthenticated() {
    let jwt = sessionStorage.getItem('jwtAuth');
    let userId = sessionStorage.getItem('userId');

    if (jwt && userId) {
      return true;
    }
    return false;
  }

  handleErrors(error: HttpErrorResponse) {
    this.updateUserAuth(false);
    return throwError(() => new Error('there was an error to request'));
  }
}
