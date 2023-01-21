import { getPriorMonthData } from '../../../misc/calendarFunctions.js';
import { MonthContext } from '../../../misc/context';
import { useContext } from 'react';

export default function PriorMonthBtn () {

    const [month, setMonth] = useContext(MonthContext);

    function handlePriorMonth () {
        const newMonth = getPriorMonthData(month.number, month.year)
        setMonth({...month, ...newMonth})
    }

    return (
        <div 
            className='month-prior' 
            onClick={ handlePriorMonth } 
            data-cy='prior-month-btn'>
            &#8678;
        </div>
    )
}