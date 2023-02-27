import React from "react";
import CalendarBody from './calendarBody';
import { MonthContext } from '../../../misc/context';
import { BrowserRouter as Router } from 'react-router-dom';

const days = [
    {
        day_num: 1,
        distance: 5,
        minutes: 30,
        run_type: 'Easy Run',
        run_id: 1
    },
    {
        day_num: 2,
        distance: 6,
        minutes: 35,
        run_type: 'Easy Run',
        run_id: 2
    }
]

const month = {
        number: 1,
        year: 2023
    }

let setMonth;

describe('<CalendarBody />', () => {
    beforeEach(() => {
        cy.mount(
            <Router>
                <MonthContext.Provider value={[ month, setMonth ]}>
                    <CalendarBody days={ days }/>
                </MonthContext.Provider>
            </Router>
        )
    })

    it('renders CalendarBody', () => {
        cy.get('div.calendar-body').should('exist');
        cy.get('div[data-cy="day1"]').should('exist');
        cy.get('div[data-cy="day2"]').should('exist');
        cy.get('div[data-cy="Sunday"]').should('exist');
    })
    it('clicking day should navigate to updateRun comp', () => {
        cy.get('div[data-cy="day1"]').click()
        cy.url().should('include', '/update_run')
    })
})