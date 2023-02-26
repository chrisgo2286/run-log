import { validateDate, validateDistance, validateTime } from "./validationRules";

export function validateRunDetail ({ date, distance, time }) {
    
    const dateError = validateDate(date);
    const distanceError = validateDistance(distance);
    const timeError = validateTime(time);

    console.log(dateError)
    console.log(distanceError)
    console.log(timeError)
    return [
        ...dateError ? [dateError]: [],
        ...distanceError ? [distanceError]: [],
        ...timeError ? [timeError]: [],
    ]
}