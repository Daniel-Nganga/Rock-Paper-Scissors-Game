const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const resetBtn = document.getElementById("reset");
const player = document.getElementById("photo");
const compDispaly = document.getElementById("compDispaly");
const resultDisplay = document.getElementById("result");
const win = document.getElementById("win");
const lost = document.getElementById("lose");
let array = ["stone.png", "paper.png", "scissors.png"];
let compIcon;
let computerSelect;
let result;
let userselect;
let wincount = 0;
let loosecount = 0;
// function to get user move
function usermove(section) {
  userselect = section;
  computerMove();
  //tie logic ,winning logic , and loose
  if (computerSelect === userselect) {
    result = "Tie";
  } else if (
    (computerSelect === rock && userselect === paper) ||
    (computerSelect === paper && userselect === scissors) ||
    (computerSelect === scissors && userselect === rock)
  ) {
    result = "You win!";
    wincount++;
  } else {
    result = "You loose!!";
    loosecount++;
  }
  updateDisplay();
}
//computer move
const computerMove = () => {
  const randomNumber = Math.random();
  if (randomNumber < 0.3) {
    computerSelect = rock;
    compIcon = array[0];

    return rock;
  } else if (randomNumber < 0.6) {
    computerSelect = paper;
    compIcon = array[1];

    return paper;
  } else {
    computerSelect = scissors;
    compIcon = array[2];
  }
};
function updateDisplay() {
  let picImage = document.getElementById("photo");
  picImage.innerHTML = "";

  let photo = document.createElement("img");
  photo.src = compIcon;
  picImage.appendChild(photo);
  resultDisplay.style.color = "maroon";
  resultDisplay.textContent = `RESULT: ${result}`;
  win.textContent = `WIN:${wincount}`;
  lost.textContent = `LOST:${loosecount}`;
}

function resetButton() {
  let picImage = document.getElementById("photo");
  picImage.innerHTML = "";
  resultDisplay.style.color = "black";
  resultDisplay.textContent = `RESULT:`;
  win.textContent = `WIN:${(wincount = 0)}`;
  lost.textContent = `LOST:${(loosecount = 0)}`;
}
resetBtn.addEventListener("click", resetButton);
