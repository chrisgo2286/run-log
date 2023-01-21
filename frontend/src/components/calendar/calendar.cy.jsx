import Calendar from "./calendar";
import { MonthContext } from "../../misc/context";

const month = {
    number: 1,
    year: 2023
}

const days = [
    {
        day_num: 1,
        distance: 5,
        minutes: 30,
        run_id: 1
    },
    {
        day_num: 2,
        distance: 6,
        minutes: 35,
        run_id: 2
    }
]

let setMonth;

describe('<Calendar />', () => {
    it('renders Calendar', () => {

        cy.mount(
            <MonthContext.Provider value={[ month, setMonth ]}>
                <Calendar />
            </MonthContext.Provider>
        )
        cy.get('div.calendar').should('exist');
    })
})