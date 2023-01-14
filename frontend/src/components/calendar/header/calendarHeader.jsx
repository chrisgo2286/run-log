import NextMonthBtn from "./nextMonthBtn";
import PriorMonthBtn from "./priorMonthBtn";
import { MonthContext } from '../../../misc/context';
import { useContext, useEffect } from "react";

export default function CalendarHeader () {
    
    const [month, setMonth] = useContext(MonthContext);
    
    return (
        <div className='calendar-header'>
            <PriorMonthBtn />
            <div className='calendar-title'>{ month.name } { month.year }</div>
            <NextMonthBtn />
        </div>
    )
}