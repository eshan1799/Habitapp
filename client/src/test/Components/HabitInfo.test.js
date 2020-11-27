import HabitInfo from '../../Components/HabitInfo.js'

describe('HabitInfo', () => {
    let component;
    let mockFunc;

    const historyMock = { push: jest.fn() }
    mockFunc = jest.fn()

    beforeEach(() => {
        component = shallow(<HabitInfo history={ historyMock }/>);
    });

    test('has a div', () => {
        expect(component.find('div')).toHaveLength(1)
    })

    // test('has a form', () => {
    //     expect(component.find('form')).toHaveLength(1)
    // })

    // test('has 2 labels', () => {
    //     expect(component.find('label')).toHaveLength(2)
    // })

    // test('has 2 inputs', () => {
    //     expect(component.find('input')).toHaveLength(2)
    // })

    // test('has 1 select', () => {
    //     expect(component.find('select')).toHaveLength(1)
    // })

    // test('has 7 options to choose from', () => {
    //     expect(component.find('option')).toHaveLength(7)
    // })

    // test("handleInput is a function", () => {
    //     const handleInput = jest.spyOn(component.instance(), 'handleInput')
    //     expect(typeof handleInput).toBe( 'function' );
    // })

    // test("addHabit is a function", () => {
    //     const addHabit = jest.spyOn(component.instance(), 'addHabit')
    //     expect(typeof addHabit).toBe( 'function' );
    // })
    
})