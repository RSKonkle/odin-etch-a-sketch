// JavaScript - Etch-a-Sketch //
const container = document.querySelector(".container");

// createDivs: loop that will create divs until specified number is reached
function createDivs(gridSize = 16) {
    container.innerHTML = "";

    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

    for (let i = 1; i <= gridSize * gridSize; i++) {
        const tile = document.createElement("div");
        tile.classList.add("tile");
        container.appendChild(tile);
    }
}

// mouseDraw: attaches event listener to all .tile class elements, that will change background color on mouseover
function mouseDraw() {
    container.addEventListener("mouseover", (e) => {
        if (e.target.classList.contains("tile")) {
            e.target.style.backgroundColor = "black";
        }
    })

}

// newGrid: will resize grid based on user input for pixel count, clearing old grid
function newGrid() {
    let newSize = parseInt(prompt("Enter the number of squares per side for the new grid:"))
    if (isNaN(newSize) || newSize < 1 || newSize > 100) {
        alert("Please enter a number between 1 and 100.");
        return;
    }

    createDivs(newSize);
}

createDivs();
mouseDraw();

const button = document.querySelector("button");
button.addEventListener("click", newGrid);