import App from "../App";

describe("App", () => {
    let component;
    beforeEach(() => {
        component = shallow(<App />);
    });

    test('it renders', () => {
        expect(component.find('.container')).toHaveLength(1);
    })

    test('has 5 routes', () => {
        expect(component.find('Route')).toHaveLength(5);
    })
    
    test('it has a fragment', () => {
        expect(component.find('Fragment')).toHaveLength(1);
    })

    test('it has a switch', () => {
        expect(component.find('Switch')).toHaveLength(1);
    })

    test('expect / route to take to HomePage', () => {

    })

    test("setAuth is a function", () => {
        const setAuth  = jest.spyOn(component.instance(), 'setAuth')
        expect(typeof setAuth).toBe( 'function' );
    })
})


