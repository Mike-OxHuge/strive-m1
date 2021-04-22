console.log("day 9 homework: the bingo game");

let bingoBoard = document.getElementById("bingo-board");
let created = false;
let field;

window.onload = function () {
  for (let i = 1; i <= 76; i++) {
    let bingoCell = document.createElement("div");
    bingoBoard.appendChild(bingoCell);
    bingoCell.classList.add("bingo-cell");
    let cellWithNumber = document.createElement("span");
    cellWithNumber.innerText = i;
    bingoCell.appendChild(cellWithNumber);
  }
};
let playingFields = document.getElementById("playing-fields");

const randomizeNumber = function () {
  let min = 1;
  let max = 77;
  let randomNumber = Math.floor(Math.random() * (max - min) + min);
  //   let spans = document.getElementsByTagName("span");
  let spans = document.querySelectorAll("#bingo-board div span");
  for (let i = 0; i < spans.length; i++) {
    if (Number(spans[i].innerText) === randomNumber) {
      spans[i].classList.add("matching-cell");
    } else {
      spans[i].classList.remove("matching-cell");
    }
  }
  if (created) {
    let fields = document.querySelectorAll("#playing-fields div span");
    for (let i = 0; i < fields.length; i++) {
      if (Number(fields[i].innerText) === randomNumber) {
        fields[i].classList.add("matching-cell");
      }
    }
  }
  //   return randomNumber;
};

const createPlayingField = function () {
  for (let i = 1; i <= 24; i++) {
    let min = 1;
    let max = 77;
    let field = document.createElement("div");
    playingFields.appendChild(field);
    let cell = document.createElement("span");
    field.classList.add("bingo-cell-board");
    cell.innerText = Math.floor(Math.random() * (max - min) + min);
    field.appendChild(cell);
  }
  let button = document.getElementById("creating-button");

  created = true;
  if (created) {
    button.style = "display: none";
  } else {
    button.style = "display: block";
  }
};
