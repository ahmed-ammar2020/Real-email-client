import { Injectable } from '@angular/core';
import { AbstractControl, Validator } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class MatchPassword implements Validator {
  validate(form: AbstractControl) {
    const { password, passwordConfirmation } = form.value;

    if (password === passwordConfirmation) {
      return null;
    }

    return { passwordsDoNotMatch: true };
  }
}
