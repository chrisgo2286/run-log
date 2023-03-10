import { getMonthNameFromDate, getYear, getMonthData, getPriorMonthData } from '../../frontend/src/misc/calendarFunctions';

describe('Calendar Page', () => {
    // it('Prior Month Btn and Next Month Btn adjusts Month and Year', () => {
    //     cy.login()

    //     const date = new Date()
    //     const currMonth = getMonthData(date)
    //     const priorMonth = getPriorMonthData(currMonth.number, currMonth.year)

    //     cy.get('div[data-cy="month-year"]').contains(currMonth.name + ' ' + currMonth.year)
    //     cy.get('div[data-cy="prior-month-btn"]').click()        
    //     cy.get('div[data-cy="month-year"]').contains(priorMonth.name + ' ' + priorMonth.year)
    //     cy.get('div[data-cy="next-month-btn"]').click()
    //     cy.get('div[data-cy="month-year"]').contains(currMonth.name + ' ' + currMonth.year)
    // })
    it('User can add, update and delete run', () => {
        const run_distance = '5'
        const run_time = '30'
        const run_comment = 'Test Run'

        const run_distance2 = '6'
        const run_time2 = '35'
        const run_comment2 = 'Test Run2'

        cy.login()

        // Click Add Run and assert navigates to add_run
        cy.get('div').contains('Add Run').click()
        cy.url().should('include', 'add_run')

        cy.get('input[data-cy="run-date"]').then(($value) => {
            const dayNum = getDayNum($value.val())
            const dayLocator = 'div[data-cy=' + 'day' + dayNum + ']'

            // Enter new run
            cy.get('input[data-cy="run-distance"]').type(run_distance)
            cy.get('input[data-cy="run-time"]').type(run_time)
            cy.get('input[data-cy="run-comment"]').type(run_comment)
            cy.get('div[data-cy="add-run-btn"]').click()

            // Assert submit navigates back to calendar
            cy.url().should('include', 'calendar')
            
            // Return to created run and assert navigates to update_run
            cy.get(dayLocator).click()
            cy.url().should('include', 'update_run')

            // Assert new run entered correctly
            cy.get('input[data-cy="run-distance"]').should('have.value', run_distance)
            cy.get('input[data-cy="run-time"]').should('have.value', run_time)
            cy.get('input[data-cy="run-comment"]').should('have.value', run_comment)

            // Update run with new data
            cy.get('input[data-cy="run-distance"]').clear().type(run_distance2)
            cy.get('input[data-cy="run-time"]').clear().type(run_time2)
            cy.get('input[data-cy="run-comment"]').clear().type(run_comment2)
            cy.get('div[data-cy="update-run-btn"]').click()

            // Assert run revised with new data
            cy.get(dayLocator)
                .should('contain', run_distance2)
                .and('contain', run_time2)

            // Delete created run
            cy.get(dayLocator).click()
            cy.get('div[data-cy="delete-run-btn"]').click()

            // Assert page navigates to Calendar and run is deleted
            cy.url().should('include', 'calendar')
            cy.get(dayLocator).should('contain', 'Add Run')
        })





        
    })
})

function getDayNum (date) {
    const dateElems = date.split('-')
    const dayNum = dateElems[2]
    if (dayNum[0] === '0') {
        return dayNum[1]
    }
    return dayNum
}