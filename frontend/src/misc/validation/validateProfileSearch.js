import { validateAge } from './validationRules'

export function validateProfileSearch ({ age_min, age_max }) {
    const ageMinError = (age_min) ? validateAge(age_min): null;
    const ageMaxError = (age_max) ? validateAge(age_max): null;

    return [
        ...ageMinError ? [ ageMinError ]: [],
        ...ageMaxError ? [ ageMaxError ]: []
    ]
}