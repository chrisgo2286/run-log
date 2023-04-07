import { 
    validateProfileEmail, 
    validateAge, 
    validateGender 
} from "./validationRules";

export function validateProfile ({ age, gender, email }) {
    const ageError = validateAge(age)
    const genderError = validateGender(gender)
    const emailError = validateProfileEmail(email)

    return [
        ...ageError ? [ ageError ]: [],
        ...genderError ? [genderError ]: [],
        ...emailError ? [emailError ]: []
    ]

}