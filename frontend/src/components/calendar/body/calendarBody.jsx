import DaysOfWeek from "./daysOfWeek";
import Day from "../../day/day";
import { useContext } from "react";
import { MonthContext } from "../../../index";

export default function CalendarBody ({ days }) {

    const [ month, setMonth ] = useContext(MonthContext);
    return (
        <div className="body">
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