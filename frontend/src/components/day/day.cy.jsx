import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import Day from './day'

const dayWithRun = {
    day_num: 1,
    distance: 5,
    minutes: 30,
    run_id: 1
}

const dayNoRun = {
  day_num: 1,
}

const month = {
    number: 1,
    year: 2022
}

describe('<Day />', () => {
    it('renders day with run', () => {
        cy.mount(
            <Router>
                <Day day={ dayWithRun } month={ month } />
            </Router>
        )
        cy.contains('5 km')
        cy.contains('30 min')
    })

    it('renders day with no run', () => {
      cy.mount(
          <Router>
              <Day day={ dayNoRun } month={ month } />
          </Router>
      )
      cy.contains('Add Run')
  })

    it('clicking day with run navigates to update_run', () => {
        cy.mount(
            <Router>
              <Day day={ dayWithRun } month={ month } />
            </Router>
        )
        cy.get('div.day').click()
        cy.url().should('include','update_run')
    })

    it('clicking day with no run navigates to add_run', () => {
      cy.mount(
          <Router>
            <Day day={ dayNoRun } month={ month } />
          </Router>
      )
      cy.get('div.day').click()
      cy.url().should('include','add_run')
  })
})