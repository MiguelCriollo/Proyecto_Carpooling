import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { DataUserService } from '../services/data-user.service';
import { DatabaseUserService } from '../services/database-users.service';

export const authGuard: CanActivateFn = () => {
  const userService = inject(DataUserService);
  const databaseUser = inject(DatabaseUserService);
  const router = inject(Router);
  let userObs$: any;
  let isUserExisting: boolean = false;

  if (router.url == '/Register/2') {
    userObs$ = userService.user.subscribe((data) => {
      isUserExisting = databaseUser.findUser(data);
      if(isUserExisting){
        console.log('you cant acces');
        isUserExisting = false;
      }
    });
  }else{
    userObs$ = userService.user.subscribe((data) => {
        isUserExisting = databaseUser.findUser(data);
      });
  }


  userObs$.unsubscribe();
  return isUserExisting;
};
