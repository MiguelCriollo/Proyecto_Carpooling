import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserAuthService } from '../services/user-auth.service';
import { tap } from 'rxjs';

export const AuthGuard: CanActivateFn = () => {
  let router = inject(Router);
  let user = inject(UserAuthService);
  console.log('guard auth');
  return user.isUserAuth().pipe(
    tap((isAuth) => {
      console.log('is Auth', isAuth);
      if (!isAuth) router.navigate(['']);
    })
  );
};
