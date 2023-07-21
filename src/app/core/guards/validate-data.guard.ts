import { CanActivateFn } from '@angular/router';
import { Observable } from 'rxjs';

export function validateDataGuard(
  validator: Observable<boolean>
): CanActivateFn {
  return () => {
    let isValid = false;

    let validator$ = validator.subscribe((validation) => {
      isValid = validation;
    });

    validator$.unsubscribe();

    return isValid;
  };
}
