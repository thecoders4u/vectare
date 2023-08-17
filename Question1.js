function sumofMultiples(limit) {
    
    let sum = 0; //to keep track of multiples
    // For each number, it checks if it is divisible by 3 or 5 using the modulo operator (%). If the number is divisible by either 3 or 5, it adds the number to the sum variable.
    for (let i = 1; i < limit; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }

    return sum;
}

const limit = 1000;
const result = sumofMultiples(limit);

console.log(`The sum of all multiples of 3 or 5 below ${limit} is: ${result}`);
