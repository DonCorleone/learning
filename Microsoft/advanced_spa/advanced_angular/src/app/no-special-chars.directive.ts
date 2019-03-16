import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, FormControl, ValidationErrors } from '@angular/forms';


@Directive({
  selector: '[appNoSpecialChars]'
})
export class NoSpecialCharsDirective implements Validator{

  constructor() { }

  validate(c: FormControl): ValidationErrors {
    const hasSpecialChars = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/.test(c.value);
    const message = {
      'hasSpecialChars': {
        'message': 'No Special Characters Allowed'
      }
    };
    return hasSpecialChars ? message : null;
  }
}
