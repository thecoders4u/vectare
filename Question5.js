

function findNthPrime(n) {
   // n which represents the position of the prime number to be found. It initializes a variable count to keep track of the number of prime numbers found and a variable num to store the current number being checked.

    let count = 0;
    let num = 2;
    // a while loop that continues until count is equal to n. Inside the loop, it calls the checkisPrime function passing num as an argument to check if the current number is prime. If it is prime, the count is incremented.
    while (count < n) {
        if (checkisPrime(num)) {
            count++;
        }
        num++;
    }

    return num - 1; // because the last number checked before exiting the loop would be the nth prime number
}
function checkisPrime(num) {
    if (num <= 1) return false; //we are considering positive integers
    if (num <= 3) return true; //this focuses on 2 and 3 itself which are already prime
    if (num % 2 === 0 || num % 3 === 0) return false;  //any number divisible by the

    let i = 5; // We start checking for divisibility from the number 5. This is because 2 and 3 are the first two prime numbers, and we've already handled divisibility by 2 and 3 earlier in the code
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 6;
    }

    return true;
} 

const nthPrime = 10001;
const result = findNthPrime(nthPrime);
console.log(`The ${nthPrime}st prime number is: ${result}`);
