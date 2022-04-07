import { AbstractControl, ValidationErrors } from "@angular/forms";

export function regNumberMatch(control: AbstractControl): ValidationErrors | null {
    const value = control.value

    if (!value) {
        return null;
    }

    if (!/^([A-Z]|[A-Z]{2})[0-9]{4}[A-Z]{2}$/.test(value)) {
        return {
            regMatch: true
        }
    }
    return null;
}

export function drivingForValidator(ownerAgeControl: AbstractControl) {
    return (drivingForControl: AbstractControl) => {
        if (ownerAgeControl.value - 18 - drivingForControl.value < 0) {
            return {
                canDrive: true
            }
        }

        return null;
    }
}