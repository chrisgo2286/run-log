import DaysOfWeek from "../calendar/body/daysOfWeek";
import { pullDay } from "../day/dayFunctions";

export default function CalendarBodyPublic ({ days }) {

    return (
        <div className='calendar-body'>
            <DaysOfWeek />
            { days.map((day, ndx) => (
                <div
                    key={ ndx } 
                    className='day' 
                    data-cy={ 'day' + day.day_num }>
                    { pullDay(day) }
                </div>                    
            ))}
        </div>
    )
}