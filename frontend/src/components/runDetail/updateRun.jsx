import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { patchRun, deleteRun } from '../../misc/apiCalls';
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

    function handleDelete () {
        deleteRun(run_id);
        navigate('/calendar');
    }

    return (
        <div className='update-run'>
            <RunFields fields={ fields } setFields={ setFields } />
            <button onClick={ handleSubmit } data-cy='update-run-btn'>SUBMIT</button>
            <button onClick={ handleDelete } data-cy='delete-run-btn'>DELETE</button>
        </div>
    )
}