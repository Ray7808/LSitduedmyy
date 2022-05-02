const sum = require('./sum.js')


//describe what you use for testing
describe('Test sum function', function () {
    test('add 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3)
    })
    test('add 3 + 5 to equal 8', () => {
        expect(sum(3, 5)).toBe(8)
    })
    test('add 10 + 20 to equal 30', () => {
        expect(sum(10, 20)).toBe(30)
    })
})


