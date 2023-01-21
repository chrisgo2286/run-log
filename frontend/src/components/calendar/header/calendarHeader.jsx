import NextMonthBtn from "./nextMonthBtn";
import PriorMonthBtn from "./priorMonthBtn";
import { MonthContext } from '../../../misc/context';
import { useContext } from "react";

export default function CalendarHeader () {
    
    const [month, setMonth] = useContext(MonthContext);
    
    return (
        <div className='calendar-header'>
            <PriorMonthBtn />
            <div className='calendar-title' data-cy='month-year'>{ month.name } { month.year }</div>
            <NextMonthBtn />
        </div>
    )
}