import { getPriorMonthData } from '../../../misc/calendarFunctions.js';
import { MonthContext } from '../../../index.js';
import { useContext } from 'react';

export default function PriorMonthBtn () {

    const [month, setMonth] = useContext(MonthContext);

    function handlePriorMonth () {
        const newMonth = getPriorMonthData(month.number, month.year)
        setMonth({...month, ...newMonth})
    }

    return (
        <div className='month-prior' onClick={ handlePriorMonth }>&#8678;</div>
    )
}