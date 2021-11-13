/**
We are going to create a custom validation
to check if the password field match the repeat password field
 */

import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

export const repeatPassword: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
    let errors = null;
    if (group instanceof FormGroup) {
        if (group.controls['password'].value === group.controls['repeat'].value) return null;

        errors = {
            repeatPassword: [
                'the password and repeat do not match',
                group.controls['password'].value,
                group.controls['repeat'].value,
            ]
        }
    }
    return errors;
}