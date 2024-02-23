const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const ResetBtn = document.getElementById("reset");
const player = document.getElementById("playerDispaly");
const compDispaly = document.getElementById("compDispaly");
const resultDisplay = document.getElementById("result");

let computerSelect;
let result;
let userselect;
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
  } else {
    result = "You loose!!";
  }
  updateDisplay();
}
//computer move
const computerMove = () => {
  const randomNumber = Math.random();
  if (randomNumber < 0.3) {
    computerSelect = rock;

    return rock;
  } else if (randomNumber < 0.6) {
    computerSelect = paper;

    return paper;
  } else {
    computerSelect = scissors;

    return scissors;
  }
};
function updateDisplay() {
  player.textContent = `PLAYER: ${userselect.alt}`;
  compDispaly.textContent = `COMPUTER: ${computerSelect.alt}`;
  resultDisplay.textContent = `RESULT: ${result}`;
}
