import { useState } from 'react';
import { MonthContext } from "../../misc/context";
import { fetchData } from '../../misc/apiCalls';
import './calendar.css'

export default function CalendarPublic () {

    const user_id = useLocation().state
    const [ month, setMonth ] = useContext(MonthContext)
    const [ days, setDays ] = useState([])

    useEffect(() => {
        fetchData(month)
        .then((data) => {
            setDays(data);
        })
    }, [ month ]);

    return (
        <div className='calendar'>

        </div>
    )

}