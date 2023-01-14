import NextMonthBtn from './nextMonthBtn';
import { MonthContext } from '../../../misc/context';

const month = {
    number: 1,
    year: 2023
}

let setMonth;

describe('<NextMonthBtn />', () => {
    it('renders NextMonthBtn', () => {
        cy.mount(
            <MonthContext.Provider value={[ month, setMonth ]}>
                <NextMonthBtn />
            </MonthContext.Provider>
        )
        cy.get('div.month-after').should('exist');
    })
})