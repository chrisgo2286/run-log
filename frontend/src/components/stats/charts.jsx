import { useState } from 'react'
import MonthlyTotalsChart from "./charts/monthlyTotalsChart"
import WeeklyTotalsChart from "./charts/weeklyTotalsChart"
import ArrowButton from '../miscComponents/arrowButton/arrowButton'
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

    function decrementChartIndex () {
        setChartIndex(chartIndex - 1)
    }

    function incrementChartIndex () {
        setChartIndex(chartIndex + 1)
    }



    return (
        <section className='charts'>
            <ArrowButton 
                onClick={ decrementChartIndex } 
                disabled={ (chartIndex === 0) ? true : false} 
                label='&#8678;' />
            { (data.monthly_chart) ? handleChartDisplay(): null }
            <ArrowButton 
                onClick={ incrementChartIndex } 
                disabled={ (chartIndex === 2) ? true : false }
                label='&#8680;' />
        </section>
    )
}