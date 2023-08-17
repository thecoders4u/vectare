function theFibonacciSum(limit) {
    // three variables are initialized: sum to keep track of the sum of even Fibonacci numbers,
    //  prevFib to store the previous Fibonacci number, 
    //  and currFib to store the current Fibonacci number.

    let sum = 0;
    let prevFib = 1;
    let currFib = 2;

    //A while loop is used to iterate through the Fibonacci sequence until the current Fibonacci number (currFib) exceeds the given limit.


    while (currFib <= limit) {
        // if statement checks if the current Fibonacci number is even (currFib % 2 === 0). If it is, the current Fibonacci number is added to the sum variable.
        if (currFib % 2 === 0) {
            sum += currFib;
        }
        // the next Fibonacci number is calculated by adding the previous Fibonacci number (prevFib) to the current Fibonacci number (currFib). The values of prevFib and currFib are updated.
        const nextFib = prevFib + currFib;
        prevFib = currFib;
        currFib = nextFib;
    }

    return sum;
}

const limit = 4000000;
const result = theFibonacciSum(limit);

console.log(`The Fibonacci sum limit of ${limit} is: ${result}`);
