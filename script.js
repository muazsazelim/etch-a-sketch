
const topContainer = document.querySelector("#top-container");

const gridContainer = document.createElement('div');
gridContainer.classList.add('grid-container');
topContainer.appendChild(gridContainer);

let gridSize = 16;

for (let i = 0; i < gridSize; i++) {
    const grid = document.createElement('div');
    grid.classList.add('grid');
    for (let i = 0; i < gridSize; i++) {
        const squareSize = 960 / gridSize;
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        grid.appendChild(square);
    }
    gridContainer.appendChild(grid)
}