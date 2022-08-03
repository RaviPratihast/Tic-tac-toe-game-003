"use strict";
// selecting all the cell element

const circleClass = "circle";
const xClass = "x";
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
// console.log(WINNING_COMBINATIONS[0].length);
// arrayWinComb(WINNING_COMBINATIONS);
function arrayWinComb(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      console.log(arr[i][j]);
    }
  }
}

const arrXpos = [];
const arrCirclePos = [];

// ****event delegation*****
let circleTurn = true;
// let cellElements;
let cellTarget;

const cellElements = document.querySelectorAll(".cell");

document.querySelector(".board").addEventListener("click", function (e) {
  if (e.target.classList.contains("cell")) {
    const cell = e.target;
    cellTarget = e.currentTarget;

    //   ****checking for the current class for turn****
    const currentClass = circleTurn ? circleClass : xClass;

    //   **** add marker to the game***
    placeMarker(cell, currentClass);

    // *** cellElements and pushing the circle and x in to dedicated arrays for the circle and x***

    pushedValues(cellElements);

    // *****winner******

    winner(currentClass);

    // isDraw;

    // const draw = isdraw();
    // console.log(draw);

    //   ***swapping turn*****
    swapTurn();
  }
});

// --------functions-----------------------------

// ----function for marker----
function placeMarker(cell, currentClass) {
  cell.classList.add(currentClass);
}

// ----swap turn---
function swapTurn() {
  circleTurn = !circleTurn;
}

// ----pushed value-----

function pushedValues(cellElements) {
  cellElements.forEach((element, index) => {
    // console.log(element.classList, index);
    if (element.classList.contains(xClass)) {
      // console.log(index);
      arrXpos.includes(index) ? null : arrXpos.push(index);
    } else if (element.classList.contains(circleClass)) {
      arrCirclePos.includes(index) ? null : arrCirclePos.push(index);
    }
  });
}

// -----winning logics---

// -----winning logic for x-----

function checkXWin(cell, currentClass) {
  return WINNING_COMBINATIONS.some((comb) => {
    return comb.every((elements) => {
      return arrXpos.includes(elements);
      // console.log(elements);
    });
  });
}

// -----winning logic for circle-----
function checkCircleWin(cell, currentClass) {
  return WINNING_COMBINATIONS.some((comb) => {
    return comb.every((elements) => {
      return arrCirclePos.includes(elements);
      // console.log(elements);
    });
  });
}
// -----winning logic for final-----
function winner(currentClass) {
  const winnerVar = checkXWin() || checkCircleWin();
  // console.log(winnerVar, "winner", currentClass);
  if (winnerVar) {
    document.querySelector(
      ".board"
    ).innerHTML = `<div><h1>winner is ${currentClass}😀😀</h1></div>`;
  } else if (!winnerVar && arrCirclePos.length + arrXpos.length === 9) {
    document.querySelector(
      ".board"
    ).innerHTML = `<div><h1>Draw</h1></h1></div>`;
  }
}

// ----draw---

function isdraw() {
  let filledCell = [];
  cellElements.forEach((element, index) => {
    if (
      element.classList.contains(xClass) ||
      element.classList.contains(circleClass)
    ) {
      filledCell.push(index);
    }
  });
  if (filledCell.length === 9) return true;
  return false;
}

// console.log(arrCircle);
