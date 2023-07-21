import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { UserAuthService } from '../services/user-auth.service';

export const AuthGuard: CanActivateFn = () => {
  let user = inject(UserAuthService);
  return user.isUserAuth();
};
