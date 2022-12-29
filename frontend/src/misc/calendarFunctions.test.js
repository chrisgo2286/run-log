import { 
    getMonthNumFromDate, 
    getMonthNameFromDate, 
    getMonthNameFromNum,
    getYear,
    getPriorMonth,
    getNextMonth,
} from "./calendarFunctions";

const date = new Date(2022, 5, 1)

it('getMonthNumFromDate returns 6 for June', () => {    
    expect(getMonthNumFromDate(date)).toEqual(6);
});

it('getMonthNameFromDate returns June', () => {
    expect(getMonthNameFromDate(date)).toEqual('June');
});

it('getMonthNameFromNum returns June for 6', () => {
    expect(getMonthNameFromNum(6)).toEqual('June');
});

it('getYear returns 2022', () => {
    expect(getYear(date)).toEqual(2022);
})

it('getPriorMonth returns [5, 2022]', () => {
    expect(getPriorMonth(6, 2022)).toEqual([5, 2022])
})

it('getPriorMonth returns [12, 2022]', () => {
    expect(getPriorMonth(1, 2023)).toEqual([12, 2022])
})

it('getNextMonth returns [7, 2022]', () => {
    expect(getNextMonth(6, 2022)).toEqual([7, 2022])
})

it('getNextMonth returns [1, 2023]', () => {
    expect(getNextMonth(12, 2022)).toEqual([1, 2023])
})