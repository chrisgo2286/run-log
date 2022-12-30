import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Day from '../day/day';
import { fetchData } from '../../misc/apiCalls';
import {
    getMonthData,
    getMonthNameFromNum, 
    getPriorMonth,
    getNextMonth,
} from '../../misc/calendarFunctions.js';
import './calendar.css';

export default function Calendar () {
    const daysOfWeek = [
        'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 
        'Saturday'
    ]
    const date = new Date()
    const curMonth = getMonthData(date)
    const [month, setMonth] = useState(curMonth)
    const [days, setDays] = useState([])

    useEffect(() => {
        fetchData(month, setDays);
    }, [month]);

    function handlePriorMonth () {
        const [newMonthNum, newYear] = getPriorMonth(month.number, month.year);
        const newMonthName = getMonthNameFromNum(newMonthNum);
        const newMonth = { 
            number: newMonthNum,
            name: newMonthName,
            year: newYear
        }
        setMonth({...month, ...newMonth})
    }

    function handleNextMonth () {
        const [newMonthNum, newYear] = getNextMonth(month.number, month.year);
        const newMonthName = getMonthNameFromNum(newMonthNum);
        const newMonth = { 
            number: newMonthNum,
            name: newMonthName,
            year: newYear
        }
        setMonth({...month, ...newMonth})
    }

    return (
        <div className='calendar'>
            <div className="header">
                <div className='month-prior' onClick={ handlePriorMonth }>&#8678;</div>
                <div className='month-year'>{ month.name } { month.year }</div>
                <div className='month-after' onClick={ handleNextMonth }>&#8680;</div>  
            </div>
            <div className="body">
                { daysOfWeek.map((dayOfWeek, ndx) =>(
                    <div key={ ndx } className='day-of-week'>
                        { dayOfWeek }
                    </div>
                ))}
                { days.map((day, ndx) => (
                    < Day
                        key={ ndx }
                        day_num={ day.day_num }
                        month={ month.number }
                        year={ month.year }
                        distance={ day.distance }
                        minutes={ day.minutes }
                        comment={ day.comment }
                        run_id={ day.run_id } 
                    />
                ))}
            </div>
        </div>

    )
}