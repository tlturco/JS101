/*
1. Display the initial empty 3x3 board.
2. Ask the user to mark a square.
3. Computer marks a square.
4. Display the updated board state.
5. If it's a winning board, display the winner.
6. If the board is full, display the tie.
7. If neither player won and the board is not full, go to #2.
8. Play again?
9. If yes, go to #1
10. Goodbye!
*/

//set up readline-sync to allow program
//to get user input
const readline = require('readline-sync');

//Markers for each type of square on the board
const INITAL_MARKER = ' ';
let HUMAN_MARKER = 'X';
let COMPUTER_MARKER = 'O';

const WINNING_LINES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9], //rows
  [1, 4, 7], [2, 5, 8], [3, 6, 9], //columns
  [1, 5, 9], [3, 5, 7] //diagonals
];

const GAMES_TO_WIN_MATCH = 5;

let score = {player: 0, computer: 0};


function displayBoard(board) {
  //clear the screen every time we display the board
  console.clear();

  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}.`);

  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}   `);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}   `);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}   `);
  console.log('     |     |');
  console.log('');
}


function prompt(msg) {
  console.log(`=> ${msg}`);
}

function wait(ms) {
  let currentTime = new Date().getTime();
  let end = currentTime + ms;
  while (currentTime < end) {
    currentTime = new Date().getTime();
  }
}

function addVerticalSpace(num = 1) {
  for (let count = 1; count <= num; count++) {
    console.log('');
  }
}

function joinOr(array, punctuation = ', ', conjunction = 'or') {
  if (array.length === 0) {
    return "";
  } else if (array.length === 1) {
    return String(array[0]);
  } else if (array.length === 2) {
    return array.join(` ${conjunction} `);
  } else {
    let copy = array.slice();
    let lastElement = copy.pop();
    let resultString = copy.join(punctuation);

    return `${resultString}${punctuation}${conjunction} ${lastElement}`;
  }
}

function resetScore() {
  score.player = 0;
  score.computer = 0;
}

function initializeBoard() {
  let board = {};
  for (let square = 1; square <= 9; square += 1) {
    board[String(square)] = INITAL_MARKER;
  }
  return board;
}
// valid square choices are those board keys with an empty space
function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITAL_MARKER);
}

function playerChoosesOrder() {
  let options = ['player', 'computer', 'choose'];
  let answer;
  while (true) {
    addVerticalSpace();
    prompt(`Who should go first? Pick one of the following options: ${joinOr(options)}:`);
    answer = readline.question().trim().toLowerCase();
    //exit the loop if it is a valid choice
    if (options.includes(answer)) break;
    prompt("That's not a valid choice.");
  }
  if (answer === 'choose') {
    let randomIndex = Math.floor(Math.random() * 2);
    answer = options[randomIndex];
  }
  addVerticalSpace();
  displayFirstPlayer(answer);
  return answer;
}

function playerChoosesMarker() {
  let options = ['X', 'O'];
  let answer;
  prompt(`Would you like to be X's or O's?`);
  answer = readline.question().trim().toUpperCase();
  //exit the loop if it is a valid choice
  if (!options.includes(answer)) {
    prompt("That's not a valid choice. We will randomly decide.");

    let randomIndex = Math.floor(Math.random() * 2);
    answer = options[randomIndex];
  }
  if (answer === 'X') {
    HUMAN_MARKER = 'X';
    COMPUTER_MARKER = 'O';
  }  else  if (answer === 'O') {
    HUMAN_MARKER = 'O';
    COMPUTER_MARKER = 'X';
  }

  prompt(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}.`);
  return answer;
}


function displayFirstPlayer(firstPerson) {
  if (firstPerson === 'player') {
    prompt('You will go first.');
  } else {
    prompt('The Computer will go first.');
  }
  wait(2000);
}

function alternatePlayer(currentPlayer) {
  switch (currentPlayer) {
    case 'player': return 'computer';
    case 'computer': return 'player';
  }
}
function chooseSquare(board, currentPlayer) {
  if (currentPlayer === 'player') {
    playerChoosesSquare(board);
  } else if (currentPlayer === 'computer') {
    computerChoosesSquare(board);
  }
}

function playerChoosesSquare(board) {
  let square;

  while (true) {
    addVerticalSpace();
    prompt(`Choose a square: ${joinOr(emptySquares(board))}:`);
    square = readline.question().trim(); //input is trimmed for whitespace

    //exit the loop if it is a valid choice
    if (emptySquares(board).includes(square)) break;

    prompt("That's not a valid choice.");
  }

  board[square] = HUMAN_MARKER;
}


function findAtRiskSquare(line, board, marker) {
  let markersInLine = line.map(square => board[square]);

  if (markersInLine.filter(val => val === marker).length === 2) {
    let unusedSquare = line.find(square => board[square] === INITAL_MARKER);
    if (unusedSquare !== undefined) {
      return unusedSquare;
    }
  }

  return  null;
}

function computerOffense(board) {
  let square;
  for (let index = 0; index < WINNING_LINES.length; index++) {
    let line = WINNING_LINES[index];
    square = findAtRiskSquare(line, board, COMPUTER_MARKER);
    if (square) break;
  }
  return square;
}

function computerDefense(board) {
  let square;
  for (let index = 0; index < WINNING_LINES.length; index++) {
    let line = WINNING_LINES[index];
    square = findAtRiskSquare(line, board, HUMAN_MARKER);
    if (square) break;
  }
  return square;
}

function displayComputerMove(square) {
  prompt("It's the computer's turn.");
  addVerticalSpace();
  prompt(`The computer moved to square ${square}.`);
  wait(2000);
}

function computerChoosesSquare(board) {
  let square;
  //if there is a strategic move, pick that square
  square = computerOffense(board) || computerDefense(board);

  //otherwise pick square #5 if it's available
  if (!square && emptySquares(board).includes('5')) {
    square = 5;
  }

  //otherwise, pick a random square
  if (!square) {
    let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
    square = emptySquares(board)[randomIndex];
  }
  displayComputerMove(square);
  board[square] = COMPUTER_MARKER;
}


function boardFull(board) {
  return emptySquares(board).length === 0;
}

function someoneWon(board) {
  return !!detectWinner(board); //a boolean for whether there was a winner detected
}


function detectWinner(board) {

  for (let line = 0; line < WINNING_LINES.length; line++) {
    let [sq1, sq2, sq3] = WINNING_LINES[line];

    if (
      board[sq1] === HUMAN_MARKER &&
      board[sq2] === HUMAN_MARKER &&
      board[sq3] === HUMAN_MARKER
    ) {
      return 'Player';
    } else if (
      board[sq1] === COMPUTER_MARKER &&
      board[sq2] === COMPUTER_MARKER &&
      board[sq3] === COMPUTER_MARKER
    ) {
      return 'Computer';
    }
  }
  return null;
}

function promptNextRound() {
  addVerticalSpace(2);
  prompt('Press Enter/Return to continue...');
  readline.question();
}


while (true) {
  //initial game set up
  playerChoosesMarker();
  let currentPlayer = playerChoosesOrder();
  let board = initializeBoard();


  //loop for each turn
  while (true) {
    displayBoard(board);

    chooseSquare(board, currentPlayer);
    if (someoneWon(board) || boardFull(board)) break;

    currentPlayer = alternatePlayer(currentPlayer);
  }


  //Display result of game
  displayBoard(board);
  if (someoneWon(board)) {
    prompt(`${detectWinner(board)} won!`);
  } else {
    prompt("It's a tie!");
  }

  //keep score
  if (detectWinner(board) === 'Player') {
    score.player += 1;
  } else if (detectWinner(board) === 'Computer') {
    score.computer += 1;
  }
  prompt(`SCORE: PLAYER: ${score.player} COMPUTER: ${score.computer}`);

  if (score.player === GAMES_TO_WIN_MATCH) {
    prompt('Player wins the match! Keep playing to start a new match');
    resetScore();
  } else if (score.computer === GAMES_TO_WIN_MATCH) {
    prompt('Computer wins the match! Keep playing to start a new match');
    resetScore();
  }

  promptNextRound();
  prompt('Would you like to play again? (y or n)');
  let answer = readline.question().trim().toLowerCase()[0];

  while (!['y', 'n'].includes(answer)) {
    prompt('Incorrect input. Please use y or n');
    answer = readline.question().trim().toLowerCase()[0];
  }
  if (answer !== 'y') break;


}

prompt('Thanks for playing Tic Tac Toe!');
prompt("Good Bye!");
wait(2000);
console.clear();