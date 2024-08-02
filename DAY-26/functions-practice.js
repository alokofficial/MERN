// check even odd

function checkEvenOdd(number) {
    if (number % 2 == 0) {
        return "Even";
    } else {
        return "Odd";
    }
}   
 
//check larger of two number

function largerNumber(number1, number2) {
    if (number1 > number2) {
        return number1;
    } else {
        return number2;
    }   
}

// convert celsius to fahrenheit

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

//return to square of number

function square(number) {
    return number * number;
}   

//demostrate with a function increment that the original number passed to it does not change after incrementing it inside the function.

function increment(number) {
    return number + 1;
}

//return average of five numbers

function average(number1, number2, number3, number4, number5) {
    return (number1 + number2 + number3 + number4 + number5) / 5;
}

//return the concated string

function concatenate(string1, string2) {
    return string1 + string2;
}


