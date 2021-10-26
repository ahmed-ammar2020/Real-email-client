import { Injectable } from '@angular/core';
import { AuthService } from '../auth.service';
import { AsyncValidator, AbstractControl } from '@angular/forms';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UniqueUsername implements AsyncValidator {
  constructor(private authService: AuthService) {}

  validate = (control: AbstractControl) => {
    const { value } = control;

    return this.authService.IsUsernameUnique(value).pipe(
      map(() => null),
      catchError((err) => {
        if (err.error.username) {
          return of({ nonUniqueUsername: true });
        } else {
          return of({ noInternet: true });
        }
      })
    );
  };
}
