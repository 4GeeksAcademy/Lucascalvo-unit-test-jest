const { sum ,fromEuroToDollar, fromDollarToYen, fromYenToPound } = require("./app.js");

test('adds 14 + 9 to equal 23', () => {
   
    let total = sum(14, 9);

    
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", () => {
    const dollars = fromEuroToDollar(1);
    const expected = 1.07;
    expect(dollars).toBeCloseTo(expected);
});

test('One dollar should be 146.26 yen', () => {
    const yen = fromDollarToYen(1);
    const expected = (1 / 1.07) * 156.5;
    expect(yen).toBeCloseTo(expected);
});

test('One yen should be 0.00556 pounds', () => {
    const pound = fromYenToPound(1);
    const expected = (1 / 156.5) * 0.87;
    expect(pound).toBeCloseTo(expected);
});
