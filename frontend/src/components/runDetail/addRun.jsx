import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { postRun } from '../../misc/apiCalls';
import { validateRunDetail } from '../../misc/validation/validateRunDetail';
import RunFields from './runFields';
import Button from '../miscComponents/button/button';
import ValidationErrors from '../miscComponents/validationErrors/validationErrors';
import './runDetail.css';

export default function AddRun () {

    const { date } = useLocation().state;
    const navigate = useNavigate();
    const [ errors, setErrors ] = useState([])
    const [ fields, setFields ] = useState({
        date: date,
        run_type: 'Easy Run',
        distance: '',
        time: '',
        comment: '',
    });

    async function handleSubmit () {
        
        const newErrors = validateRunDetail(fields)

        if(newErrors.length > 0) {
            setErrors(newErrors)
            return null;
        }
        
        const newFields = { ...fields, owner: '1' };
        console.log(newFields)
        postRun(newFields);
        navigate('/calendar');
    }

    return (
        <div className='add-run'>
            <RunFields fields={ fields } setFields={ setFields } />
            <Button onClick={ handleSubmit } label='Submit' data-cy='add-run-btn' />
            <ValidationErrors errors={ errors } />
        </div>
    )
}