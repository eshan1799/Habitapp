import ToggleButton from '../../Components/ToggleButton.js'
import { shallow } from 'enzyme'
import { expectation } from 'sinon';

describe('ToggleButton', () => {
    let component;
    let historyMock; 
    let mockFunc;

    beforeEach(() => {
        historyMock = { push: jest.fn() }
        mockFunc = jest.fn()
        component = shallow(<ToggleButton history={ mockFunc }/>);
    });

    test('has a label', () => {
        expect(component.find('label')).toHaveLength(1)
    })

    test('has an input', () => {
        expect(component.find('input')).toHaveLength(1)
    })

    test("handleCheckBox is a function", () => {
        const handleCheckBox  = jest.spyOn(component.instance(), 'handleCheckBox')
        expect(typeof handleCheckBox).toBe( 'function' );
    })
    
})