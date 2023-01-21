import { getNextMonthData } from '../../../misc/calendarFunctions.js';
import { MonthContext } from '../../../misc/context';
import { useContext } from 'react';

export default function NextMonthBtn () {

    const [month, setMonth] = useContext(MonthContext);

    function handleNextMonth () {
        const newMonth = getNextMonthData(month.number, month.year)
        setMonth({...month, ...newMonth})
    }

    return (
        <div 
            className='month-after' 
            onClick={ handleNextMonth }
            data-cy='next-month-btn'>
            &#8680;
        </div>
    )
}