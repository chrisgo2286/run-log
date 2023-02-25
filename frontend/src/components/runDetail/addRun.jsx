import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { postRun } from '../../misc/apiCalls';
import RunFields from './runFields';
import Button from '../miscComponents/button/button';
import './runDetail.css';

export default function AddRun () {

    const { date } = useLocation().state;
    const navigate = useNavigate();
    const [fields, setFields] = useState({
        date: date,
        run_type: '',
        distance: '',
        time: '',
        comment: '',
    });

    function handleSubmit () {
        const newFields = { ...fields, owner: '1' };
        console.log(newFields)
        postRun(newFields);
        navigate('/calendar');
    }

    return (
        <div className='add-run'>
            <RunFields fields={ fields } setFields={ setFields } />
            <Button onClick={ handleSubmit } label='Submit' data-cy='add-run-btn' />
        </div>
    )
}