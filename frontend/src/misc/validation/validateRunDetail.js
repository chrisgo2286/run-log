import { validateDate, validateDistance, validateTime } from "./validationRules";

export function validateRunDetail ({ date, distance, time }) {
    console.log(date)
    console.log(distance)
    console.log(time)
    
    const dateError = validateDate(date);
    const distanceError = validateDistance(distance);
    const timeError = validateTime(time);

    return [
        ...dateError ? [dateError]: [],
        ...distanceError ? [distanceError]: [],
        ...timeError ? [timeError]: [],
    ]
}