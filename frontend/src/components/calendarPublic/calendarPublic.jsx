import { useState } from 'react';
import { MonthContext } from "../../misc/context";
import CalendarHeader from '../calendar/header/calendarHeader';
import CalendarBodyPublic from './calendarBodyPublic';
import { fetchCalendarPublic } from '../../misc/apiCalls';
import './calendar.css'

export default function CalendarPublic () {

    const user_id = useLocation().state
    const [ month, setMonth ] = useContext(MonthContext)
    const [ days, setDays ] = useState([])

    useEffect(() => {
        fetchCalendarPublic(user_id, month)
        .then((data) => {
            setDays(data);
        })
    }, [ month ]);

    return (
        <div className='calendar'>
            <CalendarHeader />
            <CalendarBodyPublic days={ days } />
        </div>
    )

}