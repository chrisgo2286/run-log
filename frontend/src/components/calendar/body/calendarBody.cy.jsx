import React from "react";
import CalendarBody from './calendarBody';
import { MonthContext } from '../../../misc/context';
import { BrowserRouter as Router } from 'react-router-dom';

const days = [
    {
        day_num: 1,
        distance: 5,
        minutes: 30,
        run_id: 1
    },
    {
        day_num: 2,
        distance: 6,
        minutes: 35,
        run_id: 2
    }
]

const month = {
        number: 1,
        year: 2023
    }

let setMonth;

describe('<CalendarBody />', () => {
    it('renders CalendarBody', () => {
        cy.mount(
            <Router>
                <MonthContext.Provider value={[ month, setMonth ]}>
                    <CalendarBody days={ days }/>
                </MonthContext.Provider>
            </Router>

        )
        cy.get('div.body').should('exist');
    })
})