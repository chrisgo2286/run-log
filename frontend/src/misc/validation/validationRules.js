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

export function validateDate (date) {
    const dateObj = new Date(date);
    const earliestDate = new Date(2000, 1, 1);
    const latestDate = new Date(2029, 12, 31);
    if (dateObj < earliestDate || dateObj > latestDate) {
        return 'Please enter a valid date!'
    }
}

export function validateDistance (distance) {
    const regex = new RegExp(/^\d+\.*\d*$/)
    if (!distance) {
        return 'Please enter a valid distance!'
    } else if (!regex.test(distance)) {
        return 'Please enter a valid distance!'
    }
}

export function validateTime (time) {
    const regex = new RegExp(/^\d+\.*\d*$/)
    
    if (!regex.test(time)) {
        return 'Please enter a valid duration!'
    }
}

export function validateEmail (email) {
    if (!email) {
        return 'Please enter your email!'
    } else if (!email.includes('@')) {
        return 'Please enter a valid email!'
    }
}

export function validateAge (age) {
    if (!Number.isInteger(age)) {
        return 'Please enter a valid age!'
    }
}

export function validateProfileEmail (email) {
    if (!email.includes('@')) {
        return 'Please enter a valid email!'
    }
}

export function validateGender (gender) {
    if (!gender) {
        return 'Please enter your gender!'
    }
}