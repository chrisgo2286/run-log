import { useState, useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { MonthContext } from "../../misc/context";
import CalendarHeaderPublic from './calendarHeaderPublic';
import CalendarBodyPublic from './calendarBodyPublic';
import { fetchCalendarPublic } from '../../misc/apiCalls';

export default function CalendarPublic () {

    const { username, user_id } = useLocation().state
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
            <CalendarHeaderPublic username={ username } />
            <CalendarBodyPublic days={ days } />
        </div>
    )

}