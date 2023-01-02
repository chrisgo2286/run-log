import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { patchRun } from '../../misc/apiCalls';
import RunFields from './runFields';

export default function UpdateRun () {
    
    const { date, distance, time, comment, run_id } = useLocation().state;
    const navigate = useNavigate();
    
    const [fields, setFields] = useState({
        date: date,
        distance: distance,
        time: time,
        comment: comment,
    });

    function handleSubmit () {
        patchRun(run_id, fields);
        navigate('/calendar');
    }

    return (
        <div className='update-run'>
            <RunFields fields={ fields } setFields={ setFields } />
            <button onClick={ handleSubmit }>SUBMIT</button>
        </div>
    )
}