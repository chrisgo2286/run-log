import { useState } from 'react'
import MonthlyTotalsChart from "./charts/monthlyTotalsChart"
import WeeklyTotalsChart from "./charts/weeklyTotalsChart"
import RunTypeChart from './charts/runTypeChart'
import ArrowButton from '../miscComponents/arrowButton/arrowButton'

export default function Charts ({ data }) {
    const [ chartIndex, setChartIndex ] = useState(1)

    function handleChartDisplay () {
        if(chartIndex === 0) {
            return <MonthlyTotalsChart data={ data.monthly_chart }/>
        } else if(chartIndex === 1) {
            return <WeeklyTotalsChart data={ data.weekly_chart } />
        } else {
            return <RunTypeChart data={ data.run_types_chart } />
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