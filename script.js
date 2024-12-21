// JavaScript - Etch-a-Sketch //
const container = document.querySelector(".container");

// OBJECTIVE - develop function to create 16x16 grid of square divs
// createDivs: loop that will create divs until specified number is reached
function createDivs(num = 256) {
    for (let i = 1; i <= num; i++) {
        const tile = document.createElement("div");
        tile.classList.add("tile");
        container.appendChild(tile);
    }
}

// OBJECTIVE - develop a function that changes the background color of tile when hovered
// mouseDraw: attaches event listener to all .tile class elements, that will change background color on mouseover
function mouseDraw() {
    container.addEventListener("mouseover", (e) => {
        if (e.target.classList.contains("tile")) {
            e.target.style.backgroundColor = "black";
        }
    })

}

createDivs();
mouseDraw();