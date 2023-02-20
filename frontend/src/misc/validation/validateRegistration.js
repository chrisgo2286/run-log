import { 
    validateUsername, 
    validatePassword1, 
    validatePassword2 
} from "./validationRules"

export function validateRegistration ({ username, password1, password2 }) {
    const usernameError = validateUsername(username)
    const password1Error = validatePassword1(password1)
    const password2Error = validatePassword2(password1, password2)
    
    return [
        ...usernameError ? [usernameError]: [],
        ...password1Error ? [password1Error]: [],
        ...password2Error ? [password2Error]: [],
    ]
}