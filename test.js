test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

// Test for fromDollarToYen


test("One dollar should be approximately 146.26 yen", function () {
    // Use the function like it's supposed to be used
    const yens = fromDollarToYen(3.5);

    // This is the comparison for the unit test
    expect(yens).toBeCloseTo(511.91588785); // 1 dollar is approximately 146.26168224299064 yen
});

// Test for fromYenToPound


test("One yen should be approximately 0,005559105 pound", function () {
    // Use the function like it's supposed to be used
    const pounds = fromYenToPound(3500);

    // This is the comparison for the unit test
    expect(pounds).toBeCloseTo(19.4568675); // 1 yen is approximately 0,005559105 pound
});

const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');