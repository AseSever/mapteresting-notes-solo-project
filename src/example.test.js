import addinator from './addinator'



describe('CHECKING ADDINATOR', () => {


    test('Sum of 1 and 2 is 3', () => {
        expect(addinator(1,2)).toBe(3);
    })

    test('one number returns self', () => {
        expect(addinator(1)).toBe(1);
    })

    test('negative numbers behave correctly', () => {
        expect(addinator(-1, 2)).toBe(1);
    })

    test('decimals behave correctly', () => {
        expect(addinator(1.5, 2)).toBe(3.5);
    })

    test('string incorrect imput', () => {
        expect(addinator('1', '2')).toBe(3);
    })
})