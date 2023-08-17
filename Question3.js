
function fetchLargestPalindrome() {
    let largestPalindrome = 0;
    
    //  uses a nested loop to iterate through all possible combinations of three-digit numbers. It starts with i and j both equal to 999 and decrements them until they reach 100.

    for (let i = 999; i >= 100; i--) {
        for (let j = 999; j >= 100; j--) {
            
            // it calculates the product of i and j and assigns it to the product variable. It then checks if the product is less than or equal to the current largestPalindrome.
            const product = i * j;
            
            if (product <= largestPalindrome) {
                // No need to continue since the product will only get smaller
                break;
            }
            if (checkIsPalindrome(product)) {
                largestPalindrome = product;
            }
        }
    }

    return largestPalindrome;
}
function checkIsPalindrome(num) {
    const numStr = num.toString();
    const reversedStr = numStr.split('').reverse().join('');
    return numStr === reversedStr;
}


const largestPalindrome = fetchLargestPalindrome();
console.log(`The largest palindrome made from the product of two 3-digit numbers is: ${largestPalindrome}`);
