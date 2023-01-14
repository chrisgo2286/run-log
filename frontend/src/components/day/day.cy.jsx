import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import Day from './day'

const day = {
    day_num: 1,
    distance: 5,
    minutes: 30,
    run_id: 1
}

const month = {
    number: 1,
    year: 2022
}

describe('<Day />', () => {
  it('renders day', () => {
    cy.mount(
        <Router>
            <Day day={ day } month={ month }/>
        </Router>
    )
    cy.get('div.day').should('exist')
  })
})