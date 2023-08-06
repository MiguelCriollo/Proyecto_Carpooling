import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, catchError, tap, throwError } from 'rxjs';
import { UserAuthModel, User } from 'src/app/core/models/user.model';

@Injectable()
export class UserAuthService {
  private isUserAuth$: BehaviorSubject<boolean>;
  private jwt: string = '';
  private http = inject(HttpClient);
  private userId: string = '';
  private userId$: BehaviorSubject<string>;

  constructor() {
    this.isUserAuth$ = new BehaviorSubject(this.isUserAlrealdyAuth());
    this.userId$ = new BehaviorSubject('');
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
        })
      );
  }
  getDataUser(jwt: string) {
    return this.http
      .get<User>(`http://localhost:1337/api/users/me`, {
        headers: new HttpHeaders({
          Authorization: `Bearer ${jwt}`,
        }),
      })
      .pipe(
        catchError(this.handleErrors),
        tap((res) => {
          this.userId$.next(res.id.toString());
        })
      );
  }

  private getStorageData() {
    let localJwt = sessionStorage.getItem('jwtAuth');

    if (localJwt) this.jwt = localJwt;
  }

  isUserAlrealdyAuth() {
    this.getStorageData();
    if (this.jwt) {
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
    return this.userId$.asObservable();
  }
}
