console.log("day 9 homework: the bingo game");

let bingoBoard = document.getElementById("bingo-board");

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

const randomizeNumber = function () {
  let randomNumber = Math.floor(Math.random() * 76);
  let spans = document.getElementsByTagName("span");
  for (let i = 0; i < spans.length; i++) {
    if (Number(spans[i].innerText) === randomNumber) {
      spans[i].classList.add("matching-cell");
    } else {
      spans[i].classList.remove("matching-cell");
    }
  }
};
