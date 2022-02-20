//Exercise 1
//How old is Teddy?
//Randomly generate a number between 20 and 120
//Log this to the console

//generate a number between 1 and 120
let randomNum = Math.ceil(Math.random() * 120);

//keep generating numbers if the random # is less than 20
while (randomNum < 20) {
  randomNum = Math.ceil(Math.random() * 120);
}

console.log(`Teddy's age is ${randomNum}`);


/* Launch School Solution
function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let age = randomBetween(20, 120);
console.log(`Teddy is ${age} years old!`);
*/

//Exercise 2
//Searching 101

//Ask users for all the numbers
//push nums 1 -5 to an array
//see if that array includes the last number
//log the result to the console

let readline = require('readline-sync');
let numbers = [];

numbers.push(readline.question("Enter the 1st number: "));
numbers.push(readline.question("Enter the 2nd number: "));
numbers.push(readline.question("Enter the 3rd number: "));
numbers.push(readline.question("Enter the 4th number: "));
numbers.push(readline.question("Enter the 5th number: "));

let lastNum = readline.question("Enter the last number: ");

if (numbers.includes(lastNum)) {
  console.log(`The number ${lastNum} appears in ${numbers.join(", ")}.`);
} else {
  console.log(`The number ${lastNum} does not appear in ${numbers.join(", ")}.`);
}

//Exercise 3
//WHen will I retire?
//Ask the user how old they are and what age they'd like to retire

let age = Number(readline.question("What is your age? "));
let retirementAge = Number(readline.question("At what age would you like to retire? "));

let yearsToRetirement = retirementAge - age;
let currentYear = new Date().getFullYear();
let retirementYear = currentYear + yearsToRetirement;

console.log(`It's ${currentYear}. You will retire in ${retirementYear}. \nYou only have ${yearsToRetirement} years of work to go!`);

//Exercise 4 and 5
//Palindromic Strings
//(part 1): case sensitive
//(part 2): case insenstive & ignores special characters

function isPalindrome(str) {
  let reverseStr = str.split("").reverse().join("");
  return (str === reverseStr);
}

function isRealPalindrome(str) {
  str = str.toLowerCase();
  str = str.replace(/([^a-z0-9])/gi, "");
  let reverseStr = str.split("").reverse().join("");
  return (str === reverseStr);
}

//Exercise 6
//Palindromic Numbers
function isPalindromicNumber(num) {
  let str = num.toString();
  return isRealPalindrome(str);
}

console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true


//Exercise 7
//Running total

function runningTotal(arr) {

  let runningTotalArr = [];
  let sum = 0;

  for (let index = 0; index < arr.length; index += 1) {
    runningTotalArr.push((sum += arr[index]));
  }
  return runningTotalArr;
}

console.log(runningTotal([2, 5, 13]));
console.log(runningTotal([14, 11, 7, 15, 20]));
console.log(runningTotal([3]));
console.log(runningTotal([]));

//Exercise 8 & 9
//Letter Counter (Part 1)

function wordSizes(str) {
  if (str === '') return {};
  str = str.replace(/([^a-z\s])/gi, "");
  let arr = str.split(' ');
  let wordLength = arr.map(word => word.length).sort();

  let resultObj = {};
  wordLength.forEach((length) => {
    resultObj[length] = (resultObj[length] || 0) + 1;
  });
  return resultObj;
}

console.log(wordSizes('Four score and seven.'));
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));
console.log(wordSizes("What's up doc?"));
console.log(wordSizes(''));


//Exercise 10
//Letter Swap
//Swap the first and last letter of every word

//create an array of words by splitting on spaces
//use a for each loop to look at each individual word


function swap(str) {
  let words = str.split(" ");
  let swappedWords = [];
  words.forEach(word => {
    let letters = word.split("");
    let firstLetter = letters[0];
    let lastLetter = letters[letters.length - 1];

    letters[0] = lastLetter;
    letters[letters.length - 1] = firstLetter;

    //LS WAY:
    //word[word.length - 1] + word.slice(1, -1) + word[0];

    swappedWords.push(letters.join(""));
  });

  return swappedWords.join(" ");

}

console.log(swap('Oh what a wonderful day it is'));
console.log(swap('Abcde'));
console.log(swap('a'));
