let cells = document.querySelectorAll("td");
let result = document.getElementById("result");
let newGameButton = document.getElementById("newGame");
let scoreX = document.getElementById("scoreX");
let scoreO = document.getElementById("scoreO");
let gameTurn = 0;
let isPlaying = true;
let tour = document.getElementById("tour");

const win = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const start = () => {
  for (let cell of cells) {
    cell.addEventListener("click", function step() {
      if (isPlaying) {
        cell.textContent = ["X", "O"][gameTurn % 2];
        cell.removeEventListener("click", step);
      }
      victory();
      gameTurn = gameTurn + 1;
      tour.innerHTML = gameTurn;
    });
  }
};

const victory = () => {
  for (let i = 0; i < win.length; i++) {
    const arr = win[i];
    if (
      cells[arr[0]].textContent &&
      cells[arr[0]].textContent === cells[arr[1]].textContent &&
      cells[arr[0]].textContent === cells[arr[2]].textContent
    ) {
      if (cells[arr[0]].textContent === "X") {
        isPlaying = false;
        result.innerHTML = "Player X won!";
        scoreX.textContent = Number(scoreX.textContent) + 1;
      } else {
        isPlaying = false;
        result.innerHTML = "Player O won!";
        scoreO.textContent = Number(scoreO.textContent) + 1;
      }
      console.log(isPlaying);
    }
  }
};

const newGame = () => {
  for (let cell of cells) {
    cell.textContent = "";
  }
  gameTurn = 0;
  result.innerHTML = "";
  isPlaying = true;
  start();
};

newGameButton.addEventListener("click", newGame);

newGame();
