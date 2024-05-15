import { ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';

// Function validator
// export function noWhiteSpaceValidator(): ValidatorFn {
//   return (control: AbstractControl): ValidationErrors | null => {

//     const empty = control.value.replace(/\s+/g, ' ').trim();
//     return !empty ? { hasWhiteSpace: true } : null;
//   }
// }

export function noWhiteSpaceValidator(control: AbstractControl) {
  // trim white spaces betweet chars
  // 'st  r'.replace(/\s+/g, ' ')
  const empty = control.value.trim();
  return !empty ? { hasWhiteSpace: true } : null;
}