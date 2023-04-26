import DaysOfWeek from "../calendar/body/daysOfWeek";
import { pullDay, runTypeClass } from "../day/dayFunctions";

export default function CalendarBodyPublic ({ days }) {

    return (
        <div className='calendar-body'>
            <DaysOfWeek />
            { days.map((day, ndx) => (
                <div
                    key={ ndx } 
                    className={ buildClass(day) } 
                    data-cy={ 'day' + day.day_num }>
                    { pullDay(day) }
                </div>                    
            ))}
        </div>
    )
}

function buildClass (day) {
    var className = 'day';
    if (day.run_type) {
        const runClass = runTypeClass(day.run_type);
        return className + ' ' + runClass
    } 
    return className
}