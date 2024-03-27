let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}
const sum = (a,b) => {
    return a + b
}

// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * oneEuroIs["USD"];
    // return the dollar value
    return valueInDollar;
};
// Value in yen
const fromDollarToYen = function (valueinDollar) {
    let valueInEuro = valueinDollar / oneEuroIs["USD"];
    let valueInYen = valueInEuro * oneEuroIs["JPY"];
    return valueInYen;
};
// Value in pound
const fromYenToPound = function (valueInYen) {
    let valueInEuro = valueInYen / oneEuroIs["JPY"];
    let valueInPound = valueInEuro * oneEuroIs["GBP"];
    return valueInPound;
};

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };





