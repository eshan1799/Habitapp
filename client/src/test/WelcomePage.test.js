import WelcomePage from '../Containers/WelcomePage.js'
import { shallow } from 'enzyme'
import { expectation } from 'sinon';

describe('WelcomePage', () => {
    let component;
    let historyMock; 
    let mockFunc;
    beforeEach(() => {
        historyMock = { push: jest.fn() }
        mockFunc = jest.fn()
        component = shallow(<WelcomePage history={ mockFunc }/>);
    });

    test('has a title', () => {
        expect(component.find('h1').text()).toContain('welcome to our habitapp')
    })

    test('has a paragraph', () => {
        expect(component.find('p').text()).toContain('How to use our app')
    })

    test('has 2 links', () => {
        expect(component.find('Link')).toHaveLength(2)
    })
    
    // test('Simulate click to register', () => {
    //     component.find('#linkRegister').simulate('click');
    //     expect(mockFunc).toHaveBeenCalled()
    // })
    // test('it should simulate click', () => {
    //     const linkLogin = component.find('#linkLogin');
    //     linkLogin.simulate('click')
    //     const callback = mockFunc.mock.calls.length
    //     expect(callback).toBe(1);
    // })
})