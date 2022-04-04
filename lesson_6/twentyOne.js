//TWENTY ONE

/*
1. Initialize deck
2. Deal cards to player and dealer
3. Player turn: hit or stay
  -repeat until bust or stay
4. If player busts, dealer wins
5. Dealter turn: hit or stay
  -repeat until total >= 17
6. If dealer busts, player wins.
7. Compare cards and declare winner
*/

//set up readline-sync to allow program
//to get user input
const readline = require('readline-sync');

const GOAL_VALUE = 21;
const MIN_DEALER_VALUE = 17;

const FACE_CARDS = ['J', 'Q', 'K'];
const FACE_CARD_VALUE = 10;
let deck = [];
let players = {
  player: {name: 'your', hand: [], score: 0},
  dealer: {name: "the dealer's", hand: [], score: 0}
};
let keepScore = false;


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

function validateInputYesNo(answer) {
  while (!['y', 'yes', 'n', 'no'].includes(answer)) {
    prompt('Incorrect input. Please use y or n.');
    answer = readline.question().trim().toLowerCase();
  }
}

function initializeDeck() {
  //hearts, diamonds, spades, clubs
  let suits = ['H', 'D', 'S', 'C'];
  let cardValues = ['2', '3', '4', '5', '6', '7', '8','9', '10', 'J', 'Q', 'K', 'A'];
  suits.forEach(suit => {
    cardValues.forEach(value => {
      deck.push([suit, value]);
    });
  });
}


function shuffle(deck) {
  for (let index = deck.length - 1; index > 0; index--) {
    let randomIndex = Math.floor(Math.random() * (index + 1));
    //swap elements
    [deck[index], deck[randomIndex]] = [deck[randomIndex], deck[index]];
  }
}

function setUpGame() {
  //start over
  deck = [];
  players.dealer.hand = [];
  players.player.hand = [];
  wait(2000);
  console.clear();
  initializeDeck();
  shuffle(deck);
  prompt("Shuffling the deck and dealing the cards...");
  wait(1000);
  dealCard('player', 2);
  dealCard('dealer', 2);
}

function dealCard(player, numberOfCards = 1) {
  while (numberOfCards > 0) {
    if (player === 'player') {
      let newCard = deck.pop();
      prompt(`The card you are dealt is: ${displayCard(newCard)}`);
      players.player.hand.push(newCard);
    } else if (player === 'dealer') {
      players.dealer.hand.push(deck.pop());
    }
    numberOfCards -= 1;
  }
}

function displayCard(card) {
  let suits = {
    H: 'Hearts',
    D: 'Diamonds',
    C: 'Clubs',
    S: 'Spades'
  };
  let faceCards = {
    J: 'Jack',
    Q: 'Queen',
    K: 'King',
    A: 'Ace'
  };
  let value = card[1];
  if (FACE_CARDS.includes(value)) {
    value = faceCards[value];
  }
  return (value + ' of ' + suits[card[0]]);
}

// eslint-disable-next-line max-lines-per-function
function displayHand(player, hand, visible = false) {
  addVerticalSpace();
  if (player === 'player') {
    prompt('Your cards are:');
    hand.forEach(card => {
      console.log(displayCard(card));
    });
    prompt(`The total value of your hand is ${calculateValueOfHand(hand)}`);
  } else if (player === 'dealer' && visible === true) {
    prompt("The dealer's cards are:");
    hand.forEach(card => {
      console.log(displayCard(card));
    });
    prompt(`The total value of the dealer's hand is ${calculateValueOfHand(hand)}`);
  } else {
    prompt("The dealer's cards are:");
    let visibleCard = hand[0];
    let numHiddenCards = hand.slice(1).length;
    console.log(displayCard(visibleCard));
    console.log(`And ${numHiddenCards} hidden card(s).`);
  }
}
function calculateValueOfHand(hand) {

  let valueOfHand = hand.reduce((sum, card) => {
    let cardValue = card[1];
    if (cardValue === 'A') {
      cardValue = 11;
    } else if (FACE_CARDS.includes(cardValue)) {
      cardValue = FACE_CARD_VALUE;
    }
    return sum + Number(cardValue);
  }, 0);

  hand.filter(card => card[1] === 'A').forEach(_ => {
    if (valueOfHand > GOAL_VALUE) valueOfHand -= 10;
  });
  return valueOfHand;
}


function dealerHitOrStay(hand) {
  let valueOfHand = calculateValueOfHand(hand);
  let decision;
  if (valueOfHand >= MIN_DEALER_VALUE) {
    decision = 'stay';
  } else decision = 'hit';

  //display decision
  addVerticalSpace();
  prompt(`Dealer decision: ${decision}`);

  //reformat the answer to match user input
  return decision[0];
}


function playerHitOrStay() {
  let validAnswers = ['h', 'hit', 's', 'stay'];

  addVerticalSpace();
  prompt("Hit or Stay?");
  let answer = readline.question().trim().toLowerCase();

  while (!validAnswers.includes(answer)) {
    prompt("Invalid Input. Please enter 'hit' or 'stay.'");
    answer = readline.question().trim().toLowerCase();
  }

  //standardize the format of the user input
  return answer[0];
}

function hitOrStay(player, hand) {
  if (player === 'player') {
    return playerHitOrStay();
  } else {
    return dealerHitOrStay(hand);
  }
}

function busted(hand) {
  return calculateValueOfHand(hand) > GOAL_VALUE;
}

function displayEndingHands() {
  console.log('==============');
  prompt('FINAL SCORE:');
  displayHand('dealer', players.dealer.hand, true);
  addVerticalSpace(1);
  displayHand('player',players.player.hand );
  console.log('==============');

}
// eslint-disable-next-line max-lines-per-function
function displayWinner() {
  let playerScore = calculateValueOfHand(players.player.hand);
  let dealerScore = calculateValueOfHand(players.dealer.hand);
  if (busted(players.player.hand)) {
    prompt(`BUST! Your hand is over ${GOAL_VALUE}.`);
    prompt('Dealer wins!');
    players.dealer.score += 1;
  } else if (busted(players.dealer.hand)) {
    prompt(`BUST! The dealer's hand is over ${GOAL_VALUE}.`);
    prompt('You win!');
    players.player.score += 1;
  } else if (playerScore > dealerScore) {
    prompt('You win!');
    players.player.score += 1;
  } else if (playerScore < dealerScore) {
    prompt('Dealer wins!');
    players.dealer.score += 1;
  } else {
    prompt("It's a tie!");
  }
}


function displayScore() {
  prompt('NUMBER OF GAMES WON:');
  prompt(`You: ${players.player.score}`);
  prompt(`The dealer: ${players.dealer.score}`);
}

function bestOfFive() {
  if (players.player.score === 5) {
    return 'You';
  } else if (players.dealer.score === 5) {
    return 'The dealer';
  } else {
    return null;
  }
}

function playAgain() {

  prompt('Would you like to play again? (y or n)');
  let answer = readline.question().trim().toLowerCase();
  validateInputYesNo(answer);

  return answer[0];
}

//         -----------------Start of Game ----------------------------------


console.clear();
prompt('Welcome to the game! Get ready to play twenty one!');
addVerticalSpace(2);

prompt('Would you like to keep score of how many games you win?');
let answer = readline.question().trim().toLowerCase();
validateInputYesNo(answer);

prompt("Okay!");

if (answer[0] === 'y') {
  keepScore = true;
}

addVerticalSpace(2);
//GAME LOOP
while (true) {

  setUpGame();

  //Each Player's Turn
  Object.keys(players).forEach(player => {

    //skip the dealer's turn if the player busted
    if (busted(players["player"].hand)) {
      return; // emulating JavaScript forEach continue statement
    }
    addVerticalSpace(2);
    prompt(`It's ${players[player].name} turn.`);
    wait(1000);

    while (true) {
      displayHand(player, players[player].hand);
      wait(2000);

      //turn ends if player stays
      let decision = hitOrStay(player, players[player].hand);
      if (decision === 's') break;

      //otherwise deal player a new card
      dealCard(player);

      //turn ends if player busts
      if (busted(players[player].hand)) break;

      wait(2000);
    }
  });

  //Display results
  addVerticalSpace(2);
  wait(2000);
  displayEndingHands();

  addVerticalSpace(2);
  wait(2000);
  displayWinner();

  addVerticalSpace(2);
  wait(2000);
  if (keepScore === true) {
    console.log('==============');
    displayScore();
    let matchWinner = bestOfFive();
    if (matchWinner) {
      prompt(`${matchWinner} won the match!`);
      addVerticalSpace(2);
      wait(2000);
      break;
    }
    console.log('==============');
    wait(2000);
    addVerticalSpace(2);
  }


  if (playAgain() !== 'y') break;

}

prompt("Thanks for playing!");