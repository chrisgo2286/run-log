import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

export default function AddRun () {

    const location = useLocation();
    const navigate = useNavigate();
    
    const [fields, setFields] = useState({
        date: location.state.date,
        distance: location.state.distance,
        time: location.state.time,
        comment: location.state.comment,
    });

    function handleChange (event) {
        const { name, value } = event.target;
        setFields({ ...fields, [name]: value });
    }

    function handleSubmit () {
        if (location.state.run_id) {
            axios.patch('/api/runs/' + location.state.run_id + '/', fields)
            .then(response => {
                console.log(response)
            })
        } else {
            const newFields = { ...fields, owner: '1' };
            axios.post('/api/runs/', newFields)
            .then(response => {
                console.log(response)
            })
        }
        navigate('/calendar');
    }

    return (
        <div className='add-run'>
            <input 
                type='date' 
                name='date'
                value={ fields.date }
                onChange={ handleChange } />
            <input 
                type='integer' 
                name='distance' 
                placeholder='Distance'
                value={ fields.distance }
                onChange={ handleChange } />
            <input 
                type='integer' 
                name='time' 
                placeholder='Time (Minutes)'
                value={ fields.time } 
                onChange={ handleChange } />
            <input 
                type='text' 
                name='comment' 
                placeholder='Comment'
                value={ fields.comment } 
                onChange={ handleChange } />
            <button 
                onClick={ handleSubmit }>SUBMIT</button>
        </div>
    )
}