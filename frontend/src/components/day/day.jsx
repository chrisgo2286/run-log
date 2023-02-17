import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { pullDay, buildClass } from "./dayFunctions";
import { formatDate } from "../../misc/calendarFunctions";
import { navigateToAddRun, navigateToUpdateRun } from "../../misc/navFunctions";
import './day.css';

export default function Day ({ month, day }) {
    const [ isHovered, setIsHovered ] = useState(false)
    const dateObj = new Date(month.year, month.number - 1, day.day_num)
    const { day_num, run_id } = day;
    const { number, year } = month;
    const navigate = useNavigate();
    const dateString = formatDate(year, number, day_num); 
    
    function toggleHover () {
        setIsHovered(!isHovered);
    }

    function handleClass () {
        return buildClass(day, isHovered, dateObj);
    }

    function handleNavToUpdateRun () {
        navigateToUpdateRun(navigate, dateString, day);
    }
    
    function handleNavToAddRun () {
        navigateToAddRun(navigate, dateString);
    }

    function handleClick () {
        if (day.day_num !== 'x' ) {
            return (run_id) ? handleNavToUpdateRun() : handleNavToAddRun()
        }
    }

    return (
        <div 
            className={ handleClass() } 
            onClick={ handleClick }
            onMouseEnter={ toggleHover }
            onMouseLeave={ toggleHover } 
            data-cy={ 'day' + day_num }>
            { pullDay(day) }
        </div>
    )
}


