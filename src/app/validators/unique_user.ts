import { timer, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { UserService } from '../services/user.service';

export const uniqueDisplayName = (userService: UserService, timeDelay: number = 1000) => {
  return (control: FormControl) => {
    return timer(timeDelay).pipe(
      switchMap(() => userService.isDisplayNameUnique(control.value)),
      map(res => {
        control.setErrors(null);
        return res.notUnique ? { notUnique: true } : null;
      })
    );
  };
};
  // -------------------------------------------------------
