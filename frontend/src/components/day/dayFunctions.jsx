import React from "react";

export function pullDay (day) {
    if (day.day_num !== 'x') {
        return (day.run_id) ? dayWithRun(day) : dayNoRun(day.day_num);
    }
}

function dayNoRun (day_num) {
    return (
        <React.Fragment>
            <div className="day-num">{ day_num }</div>
            <div className="day-body">Add Run</div>
        </React.Fragment>
    )
}

function dayWithRun (day) {
    const { day_num, distance, minutes } = day;
    return (
        <React.Fragment>
            <div className="day-num">{ day_num }</div>
            <div className="day-body">
                <div className="distance">{ distance } km</div>
                <div className="minutes">{ minutes } min</div>
            </div>
        </React.Fragment>
    )
}