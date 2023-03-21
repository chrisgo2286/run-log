import { 
    BarChart, 
    ResponsiveContainer, 
    XAxis, YAxis, 
    Bar, 
    CartesianGrid,
    Tooltip 
} from 'recharts'

export default function MonthlyTotalsChart ({ data }) {
    return (
        <ResponsiveContainer>
            <BarChart width='90%' height='90%' data={ data }>
                <XAxis dataKey={ 'month' } />
                <YAxis />
                <Bar dataKey={ 'distance' } fill='#82ca9d'/>
                <CartesianGrid strokeDasharray="3 3" horizontal={ true }/>
                <Tooltip cursor={{ fill: 'rgba(50, 50, 50, .15' }}/>
            </BarChart>
        </ResponsiveContainer>
    )
}