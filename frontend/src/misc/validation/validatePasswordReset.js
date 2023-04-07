import { 
    validatePassword1, 
    validatePassword2, 
    validateEmail 
} from "./validationRules"

export function validatePasswordResetConfirm ({ password1, password2 }) {
    const password1Error = validatePassword1(password1)
    const password2Error = validatePassword2(password1, password2)
    
    return [
        ...password1Error ? [password1Error]: [],
        ...password2Error ? [password2Error]: [],
    ]
}

export function validatePasswordReset ({ email }) {
    const emailError = validateEmail(email)
    return [ ...emailError ? [emailError]: [] ]
}