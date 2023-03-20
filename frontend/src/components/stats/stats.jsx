import { useEffect, useState } from "react"
import StatSummary from "./statSummary"
import Charts from "./charts"
import { getMonthNumFromDate, getYear } from "../../misc/calendarFunctions"
import { getStats } from "../../misc/apiCalls"
import './stats.css'

export default function Stats () {
    const curDate = new Date()
    const [filters, setFilters] = useState({
        month: getMonthNumFromDate(curDate),
        year: getYear(curDate)
    })
    const [stats, setStats] = useState({})
    
    useEffect(() => {
        getStats(filters)
        .then((data) => {
            console.log(data)
            setStats(data)
        })
    }, [])     
    
    return (
        <main className='stats'>
            <StatSummary data={stats} />
            <Charts data={stats} />
        </main>
    )
}