import dayjs from 'dayjs'
import { calendar } from '../fixtures/selectors.json'

describe('Calendar Page - Header', () => {
    const today = dayjs().format('MMMM YYYY')
    beforeEach(() => {
        cy.login()
        cy.interceptGetCalendar()
    })

    it('Header renders correctly', () => {
        cy.get(calendar.monthYear).should('have.text', today)
        cy.get(calendar.priorArrowBtn).should('exist')
        cy.get(calendar.nextArrowBtn).should('exist')
    })

    it('Prior arrow button functions correctly', () => {
        const priorMonth = today.subtract(1, 'month').format('MMMM YYYY')
        cy.get(calendar.priorArrowBtn).click()
        cy.get(calendar.monthYear.should('have.text', priorMonth))
    })

    it('Next arrow button functions correctly', () => {
        const nextMonth = today.add(1, 'month').format('MMMM YYYY')
        cy.get(calendar.nextArrowBtn).click()
        cy.get(calendar.monthYear.should('have.text', nextMonth))
    })

})