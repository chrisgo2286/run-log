import CalendarHeader from "./calendarHeader";
import { MonthContext } from '../../../misc/context';

const month = {
    number: 1,
    year: 2023
}

let setMonth;

describe('<CalendarHeader />', () => {
    it('renders CalendarHeader', () => {
        cy.mount(
            <MonthContext.Provider value={[ month, setMonth ]}>
                <CalendarHeader />
            </MonthContext.Provider>
        )

        cy.get('div.calendar-header').should('exist');
    })
})