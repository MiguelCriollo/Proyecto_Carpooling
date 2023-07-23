import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserAuthService } from '../services/user-auth.service';
import { tap } from 'rxjs';

export const AuthGuard: CanActivateFn = (component: unknown) => {
  let router = inject(Router);
  let user = inject(UserAuthService);
  console.log('guard auth');
  return user.isUserAuth().pipe(
    tap((isAuth) => {
      if (!isAuth) router.navigate(['']);
    })
  );
};
