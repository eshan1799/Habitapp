import Dashboard from '../../Containers/Dashboard.js'
import { expectation } from 'sinon';

describe('Dashboard', () => {
    let component;
    let mockFunc;

    const historyMock = { push: jest.fn() }
    mockFunc = jest.fn()

    beforeEach(() => {
        component = shallow(<Dashboard history={ historyMock }/>);
    });

    test('has a title', () => {
        expect(component.find('h1').text()).toContain('Hello')
    })

    test('has 2 buttons', () => {
        expect(component.find('button')).toHaveLength(2)
    })

    test('has a button to add habit', () => {
        expect(component.find('#addHabit').text()).toContain('Add habit')
    })

    test('has a button to logout', () => {
        expect(component.find('#logout').text()).toContain('Logout')
    })
    
})