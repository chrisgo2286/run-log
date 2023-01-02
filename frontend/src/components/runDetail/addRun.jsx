import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { postRun } from '../../misc/apiCalls';
import RunFields from './runFields';

export default function AddRun () {

    const { date } = useLocation().state;
    const navigate = useNavigate();
    
    const [fields, setFields] = useState({
        date: date,
        distance: '',
        time: '',
        comment: '',
    });

    function handleSubmit () {
        const newFields = { ...fields, owner: '1' };
        postRun(newFields);
        navigate('/calendar');
    }

    return (
        <div className='add-run'>
            <RunFields fields={ fields } setFields={ setFields } />
            <button onClick={ handleSubmit }>SUBMIT</button>
        </div>
    )
}