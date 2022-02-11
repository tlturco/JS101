

//Exercise 1
//Welcome Stranger

function greetings(nameArray, jobObject) {
  let name = nameArray.reduce((previousValue, currentValue) => previousValue + ' ' + currentValue)
  let job = jobObject.title + ' ' + jobObject.occupation;

  console.log(`Hello, ${name}! Nice to have a ${job} around.`);
}

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.


//LS Solution:  use join instead of reduce and return instead of console.log()
/*
function greetings(name, status) {
  return `Hello, ${name.join(" ")}! Nice to have a ${status["title"]} ${
    status["occupation"]
  } around.`;
}
*/


//Exercise 2 
//Greeting a user
let rlSync = require('readline-sync');
let name = rlSync.question("What is your name?\n");
if (name.includes('!')) {
  name = name.slice(0, -1);
  console.log(`HELLO ${name.toUpperCase()}. WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello, ${name}!`);
}



//Exercise 3

function multiply(x, y) {
  return x * y;
}

console.log(multiply(5, 3) === 15); // logs true

//Exercise 4

function square(x) {
  return multiply(x, x);
}

console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true


//Exercise 5
let number1 = Number(rlSync.question("Enter the first number:\n"));
let number2 = Number(rlSync.question("Enter the second number:\n"));

console.log(`${number1} + ${number2} =  ${number1 + number2}`);

console.log(`${number1} - ${number2} = ${number1 - number2}`);
console.log(`${number1} * ${number2} = ${number1 * number2}`);
console.log(`${number1} / ${number2} = ${number1 / number2}`);
console.log(`${number1} % ${number2} = ${number1 % number2}`);
console.log(`${number1} ** ${number2} = ${number1 ** number2}`);

//Exercise 6
function penultimate(str) {
  words = str.split(" ");
  return words[words.length - 2];
}

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true


//Exercise 7
//return true of only 1 of 2 conditions is true
function xor(thing1, thing2) {
  if(!thing1 && !thing2) return false;
  else if (thing1 && thing2) return false;
  else if (thing1 || thing2) return true;
  else console.log("WHAT.")
}

//LS's Nice solution: 
/*
function xor(thing1, thing2) {
  if ((thing1 && !thing2) || (!thing1 && thing2)) return true;
  else return false; 
}
*/
console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);


//Exercise 8
function oddities(array) {
  oddElements = []
  for (let i = 0; i < array.length; i+= 2){
    oddElements.push(array[i]);
  }
  return oddElements;
}
console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []

//Exercise 9
function stringToInteger(str) {
  let arr = []
  for (let i = 0; i < str.length; i++)
    for (let j = 0; j <= 9 ; j++)
      if (str[i] == j) {
        arr.push(j);
      }
  return +arr.join("");
}
console.log(stringToInteger("4321"));
console.log(stringToInteger("570"));
console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true



//Exercise 10
function stringToSignedInteger(string) {
  let moderator; 
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9
  };
  if (string.startsWith('-') || string.startsWith('+')) {
    moderator = string.slice(0, 1) //slice off the fist thing
    string = string.slice(1);
  }

  let arrayOfDigits = string.split("").map(char => DIGITS[char]);
  let value = 0;
  arrayOfDigits.forEach(digit => (value = (10 * value) + digit));
  if (moderator === '-') {
    value *= -1;
  }
  return value;
}
console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true

//Exercise 11
const DIGITS = ['0', '1' ,'2', '3', '4', '5', '6', '7', '8', '9']; //an array that works like an object dictionary, but the keys are integers (0 index = 1)
function integerToString(number) {
  let result = '';
  do {
    remainder = number % 10; //gets the digit in the ones place
    number = Math.floor(number / 10); //lops off the last digit and returns the number without the ones place

    result = DIGITS[remainder] + result;  //DIGITS[remainder] uses the remainder as the index in the array above to return the right value as a string. then you concatenate this in front of the existing result
  } while (number > 0);

  return result; 
}

//Exercise 12

function signedIntegerToString(number) {
  switch(Math.sign(number)){
    case 1 : return '+' + integerToString(number);
    case -1 : return '-' + integerToString(-number);
    default: return integerToString(number); 
  }
}

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");

console.log(signedIntegerToString(-123));