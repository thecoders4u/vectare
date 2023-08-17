function getNumberofRoutes(gridSize) {
    // this takes a parameter gridSize which represents the size of the grid. 
    //It initializes a 2D array grid with dimensions gridSize + 1 by gridSize + 1, filled with zeros.
    const grid = new Array(gridSize + 1).fill(0).map(() => new Array(gridSize + 1).fill(0));

    for (let i = 0; i <= gridSize; i++) {
        grid[i][gridSize] = 1;
        grid[gridSize][i] = 1;
        //it sets the last row and last column of the grid array to 1, as there is only one possible route to reach any cell in the last row or last column.
    }

    for (let i = gridSize - 1; i >= 0; i--) {
        for (let j = gridSize - 1; j >= 0; j--) {
            grid[i][j] = grid[i + 1][j] + grid[i][j + 1];

            //it iterates through the grid array starting from the second last row and second last column. For each cell, it calculates the number of possible routes to reach that cell by summing the number of routes from the cell below and the cell to the right.
        }
    }

    return grid[0][0]; //returns the value in the top-left cell of the grid array, which represents the total number of possible routes from the top-left corner to the bottom-right corner of the grid.
}

const gridSize = 20;
const routes = getNumberofRoutes(gridSize);
console.log(`Number of routes through a ${gridSize}x${gridSize} grid: ${routes}`);
