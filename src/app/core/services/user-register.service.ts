import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { UserAuthModel, UserRegisterModel } from '../models/user.model';
import { environment } from 'src/environments/environment';
import { catchError, tap, throwError } from 'rxjs';

@Injectable()
export class UserRegisterService {
  url = environment.apiStrapiUrl + '/auth/local/register';
  http = inject(HttpClient);

  register(user: UserRegisterModel) {
    return this.http.post<UserAuthModel>(this.url, user).pipe(catchError(this.handleErrors), tap(res=>{
        sessionStorage.setItem('jwtAuth', res.jwt);
        sessionStorage.setItem('userId', res.user.id.toString());
    }));
  }
  handleErrors(error: HttpErrorResponse) {
    return throwError(() => new Error('error to post'));
  }
}
