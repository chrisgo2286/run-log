import React from 'react';

export default function DaysOfWeek () {
    const daysOfWeek = [
        'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 
        'Saturday'
    ]

    return (
        <React.Fragment>
            { daysOfWeek.map((dayOfWeek, ndx) =>(
                <div key={ ndx } className='day-of-week' data-cy={ dayOfWeek }>
                    { dayOfWeek }
                </div>
            ))}
        </React.Fragment>
    )
}