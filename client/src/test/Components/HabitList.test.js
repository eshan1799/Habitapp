import HabitList from '../../Components/HabitList.js'

describe('HabitList', () => {
    let component;
    let mockFunc;

    const historyMock = { push: jest.fn() }
    mockFunc = jest.fn()

    beforeEach(() => {
        component = shallow(<HabitList history={ historyMock }/>);
    });

    test('has a div', () => {
        expect(component.find('div')).toHaveLength(1)
    })

    test("openModal is a function", () => {
        const openModal = jest.spyOn(component.instance(), 'openModal')
        expect(typeof openModal).toBe( 'function' );
    })
    
})