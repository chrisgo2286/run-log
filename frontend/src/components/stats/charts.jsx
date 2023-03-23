import { useState } from 'react'
import MonthlyTotalsChart from "./charts/monthlyTotalsChart"
import WeeklyTotalsChart from "./charts/weeklyTotalsChart"
// run type composition

export default function Charts ({ data }) {
    const [ chartIndex, setChartIndex ] = useState(1)
    const monthlyChart = <MonthlyTotalsChart data={ data.monthly_chart }/>
    const weeklyChart = <WeeklyTotalsChart data={ data.weekly_chart } />

    function handleChartDisplay () {
        if(chartIndex === 0) {
            return monthlyChart;
        } else if(chartIndex === 1) {
            return weeklyChart;
        }
    }

    return (
        <section className='charts'>
            { (data.monthly_chart) ? handleChartDisplay(): null }
        </section>
    )
}