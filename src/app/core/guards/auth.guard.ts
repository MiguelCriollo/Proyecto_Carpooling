import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { UserAuthService } from '../services/user-auth.service';

export const AuthGuard: CanActivateFn = (component: unknown) => {
  let user = inject(UserAuthService);
  console.log(component);
  return user.isUserAuth();
};
