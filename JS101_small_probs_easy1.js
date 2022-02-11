//JS101 - Small Problems Easy 1

//Exercise 1
function isOdd(num) {
  return num % 2 === 1 || num % 2 === -1;
  /*nice solution: 
  return Math.abs(number) % 2 === 1;
  */
}


console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true

//Exercise 2
//Log all odd numbers from 1 to 99, inclusive, to the console, with each number on a separate line.

for (let i = 1; i <= 99; i += 2){
  console.log(i);
}
//make the odd number logger flexible (so you can input the value that it is less than)
function logOddNums(lessThan) {
  let num = 1; 
  while (num < lessThan) {
    console.log(num)
    num +=2;
  }
}

logOddNums(17);



//Exercise 3
//Log all even numbers from 1 to 99, inclusive, to the console, with each number on a separate line.
for (let i = 2; i <= 99; i += 2){
  console.log(i);
}



//Exercise 4 
//Build a program that asks the user to enter the length and width of a room in meters, then logs the area of the room to the console in both square meters and sqare feet. 
let rlSync = require('readline-sync');
let length = rlSync.question("Enter the length of the room in meters\n");
let width = rlSync.question("Enter the width of the room in meters:\n");

console.log(`The area of the room is ${length * width} square meters (${length * width * 10.7639} square feet).`);


//Exercise 5 
//Create a tip calculator

/*this is already defined above so I won't do it again
let rlSync = require('readline-sync');
*/
console.log("What is the bill?");
let billAmount = Number(rlSync.prompt());

console.log("What is the tip percentage?");
let tipPercent = Number(rlSync.prompt());

let tip = (tipPercent / 100) * billAmount; 
let total = billAmount + tip; 

console.log(`The ip is $${tip}`);
console.log(`The total is $${total}`);


//Exercise 6
/*
Write a program that asks the user to enter an integer greater than 0, then asks whether the user wants to determine the sum or the product of all numbers between 1 and the entered integer, inclusive.
*/
let int = Number(rlSync.question("Please enter an integer greater than 0: "));
let sumOrProduct = rlSync.question('Enter "s" to compute the sum, or "p" to compute the product. ');

if (sumOrProduct === 's') {
  //calculate the sum
  let i = 1;
  let sum = 0; 
  while (i <= int) {
    sum = sum + i;
    i++;
  }
  console.log(`The sum of the integers between 1 and ${int} is ${sum}.`);
} else if (sumOrProduct === 'p') {
  let i = 1;
  let product = 1;
  while (i <= int){
    product = product * i; 
    i++;
  }
  console.log(`The product of the integers between 1 and ${int} is ${product}.`)
} else console.log("Error. You did not enter 's' or 'p'");



//Exercise 7
//Write a function that takes two strings as arguments, determines the length of the two strings, and then returns the result of concatenating the shorter string, the longer string, and the shorter string once again. You may assume that the strings are of different lengths.

function shortLongShort(str1, str2) {
  if (str1.length < str2.length) {
    console.log(str1 + str2 + str1);
  } else console.log(str2 + str1 + str2);
}

shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');   


//Exercise 8

function isLeapYear(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0 && year % 400 !== 0) return false;
  return true; 
  } else return false; 
}

//LS solution
/*
function isLeapYear(year) {
  return ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0));
}
*/
isLeapYear(2016);      // true
isLeapYear(2015);      // false
isLeapYear(2100);      // false
isLeapYear(2400);      // true
isLeapYear(240000);    // true
isLeapYear(240001);    // false
isLeapYear(2000);      // true
isLeapYear(1900);      // false
isLeapYear(1752);      // true
isLeapYear(1700);      // false
isLeapYear(1);         // false
isLeapYear(100);       // false
isLeapYear(400);  


//Exercise 9 
//Leap Year pt 2
function isLeapYear2(year) {
  if (year >= 1752) {
    return ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0));
  }
  else return year % 4 === 0;
}


//Exercise 10
function multisum(num) {
  let sum = 0;
  while (num >= 1) {
    if (num % 3 === 0 || num % 5 ===0) {
      sum += num; 
    }
  num -= 1;
  }
  return sum; 
}


//Exercise 11
//UTF-16 String Value

function utf16Value(str) {
  let utf16Value = 0;
  for (let i = 0; i < str.length; i++) {
    utf16Value += str.charCodeAt(i);
  }
  return utf16Value;
}