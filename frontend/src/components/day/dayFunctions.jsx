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

export function buildClass (day, isHovered, dateObj) {
    var className = 'day';
    const curDate = new Date;
    if (day.run_type) {
        const runClass = runTypeClass(day.run_type);
        className = className + ' ' + runClass
    }
    
    if (day.day_num != 'x' && isHovered) {
        className = className + ' ' + 'hover';
    }

    if (curDate < dateObj) {
        className = className + ' ' + 'future-day';
    }
    return className;
}

function runTypeClass (run_type) {
        switch(run_type) {
        case 'Easy Run':
            return 'easy-run';
            break;
        case 'Long Run':
            return 'long-run';
            break;
        case 'Intervals':
            return 'intervals';
            break;
        case 'Tempo Run':
            return 'tempo-run';
            break;
        default:
            return;
    }
}