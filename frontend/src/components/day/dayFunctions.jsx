import React from "react";

export function pullDay (day) {
    if (day.day_num !== 'x') {
        return (day.run_id) ? dayWithRun(day) : dayNoRun(day.day_num);
    }
}

export function dayNoRun (day_num) {
    return (
        <React.Fragment>
            <div className="day-num">{ day_num }</div>
            <div className="day-body">
                <div className="run-type">Add Run</div>
            </div>
        </React.Fragment>
    )
}

export function dayWithRun (day) {
    const { day_num, run_type, distance, minutes } = day;
    return (
        <React.Fragment>
            <div className="day-num">{ day_num }</div>
            <div className="day-body">
                <div className="run-type">{ run_type }</div>
                <div className="distance">{ distance } km</div>
                <div className="minutes">{ minutes } min</div>
            </div>
        </React.Fragment>
    )
}