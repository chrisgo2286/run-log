import PriorMonthBtn from './priorMonthBtn';
import { MonthContext } from '../../../misc/context';

const month = {
    number: 1,
    year: 2023
}

let setMonth;

describe('<PriorMonthBtn />', () => {
    it('renders PriorMonthBtn', () => {
        cy.mount(
            <MonthContext.Provider value={[ month, setMonth ]}>
                <PriorMonthBtn />
            </MonthContext.Provider>
        )
        cy.get('div.month-prior').should('exist');
    })
})