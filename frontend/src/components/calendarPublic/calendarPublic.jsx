import { useState, useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { MonthContext } from "../../misc/context";
import CalendarHeader from '../calendar/header/calendarHeader';
import CalendarBodyPublic from './calendarBodyPublic';
import { fetchCalendarPublic } from '../../misc/apiCalls';

export default function CalendarPublic () {

    const user_id = useLocation().state
    const [ month, setMonth ] = useContext(MonthContext)
    const [ days, setDays ] = useState([])

    useEffect(() => {
        fetchCalendarPublic(user_id, month)
        .then((data) => {
            setDays(data);
        })
    }, [ month, user_id ]);

    return (
        <div className='calendar'>
            <CalendarHeader />
            <CalendarBodyPublic days={ days } />
        </div>
    )

}