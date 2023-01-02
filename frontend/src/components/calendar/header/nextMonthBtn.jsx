import { getNextMonthData } from '../../../misc/calendarFunctions.js';
import { MonthContext } from '../../../index.js';
import { useContext } from 'react';

export default function NextMonthBtn () {

    const [month, setMonth] = useContext(MonthContext);

    function handleNextMonth () {
        const newMonth = getNextMonthData(month.number, month.year)
        setMonth({...month, ...newMonth})
    }

    return (
        <div className='month-after' onClick={ handleNextMonth }>&#8680;</div>
    )
}