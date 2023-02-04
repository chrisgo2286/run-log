import React from "react";
import './card.css';

export default function Card ({ header, body, footer }) {
    return (
        <div className='card'>
            <div className='card-header'>
                { header }
            </div>
            <div className='card-body'>
                { body }
            </div>
            <div className='card-footer'>
                { footer }
            </div>
        </div>
    )
}