import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { patchRun, deleteRun } from '../../misc/apiCalls';
import { validateRunDetail } from '../../misc/validation/validateRunDetail';
import RunFields from './runFields';
import Button from '../miscComponents/button/button';
import ValidationErrors from '../miscComponents/validationErrors/validationErrors';
import './runDetail.css';

export default function UpdateRun () {
    
    const { date, run_type, distance, time, comment, run_id } = useLocation().state;
    const navigate = useNavigate();
    const [ errors, setErrors ] = useState([])
    const [ fields, setFields ] = useState({
        date: date,
        run_type: run_type,
        distance: distance,
        time: time,
        comment: comment,
    });

    function handleSubmit () {
        const newErrors = validateRunDetail(fields)
        if (newErrors.length > 0) {
            setErrors(newErrors)
            return null;
        }

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
            <div className='update-run-buttons'>
                <Button onClick={ handleSubmit } label='Submit' data-cy='update-run-btn' />
                <Button onClick={ handleDelete } label='Delete' data-cy='delete-run-btn' />
            </div>
            <ValidationErrors errors={ errors } />
        </div>
    )
}