"use strict";

// Buttons
const btnChangeGrid = document.querySelector("#btn-grid");
const btnColor = document.querySelector("#btn-color");
const btnRainbow = document.querySelector("#btn-rainbow");
const btnErase = document.querySelector("#btn-erase");
const btnClear = document.querySelector("#btn-clear");

// Random color
function getRandomColor() {
  return Math.floor(Math.random() * 16777215).toString(16);
}

let gridSquares;

function displayGrid() {
  do {
    gridSquares = prompt("Enter a number between 1 and 100");
  } while (gridSquares < 1 || gridSquares > 100);

  createGrid();
}

const canvasContainer = document.querySelector("#canvas");

function createGrid() {
  // Clear existing grid
  canvasContainer.innerHTML = "";

  // Update grid template
  canvasContainer.style.gridTemplateRows = `repeat(${gridSquares}, 1fr)`;
  canvasContainer.style.gridTemplateColumns = `repeat(${gridSquares}, 1fr)`;

  for (let i = 0; i < gridSquares * gridSquares; i++) {
    let gridSquare = document.createElement("div");
    gridSquare.classList.add("grid-square");
    canvasContainer.appendChild(gridSquare);
  }
  const gridCells = document.querySelectorAll(".grid-square");

  // Adding colors
  btnColor.addEventListener("click", () => {
    gridCells.forEach((cell) => {
      cell.addEventListener("mouseenter", () => {
        cell.style.backgroundColor = "rgba(0, 0, 255, 0.113)";
      });
    });
  });

  // Adding rainbow colors
  btnRainbow.addEventListener("click", () => {
    gridCells.forEach((cell) => {
      cell.addEventListener("mouseenter", () => {
        cell.style.backgroundColor = "#" + getRandomColor();
      });
    });
  });

  // Erase colors
  btnErase.addEventListener("click", () => {
    gridCells.forEach((cell) => {
      cell.addEventListener("mouseenter", () => {
        // cell.classList.add("grid-square-hover");
        cell.style.backgroundColor = "";
      });
    });
  });

  // Clear colors
  btnClear.addEventListener("click", () => {
    gridCells.forEach((cell) => {
      cell.style.backgroundColor = "";
    });
  });
}

displayGrid();
