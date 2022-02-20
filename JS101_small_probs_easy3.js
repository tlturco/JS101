//Exercise 1
//function that removes all consecutive duplicate characters
function crunch(string) {
  let crunchText = '';
  let index = 0;

  while (index < string.length) {
    if (string[index] !== string[index + 1]) {
      crunchText += string[index];
    }
    index += 1;
  }
  return crunchText;
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""

//Exercise 2
//Write a function that will take a short line of text
//and write it to the console log within a box

function logInBox(str) {
  let width = str.length + 2;
  let topOrBottom = '+' + '-'.repeat(width) + '+';
  let side = '|'.padEnd(width + 1, " ") + "| \n";
  let text = '| ' + str + ' |\n';
  let box = topOrBottom + '\n' + side  + text + side +  topOrBottom;
  console.log(box);
}

logInBox('To boldly go where no one has gone before.');
logInBox('');
logInBox('Teresa, you are brilliant.');


//Exercise 3
//write a function that returns a string
//of alternating 1s and 0s of the specified length

function stringy(int) {
  let str = '';
  while (str.length < int) {
    let number = ((str.length % 2) === 0) ? 1 : 0;
    str += number;
  }

  return str;
}

console.log(stringy(6));
console.log(stringy(9));
console.log(stringy(4));
console.log(stringy(7));


//exercise 4
//fibonacci number location by length

function fibonacci(number) {
  if (number < 2) return number; //0 if num is 0 and 1 if number is 1
  return fibonacci(number - 1) + fibonacci(number - 2);
}

function findFibonacciIndexByLength(index) {
  function numberOfDigits(number) {
    return number.toString().length;
  }

  let num = 2;
  while (numberOfDigits(fibonacci(num)) <= index) {
    if (numberOfDigits(fibonacci(num)) === index) {
      return num;
    }
    num += 1;
  }
}

/*Launch School Solution
function findFibonacciIndexByLength(length) {
  let first = 1n;
  let second = 1n;
  let count = 2n;
  let fibonacci;

  do {
    fibonacci = first + second;
    count += 1n;
    first = second;
    second = fibonacci;
  } while (String(fibonacci).length < length);

  return count;
}*/

console.log(findFibonacciIndexByLength(2));
console.log(findFibonacciIndexByLength(3));


//Exercise 5
//create a function that creates a right triangle whose sides have n *
function triangle(numStars) {
  let triangle = "";
  let index = 1;
  while (index <= numStars) {
    let starsToAdd = "*".repeat(index);
    triangle += starsToAdd.padStart(numStars) + '\n';
    index++;
  }
  console.log(triangle);
}

triangle(7);


//Exercise 6
//Madlibs
let readline = require('readline-sync');
let noun = readline.question("Enter a noun:\n");
let verb = readline.question("Enter a verb:\n");
let adjective = readline.question("Enter an adjective:\n");
let adverb = readline.question("Enter an adverb:\n");

let story = `The ${adjective} ${noun} loves to ${verb} ${adverb}!`;
console.log(story);

//Exercise 7
//Double Doubles

function twice(num) {
  let numString = num.toString();

  let isEvenLength = numString.length % 2 === 0; //this will return true or false if its an even length number
  let leftSideDigits = numString.slice(0, (numString.length / 2));
  let rightSideDigits = numString.slice((numString.length / 2));

  if (isEvenLength && (leftSideDigits === rightSideDigits)) {
    return num;
  } else return num * 2;
}

console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676

//Exercise 8
//Grade Book
//calculate the mean of the 3 scores
//return a letter grade

function getGrade(grade1, grade2, grade3) {
  let meanScore = (grade1 + grade2 + grade3) / 3;

  if (meanScore >= 90) return 'A';
  else if (meanScore >= 80) return 'B';
  else if (meanScore >= 70) return 'C';
  else if (meanScore >= 60) return 'D';
  else return 'F';
}

console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D")

//Exercise 9
//Clean Up the Words
//replace any non-alphabetic characters with spaces

function cleanUp(str) {
  const specialCharRegex = /([^a-z])/gi;
  const multiSpacesRegex = /\s{2,}/gi;
  let newString = str.replace(specialCharRegex, " ").replace(multiSpacesRegex, " ");
  return newString;
}

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "

//Exercise 10
//What Century is that?

function century(year) {
  let century = String(Math.ceil(year / 100));
  //11th, 12th, and 13th centuries break the ending rules
  if (['11', '12', '13'].includes(century.slice(century.length - 2))) return century + 'th';

  //generic ending rules
  switch (century[century.length - 1]) {
    case '1': return century + 'st';
    case '2': return century + 'nd';
    case '3': return century + 'rd';
    default: return century + 'th';
  }
}

console.log(century(2000));
console.log(century(2001));
console.log(century(1965));
console.log(century(256));
console.log(century(5));
console.log(century(10103));
console.log(century(1052));
console.log(century(1127));