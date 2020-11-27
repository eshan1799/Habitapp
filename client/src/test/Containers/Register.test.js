import Register from '../../Containers/Register.js'
import { expectation } from 'sinon';

describe('Register', () => {
    let component;
    let mockFunc;

    const historyMock = { push: jest.fn() }
    mockFunc = jest.fn()

    beforeEach(() => {
        component = shallow(<Register history={ historyMock }/>);
    });

    test('has a title', () => {
        expect(component.find('h1').text()).toContain('Register')
    })

    test('has a form', () => {
        expect(component.find('form')).toHaveLength(1)
    })

    test('has 4 inputs', () => {
        expect(component.find('input')).toHaveLength(4)
    })

    test('has 1 button', () => {
        expect(component.find('button')).toHaveLength(1)
    })

    test('has 3 divs', () => {
        expect(component.find('div')).toHaveLength(3)
    })
    
})