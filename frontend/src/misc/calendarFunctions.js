const months = [
    null, 'January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'
]

export function getCurrentMonthNum (date) {
    //Returns current month as numeral between 1-12
    return (date.getMonth() + 1)
}

export function getCurrentMonthName (date) {
    //Returns current month full name
    return date.toLocaleString('en-US', { month: 'long' });
}

export function getMonthName (month) {
    //Takes month as numeral between 1-12 and returns month name
    return months[month]
}

export function getCurrentYear (date) {
    //Returns current year
    return (date.getFullYear())
}

export function getPriorMonth (month, year) {
    //Returns prior month and year as an array of month and year
    if (month == 1) {
        return [12, year - 1]
    }
    return [month - 1, year]
}

export function getNextMonth (month, year) {
    //Returns next month and year as an array of month and year
    if (month == 12) {
        return [1, year + 1]
    }
    return [month + 1, year]
}