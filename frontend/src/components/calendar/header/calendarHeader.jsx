import ArrowButton from '../../miscComponents/arrowButton/arrowButton';
import { getNextMonthData, getPriorMonthData } from '../../../misc/calendarFunctions';
import { MonthContext } from '../../../misc/context';
import { useContext } from "react";

export default function CalendarHeader () {
    
    const [month, setMonth] = useContext(MonthContext);
    
    function handleNextMonth () {
        const newMonth = getNextMonthData(month.number, month.year)
        setMonth({...month, ...newMonth})
    }

    function handlePriorMonth () {
        const newMonth = getPriorMonthData(month.number, month.year)
        setMonth({...month, ...newMonth})
    }

    return (
        <div className='calendar-header'>
            <ArrowButton 
                onClick={ handlePriorMonth } 
                label='&#8678;' 
                data-cy='prior-arrow-btn'/>
            <div className='calendar-title' data-cy='month-year'>{ month.name } { month.year }</div>
            <ArrowButton 
                onClick={ handleNextMonth } 
                label='&#8680;' 
                data-cy='next-arrow-btn'/>
        </div>
    )
}