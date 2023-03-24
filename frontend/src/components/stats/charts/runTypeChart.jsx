import { 
    PieChart,
    Pie, 
    ResponsiveContainer, 
    Tooltip, 
    Cell
} from 'recharts'

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]

export default function RunTypeChart ({ data }) {
    
    return (
        <ResponsiveContainer>
            <PieChart width='90%' height='90%'>
                <Pie 
                    data={ data } 
                    dataKey='distance' 
                    nameKey='run_type'
                    fill="#8884d8" 
                    cx='50%'
                    cy='50%' 
                    outerRadius='100%'>
                        { data.map((entry, ndx) => (
                            <Cell 
                                key={ 'cell-' + ndx }
                                fill={ COLORS[ndx] } />
                        ))}
                </Pie>
                <Tooltip cursor={{ fill: 'rgba(50, 50, 50, .15' }}/>
            </PieChart>
        </ResponsiveContainer>
    )
}