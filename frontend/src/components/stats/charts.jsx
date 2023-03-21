import MonthlyTotalsChart from "./charts/monthlyTotalsChart"
// weekly totals
// run type composition

export default function Charts ({ data }) {
    return (
        <section className='charts'>
            { (data.monthly_chart) ? <MonthlyTotalsChart data={ data.monthly_chart }/>: null}
        </section>
    )
}