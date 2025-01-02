
const topContainer = document.querySelector("#top-container");

const buttonContainer = document.createElement('div');
buttonContainer.id = 'button-container';
topContainer.appendChild(buttonContainer);

const gridContainer = document.createElement('div');
gridContainer.classList.add('grid-container');
topContainer.appendChild(gridContainer);

let gridSize = 16;


function changeColor(square) {
    square.style.backgroundColor = '#535461';
}

function makeGrid() {
    for (let i = 0; i < gridSize; i++) {
        const grid = document.createElement('div');
        grid.classList.add('grid');
        for (let i = 0; i < gridSize; i++) {
            const squareSize = 800 / gridSize;
            const square = document.createElement('div');
            square.classList.add('square');
            square.style.width = `${squareSize}px`;
            square.style.height = `${squareSize}px`;
            square.addEventListener('mouseover', function() {
                changeColor(square);
            });
            grid.appendChild(square);
        }
        gridContainer.appendChild(grid)
    }
}

function makeButtons() {
    const gridButton = document.createElement('button');
    gridButton.innerText = 'Change Size';
    gridButton.addEventListener('click', function() {
        gridSize = parseInt(prompt('Enter a number 1 - 100'));

        if (isNaN(gridSize) || gridSize < 1 || gridSize > 100) {
            alert('Enter number 1 - 100 only.');
        } else {
            while (gridContainer.firstChild) {
                gridContainer.removeChild(gridContainer.firstChild);
            }
    
            makeGrid();
        }
        
    });
    buttonContainer.appendChild(gridButton);
}

// Main Function

makeButtons()
makeGrid()