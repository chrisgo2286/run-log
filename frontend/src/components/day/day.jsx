import React from "react";
import { useNavigate } from 'react-router-dom';
import { pullDay } from "./dayFunctions";
import { formatDate } from "../../misc/calendarFunctions";
import { navigateToAddRun, navigateToUpdateRun } from "../../misc/navFunctions";

export default function Day ({ month, day }) {
    const { day_num, distance, minutes, comment, run_id } = day;
    const { number, year } = month;
    const navigate = useNavigate();
    const dateString = formatDate(year, number, day_num); 
    
    function handleNavToUpdateRun () {
        navigateToUpdateRun(navigate, dateString, day);
    }
    
    function handleNavToAddRun () {
        navigateToAddRun(navigate, dateString);
    }

    function handleClick () {
        return (run_id ? handleNavToUpdateRun() : handleNavToAddRun() )
    }

    return (
        <div className="day" onClick={ handleClick }>
            { pullDay(day) }
        </div>
    )
}


