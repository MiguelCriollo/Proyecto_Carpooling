import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, tap, throwError } from 'rxjs';
import { UserAuthModel, User } from 'src/app/core/models/user.model';

@Injectable()
export class UserAuthService {
  private isUserAuth$: BehaviorSubject<boolean>;
  private jwt: string = '';
  private userId: string = '';
  private http = inject(HttpClient);
  private router = inject(Router);

  constructor() {
    this.isUserAuth$ = new BehaviorSubject(this.isUserAlrealdyAuth());
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
      .get<User>(`http://localhost:1337/api/users/${userId}`, {
        headers: new HttpHeaders({
          Authorization: `Bearer ${jwt}`,
        }),
      })
      .pipe(catchError(this.handleErrors));
  }

  private getStorageData() {
    let localJwt = sessionStorage.getItem('jwtAuth');
    let localUserId = sessionStorage.getItem('userId');

    if (localJwt) this.jwt = localJwt;
    if (localUserId) this.userId = localUserId;
  }

  isUserAlrealdyAuth() {
    this.getStorageData();
    if (this.jwt && this.userId) {
      return true;
    }
    return false;
  }

  handleErrors = (error: HttpErrorResponse) => {
    this.updateUserAuth(false);
    return throwError(() => new Error('there was an error to request'));
  };

  get localJwt() {
    return this.jwt;
  }
  get localUserId() {
    return this.userId;
  }
}
