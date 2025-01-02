
const topContainer = document.querySelector("#top-container");

const buttonContainer = document.createElement('div');
buttonContainer.id = 'button-container';
topContainer.appendChild(buttonContainer);

const gridContainer = document.createElement('div');
gridContainer.classList.add('grid-container');
topContainer.appendChild(gridContainer);

let gridSize = 16;
let randomiseColor = false;


function changeColor(square) {
    if (randomiseColor == false) {
        square.style.backgroundColor = '#535461';
    } else {
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        square.style.backgroundColor = randomColor;
    }
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
        let newGridSize = parseInt(prompt('Enter a number 1 - 100'));

        if (isNaN(newGridSize) || newGridSize < 1 || newGridSize > 100) {
            alert('Enter number 1 - 100 only.');
        } else {
            gridSize = newGridSize;
            while (gridContainer.firstChild) {
                gridContainer.removeChild(gridContainer.firstChild);
            }
    
            makeGrid();
        }
        
    });

    const resetButton = document.createElement('button');
    resetButton.innerText = 'Reset';
    resetButton.addEventListener('click', function() {
            while (gridContainer.firstChild) {
                gridContainer.removeChild(gridContainer.firstChild);
            }

            makeGrid();
        }
    );

    const rgbButton = document.createElement('button');
    rgbButton.innerText = 'Randomise Color';
    rgbButton.addEventListener('click', function() {
        if (randomiseColor == false) {
            randomiseColor = true;
            rgbButton.innerText = 'Black Color';
        } else {
            randomiseColor = false;
            rgbButton.innerText = 'Randomise Color';
        }
    }
);


    buttonContainer.appendChild(gridButton);
    buttonContainer.appendChild(rgbButton);
    buttonContainer.appendChild(resetButton);
}

// Main Function

makeButtons()
makeGrid()