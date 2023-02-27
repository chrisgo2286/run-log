import DaysOfWeek from "./daysOfWeek";
import Day from "../../day/day";
import { useContext } from "react";
import { MonthContext } from '../../../misc/context';

export default function CalendarBody ({ days }) {

    const [ month, setMonth ] = useContext(MonthContext);
    return (
        <div className="calendar-body">
            <DaysOfWeek />
            { days.map((day, ndx) => (
                < Day
                    key={ ndx }
                    month={ month }
                    day={ day }
                />
            ))}
        </div>
    )
}