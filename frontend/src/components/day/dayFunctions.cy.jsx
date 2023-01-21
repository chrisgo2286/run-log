import { pullDay, dayNoRun, dayWithRun } from "./dayFunctions";

const day = {
    day_num: 1,
    distance: 5,
    minutes: 30,
    run_id: 1
}

describe('Day Functions', () => {
    it('renders dayWithRun', () => {
        cy.mount(dayWithRun(day))
        cy.get('div.day-num').should('exist');
    });

    it('renders dayNoRun', () => {
        cy.mount(dayNoRun(day.day_num))
        cy.get('div.day-num').should('exist');
    })

    it('renders pullDay', () => {
        cy.mount(pullDay(day))
        cy.get('div.distance').should('have.text', '5 km');
    })
})