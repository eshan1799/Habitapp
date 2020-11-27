import Error404 from '../../Containers/Error404'
import { WrappedComponent, shallow } from 'enzyme'

describe('Error404', () => {
    let component;
    let historyMock; 
    
    beforeEach(() => {
        historyMock = { push: jest.fn() }
       
        component = shallow(<Error404.WrappedComponent />);
    });

    test('has a title', () => {
        expect(component.find('h2')).toHaveLength(1)
    })
})