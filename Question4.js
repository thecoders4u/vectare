function greatestCommonDivisor(a, b) {
    /* 
    calculates the greatest common divisor of two numbers using the Euclidean algorithm. 
    It repeatedly divides the larger number by the smaller number and assigns the remainder to the smaller number until the remainder is zero. The function then returns the non-zero remainder, 
    which is the greatest common divisor.
    
    */
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function lowestCommonMultiple(a, b) {
    /* calculates the least common multiple of two numbers, 
     It multiplies the two numbers and divides the result by their greatest common divisor
    */
    return (a * b) / greatestCommonDivisor(a, b);
}

function smallestMultipleInRange(min, max) {
   //two parameters: min and max, which represent the minimum and maximum numbers in the range, respectively.


   //multiple is initialized to 1. This variable will store the smallest multiple that is divisible by all numbers in the range.

    let multiple = 1;
    //For each iteration, the lowestCommonMultiple function is called with the current multiple
    // and the current number as arguments.
    // The result of this function call is then assigned back to the multiple variable.
    for (let i = min; i <= max; i++) {
        multiple = lowestCommonMultiple(multiple, i);
    }

    return multiple;
}

const minRange = 1;
const maxRange = 20;
const smallestMultiple = smallestMultipleInRange(minRange, maxRange);

console.log(`The smallest positive number divisible by all numbers from ${minRange} to ${maxRange} is: ${smallestMultiple}`);
