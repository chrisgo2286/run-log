import DaysOfWeek from "./daysOfWeek";
import Day from "../../day/day";
import { useContext } from "react";
import { MonthContext } from "../../../index";

export default function CalendarBody (props) {

    const [ month, setMonth ] = useContext(MonthContext);

    return (
        <div className="body">
            <DaysOfWeek />
            { props.days.map((day, ndx) => (
                < Day
                    key={ ndx }
                    day_num={ day.day_num }
                    month={ month.number }
                    year={ month.year }
                    distance={ day.distance }
                    minutes={ day.minutes }
                    comment={ day.comment }
                    run_id={ day.run_id } 
                />
            ))}
        </div>
    )
}