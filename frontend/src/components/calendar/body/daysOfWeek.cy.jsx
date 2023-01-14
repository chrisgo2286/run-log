import DaysOfWeek from './daysOfWeek';

describe('<DaysOfWeek />', () => {
    it('renders DaysOfWeek', () => {
        cy.mount(
            <DaysOfWeek />
        )
      cy.get('div.day-of-week').contains('Monday')
    })
  })