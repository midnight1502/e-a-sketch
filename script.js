const grid = document.querySelector("#grid");

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        grid.appendChild(cell);
    };
};

let clk;

document.querySelectorAll(".cell").forEach(cell => {
  cell.addEventListener("mouseenter", () => {
    cell.style.backgroundColor = "yellow";
  });
  
  cell.addEventListener("mouseleave", () => {
    cell.style.backgroundColor = "#ffffff";
  });
});

const gridResetBtn = document.createElement("button");
gridResetBtn.classList.add("btn");
gridResetBtn.textContent = "Generate a new board";

const body = document.querySelector("body");
body.insertBefore(gridResetBtn, grid);

let boardSqr;

gridResetBtn.addEventListener("click", () => {
  boardSqr = prompt("Enter a number of cells per column between 2 and 100: ", 16);
  boardSqr = parseInt(boardSqr);
  
  if (isNaN(boardSqr) || boardSqr < 2 || boardSqr > 100 ) {
    alert("Please, enter the correct number in the range 2-100");
  } else {
    genGrid(boardSqr);
  }
});

function genGrid(boardSqr) {
  grid.innerHTML = '';
  
  for (let k = 0; k < boardSqr**2; k++) {
    const newCell = document.createElement("div");
    newCell.classList.add("newCell");
    grid.appendChild(newCell);
    
    newCell.style.flex = `0 0 calc(100% / ${boardSqr})`;
    newCell.style.height = `calc(100% / ${boardSqr})`;
  }
  
  document.querySelectorAll(".newCell").forEach(newCell => {
  newCell.addEventListener("mouseenter", () => {
    newCell.style.backgroundColor = "yellow";
  });
  
  newCell.addEventListener("mouseleave", () => {
    newCell.style.backgroundColor = "#ffffff";
  });
});
  
}

