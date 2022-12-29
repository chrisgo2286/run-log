const months = [
    null, 'January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'
]

export function getMonthNumFromDate (date) {
    //Returns current month as numeral between 1-12
    return (date.getMonth() + 1)
}

export function getMonthNameFromDate (date) {
    //Takes date object and returns current month full name
    return date.toLocaleString('en-US', { month: 'long' });
}

export function getMonthNameFromNum (month) {
    //Takes month as numeral between 1-12 and returns month name
    return months[month]
}

export function getYear (date) {
    //Returns current year
    return (date.getFullYear())
}

export function getPriorMonth (month, year) {
    //Returns prior month and year as an array of month and year
    return (month == 1) ? [12, year - 1]: [month - 1, year];
}

export function getNextMonth (month, year) {
    //Returns next month and year as an array of month and year
    return (month == 12) ? [1, year + 1]: [month + 1, year]
}