import Login from '../../Containers/Login'


describe('Login', () => {
    let component;
    let mockFunc;

    const historyMock = { push: jest.fn() }
    mockFunc = jest.fn()

    beforeEach(() => {
        component = shallow(<Login history={ historyMock }/>);
    });

    test('renders a fragment', () => {
        expect(component.find('Fragment')).toHaveLength(1)
    })

    test('has a form', () => {
        expect(component.find('form')).toHaveLength(1)
    })

    test('has 2 inputs', () => {
        expect(component.find('input')).toHaveLength(2)
    })

    test('has 1 button', () => {
        expect(component.find('button')).toHaveLength(1)
    })

    test('has a link', () => {
        expect(component.find('Link')).toHaveLength(1)
    })

    // test('onChange is a function', () => {
    //     const onChange = jest.spyOn(component.instance(), 'onChange')
    //     expect(typeof onChange).toBe('function');
    // })
});
