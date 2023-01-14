import React, { useEffect, useState, useContext } from 'react';
import CalendarHeader from './header/calendarHeader';
import CalendarBody from './body/calendarBody';
import { MonthContext } from '../../misc/context';
import { fetchData } from '../../misc/apiCalls';
import './calendar.css';

export default function Calendar () {

    const [month, setMonth] = useContext(MonthContext)
    const [days, setDays] = useState([])

    useEffect(() => {
        fetchData(month, setDays);
    }, [month]);

    return (
        <div className='calendar'>
            <CalendarHeader /> 
            <CalendarBody days={ days }/>
        </div>

    )
}