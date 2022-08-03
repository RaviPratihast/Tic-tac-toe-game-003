"use strict";
// selecting all the cell element
const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

/*


*/

const cellElements = document.querySelectorAll(".cell");
// cellElements.forEach((e) => e.classList.add("x"));
let circleTurn;
// console.log(circleTurn);

cellElements.forEach((e) => {
  e.addEventListener("click", handleClick, { once: true });
});

// what ever is going to happen it will happen inside the handleclick function

function handleClick(e) {
  const cell = e.target;
  console.log(cell);
  // console.log(circleTurn.value);

  // as we have not given any value to the circleTurn so it 'undefined' so by default it becomes falsy value.
  const currentClass = circleTurn ? "circle" : "x";
  // console.log(currentClass);

  // place marker on the game box.
  placeMarker(cell, currentClass);

  // check for the win
  if (checkWin(currentClass)) {
    console.log("winner", currentClass);
  }
  // check for the draw
  // switch turns
  switchTurn();
}

// function for the place marker.
function placeMarker(cell, currentClass) {
  cell.classList.add(currentClass);
}

// function for switch turns

function switchTurn() {
  circleTurn = !circleTurn;
}

// check win

function checkWin(currentClass) {
  return WINNING_COMBINATIONS.some((comb) => {
    return comb.every((index) => {
      return cellElements[index].classList.contains(currentClass);
    });
  });
}
