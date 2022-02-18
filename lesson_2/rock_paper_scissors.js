// 1. ask the user for their move
// 2. computer will choose their move
// 3. display the result

const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'spock', 'lizard'];
const SHORTENED_CHOICES = {
  r : 'rock',
  p : 'paper',
  sc : 'scissors',
  sp : 'spock',
  l : 'lizard'
};
const WINNING_COMBOS = {
  rock: ['scissors', 'lizard'],
  paper: ['rock', 'spock'],
  scissors: ['paper', 'lizard'],
  lizard: ['paper', 'spock'],
  spock: ['rock', 'scissors']
};

let numberOfWins = 0;
let numberOfLosses = 0;

function prompt(msg) {
  console.log( `=> ${msg}`);
}

function evaluateShortenedInput(userChoice) {
  let firstLetterOfChoice = userChoice[0];
  if (firstLetterOfChoice === 's') {
    firstLetterOfChoice = userChoice[0] + userChoice[1];
  }
  //reassign the choice variable to the full length value
  return SHORTENED_CHOICES[firstLetterOfChoice];
}

function playerWins(choice, otherPlayersChoice) {
  return WINNING_COMBOS[choice].includes(otherPlayersChoice);
}

function bestOfFive(choice, computerChoice) {
  let grandWinner;
  if (playerWins(choice, computerChoice)) {
    numberOfWins += 1;
    if (numberOfWins === 3) {
      grandWinner = 'you';
    }
  } else if (playerWins(computerChoice, choice)) {
    numberOfLosses += 1;
    if (numberOfLosses === 3) {
      grandWinner =  'computer';
    }
  } else {
    grandWinner =  null;
  }
  return grandWinner;
}

function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice}, and the computer chose ${computerChoice}`);
  if (playerWins(choice, computerChoice)) {
    prompt('You win!');
  } else if (choice === computerChoice) {
    prompt("It's a tie!");
  } else {
    prompt("Computer wins!");
  }
}


while (true) {

  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question();
  choice = evaluateShortenedInput(choice);


  while (!VALID_CHOICES.includes(choice)) {
    prompt("That is not a valid choice. Please try again.");
    choice = readline.question();
    choice = evaluateShortenedInput(choice);
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  displayWinner(choice, computerChoice);

  let grandWinner = bestOfFive(choice, computerChoice);
  if (grandWinner) {
    prompt(`GRAND WINNIER!!! ${grandWinner.toUpperCase()} WON BEST OUT OF FIVE GAMES.`);
    break;
  }

  prompt("Would you like to play again? (y/n)");
  let answer = readline.question().toLowerCase();

  while (answer[0] !== 'y' && answer[0] !== 'n') {
    prompt("Please answer 'y' or 'n'");
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== 'y') break;
}