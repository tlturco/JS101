/* eslint-disable max-statements */
/* eslint-disable max-lines-per-function */
//Exercise 1
function flipSwitch(lightswitches, pass) {
  let result =  lightswitches.map((light, index) => {
    return (index) % pass === 0 ? !light : light;
  });

  return result;
}


function lightsOn(count) {
  let lightswitches = [];
  lightswitches.length = count + 1;
  lightswitches.fill(false, 1);
  for (let pass = 1; pass <= count; pass += 1) {
    lightswitches = flipSwitch(lightswitches, pass);
  }
  let result = [];
  for (let idx = 1; idx <= count; idx += 1) {
    if (lightswitches[idx]) {
      result.push(idx);
    }
  }
  return result;
}


console.log(lightsOn(5));
//[1, 4]

console.log(lightsOn(100));
//[1,  4,  9, 16,  25, 36, 49, 64, 81, 100]

/*
input = the size of the diamond (number of rows and width of rows)
output = undefined, but logs to the console
rules 
row 1 has 1 star 
middle row has n stars 
row n has 1 star 
each row only has odd # of stars 
1 row 1
3 row 2
5 row 3
7 row 4
5 row 5
3 row 6
1 row 7 

loop from 1 to n
log to console every loop 
if row < middle, numStars = 2 * row - 1
if row > middle, numStars = 2*(n - row) + 1
*/

/*1
XX*XX
middle = 3
padStart   
2
X***X 
*/
function formatRow(n, numStars) {
  let stars = '*'.repeat(numStars);
  let padding = (n - numStars) / 2;
  return stars.padStart(padding + numStars, ' ');
}

function calculateNumStars(n, rowNumber) {
  let middle = Math.ceil(n / 2);
  if (rowNumber <= middle) {
    return (2 * rowNumber - 1);
  } else {
    return (2 * (n - rowNumber) + 1);
  }
}

function diamond(n) {
  for (let rowNumber = 1; rowNumber <= n; rowNumber += 1) {
    let numStars = calculateNumStars(n, rowNumber);
    console.log(formatRow(n, numStars));
  }
}

diamond(1);
diamond(3);
diamond(9);

function isBlockWord(word) {
  let blocks = ['BO', 'XK', 'DQ', 'CP', 'NA', 'GT', 'RE', 'FS', 'JW', 'HU', 'VI', 'LY', 'ZM'];

  let letters = word.toUpperCase().split("");
  for (let i = 0; i < letters.length; i++) {
    let letter = letters[i];


    let indexOfBlock = blocks.findIndex(block => block.includes(letter));

    //if the block with the letter isn't available
    if (indexOfBlock === -1) {
      return false;
    }
    //if it is, remove the block
    blocks.splice(indexOfBlock, 1);
  }

  //if all the blocks are available
  return true;
}

//test cases
console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord('floW'));       // true
console.log(isBlockWord('APPLE'));      // false
console.log(isBlockWord('apple'));      // false
console.log(isBlockWord('apPLE'));      // false
console.log(isBlockWord('Box'));        // false


function star(size) {
  let middleIdx = Math.floor(size / 2);
  //top rows
  for (let rowNumber = 0; rowNumber < middleIdx; rowNumber++) {
    let stars = ['*', '*', '*'];
    let numSpaces = ((size - 3) / 2) - rowNumber;
    let spaces = ' '.repeat(numSpaces);
    let row = stars.join(spaces);
    let padding = ' '.repeat(rowNumber);
    console.log(padding + row);
  }
  //middle row
  console.log('*'.repeat(size));
  let iteration = 0;
  //bottom rows
  for (let rowNumber = middleIdx + 1; rowNumber < size; rowNumber++) {
    let stars = ['*', '*', '*'];
    let spaces = ' '.repeat(iteration);
    let row = stars.join(spaces);
    let numSpaces = ((size - 3) / 2) - iteration;
    let padding = ' '.repeat(numSpaces);
    console.log(padding + row);
    iteration += 1;
  }
}

star(7);
star(9);
star(13);