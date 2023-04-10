import { useState } from 'react';
import './toggleButton.css';

export default function ToggleButton ({ name, init_choice, alt_choice, fields, setFields }) {
    const [ choice, setChoice ] = useState(init_choice)
    const [ clicked, setClicked ] = useState(false)

    function toggleChoice () {
        const newChoice = (choice === init_choice) ? alt_choice: init_choice;
        setFields({ ...fields, [name]: newChoice })
        setChoice(newChoice);
        setClicked(!clicked);
    }

    function createClassOptionA () {
        return (clicked) ? 'toggle-clicked': 'toggle-unclicked';
    }

    function createClassOptionB () {
        return (!clicked) ? 'toggle-clicked': 'toggle-unclicked';
    }

    return (
        <div className='toggle-button' data-cy='toggle-button'>
            <div className={ createClassOptionA() } onClick={ toggleChoice }></div>
            <div className={ createClassOptionB() } onClick={ toggleChoice }></div>
            <div className='toggle-choice' data-cy='privacy-choice'>{ choice }</div>            
        </div>
    )
}