export function validateUsername (username) {
    if (!username) {
        return 'Username cannot be blank!'
    }
}

export function validatePassword1 (password) {
    if (!password) {
        return 'Password cannot be blank!'
    }
    else if (password.length < 8) {
        return 'Password must be 8 or more characters!'
    }
}

export function validatePassword2 (password1, password2) {
    if (!password2) {
        return 'Please re-enter your password!'
    }
    else if (password2 !== password1) {
        return 'Passwords do not match!'
    }
}