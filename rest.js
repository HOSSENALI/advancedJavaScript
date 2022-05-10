
// rest method to handle parameters of a function........................
function converCurrency(rate, ...amounts) { //this function can take one more parameter in spread operator mode
    return amounts.map(amount => rate * amount);
}
const converted = converCurrency(1.54, 10, 20, 23, 1, 90); //1.54 is rate,rest of all value are amounts
console.log(converted);