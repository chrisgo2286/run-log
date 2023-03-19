import { useEffect } from "react";
import { getMonthNameFromDate, getYear } from "../../misc/calendarFunctions";
export default function StatSummary ({ data }) {

    return (
        <section className='stat-summary'>
            <div className='annual-mileage'>
                <h3 className='stat-label'>THIS YEAR</h3>
                <p className='stat-amount'>{ (data.summary) ? data.summary.year: 0 }</p>
            </div>
            <div className='monthly-mileage'>
                <h3 className='stat-label'>THIS MONTH</h3>
                <p className='stat-amount'>{ (data.summary) ? data.summary.month: 0 }</p>
            </div>
            <div className='weekly-mileage'>
                <h3 className='stat-label'>WEEKLY</h3>
                <p className='stat-amount'>{ (data.summary) ? data.summary.week: 0 }</p>
            </div>
        </section>
    )
}