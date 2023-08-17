function findMaxToptoBottom(){
    //We need to require the file system module before initiating the file stream
const fs = require('fs');

// Read the content of the "triangle.txt" file
const triangleData = fs.readFileSync('triangle.txt', 'utf-8');

// Parse the content into a 2D array, first it must be and then it should be 
const triangle = triangleData.trim().split('\n').map(row =>
    row.split(' ').map(Number)
); 

// All we are trying to do is to find the maximum total
//  It starts from the second-to-last row of the triangle and iterates backwards to the first row. 
// for each row, it iterates over the columns and adds the maximum value between the current element and its two adjacent elements in the next row. 
for (let row = triangle.length - 2; row >= 0; row--) {
    for (let col = 0; col <= row; col++) {
        triangle[row][col] += Math.max(triangle[row + 1][col], triangle[row + 1][col + 1]);

        //note that a comparison has been done here which is why it is possibe,
        // the Math.max function to compares the values triangle[row + 1][col] and triangle[row + 1][col + 1], and then adding the maximum value to the current element triangle[row][col]. This process is repeated until the first row is reached.
    }
}

// The top element now contains the maximum total
const maxTotal = triangle[0][0];

console.log('The maximum total from top to bottom is:', maxTotal);

}
findMaxToptoBottom();
