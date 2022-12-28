import React from "react";
import { useNavigate } from 'react-router-dom';

export default function Day (props) {

    const navigate = useNavigate();

    function updateRun () {
        navigate('/add_run', {state: {
            date: formatDate(props.year, props.month, props.day_num),
            distance: props.distance,
            time: props.minutes,
            comment: props.comment,
            run_id: props.run_id,
            }
        });
    }

    function addRun () {
        navigate('/add_run', {state: {
            date: formatDate(props.year, props.month, props.day_num),
            distance: '',
            time: '',
            comment: '',
            }
        });
    }
    
    function handleClick () {
        return (props.run_id ? updateRun() : addRun() )
    }

    function handleDayNum () {
        if (props.day_num != 'x') {
            return (<div className="day-num">{ props.day_num }</div>)
        }
    }
    function handleRunData () {
        if (props.run_id) {
            return (
                <div className="day-body">
                    <div className="distance">{ props.distance } km</div>
                    <div className="minutes">{ props.minutes } min</div>
                </div>
            )
        }
        else if (props.day_num != 'x') {
            return(<div className="day-body">Add Run</div>)
        }
    }

    function formatDate (year, month, day) {
        return (year + '-' + month + '-' + day.toString().padStart(2,0))
    }

    return (
        <div className="day" onClick={ handleClick }>
            { handleDayNum() }
            { handleRunData() }           
        </div>
    )
}

