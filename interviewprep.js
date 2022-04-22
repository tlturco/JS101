let rlSync = require('readline-sync');
//iterate string creating a substring
//check if the length of the string is a multiple of the substring 
  //(if no, skip the rest of the iteration)
//repeat the substring so it's as long as the string
//check if the repeated substring equals the string (if yes return true)
//iterate through again, adding the next character to the substring
/*
function repeatedSubstringPattern(str) {
  let substring = '';

  for (let i = 0; i < str.length - 1; i++) {
    substring += str[i];
    if (str.length % substring.length !== 0) {
      continue;
    }
    let timesToRepeat = str.length / substring.length;
    let repeatedSub = substring.repeat(timesToRepeat);
    if (repeatedSub === str) {
      return true;
    }
  }
  return false;
}

console.log(repeatedSubstringPattern('abab'));

console.log(repeatedSubstringPattern('aba'));


//isOdd
//input  = Number
//output = boolean
//return number remainder 2 = 1

function isOdd(num) {
  num =  Math.abs(num);
  return num % 2 === 1;
}

//log all odd numbers from 1 to 99
for (let num = 1; num <= 99; num += 2) {
  console.log(num);
}


//log all even numbers from 1 to 99
for (let num = 2; num <= 99; num += 2) {
  console.log(num);
}

//import readline
//ask the user for the length
//ask the user for the width
//multiply the length * width
//log the output 
/*

let length = Number(rlSync.question("Enter the length of the room in meters: \n"));
let width = Number(rlSync.question("Enter the width of the room in meters: \n"));
let sqMeters = length * width;
let sqFeet = sqMeters * 10.7639;
console.log(`The area of the room is ${sqMeters} square meters (${sqFeet} square feet).`);
*/

// input an array of numbers 
// output is an array of numbers (same length as input)
// rules: for each # count the numbers in the array that are smaller 
// when counting, only count unique values 

// create a new array that only has unique values & sort it 
// map existing array (to create a new array)
//   mapped value is the index of the number in the uniquesorted array 
/*
let test = [8, 1, 2, 2, 3];


  function uniqueSorted(arr) {
    let sortedArr = arr.slice().sort((a, b) => a - b);
    let unique = [];
    sortedArr.forEach(num => {
      if (!unique.includes(num)) {
        unique.push(num);
      }
    });
    return unique;
  }



  function smallerNumbersThanCurrent(arr) {
    let uniqueSortedArray = uniqueSorted(arr);
    
    return arr.map(num => uniqueSortedArray.indexOf(num));
  }


  console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3])); // [3, 0, 1, 1, 2]
  console.log(smallerNumbersThanCurrent(
    [1, 4, 6, 8, 13, 2, 4, 5, 4])); // [0, 2, 4, 5, 6, 1, 2, 3, 2]
  console.log(smallerNumbersThanCurrent([7, 7, 7, 7])); // [0,0,0,0]
  console.log(smallerNumbersThanCurrent([6, 5, 4, 8])); // [2, 1, 0, 3]
  console.log(smallerNumbersThanCurrent([1]));

*/
  //input array
  //output number (the sum of 5 elements in the array)
  //rules: 
  //if arr has less than 5 elements return null 
  


  //check if array length is less than 5 and return null if yes 
  //declare a minimum var
  //loop through the input array index 0 to length - 5
  //take a slice of the array from current index to current index + 5 
  //calculate the sum of those numbers (reduce)
  //if sum < minimum, replace the sum with the new sum 
  //return the sum


/*
function minimumSum(arr) {
  if (arr.length < 5) {
    return null;
  }
  let minSum = Number.MAX_SAFE_INTEGER;
  for (i = 0; i <= arr.length - 5; i++) {
    let consecutive5 = arr.slice(i, i + 5);
    let sum = consecutive5.reduce((acc, current) => acc + current, 0);

    if (sum < minSum) {
      minSum = sum;
    }

  }
  return minSum;
}
console.log(minimumSum([1, 2, 3, 4]) === null);
console.log(minimumSum([1, 2, 3, 4, 5, -5]) === 9);
console.log(minimumSum([1, 2, 3, 4, 5, 6]) === 15);
console.log(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) === 16);
console.log(minimumSum([-1, -5, -3, 0, -1, 2, -4]) === -10);
*/

/*
//input: string
//output: string
//rules:
//same sequence of chars
//every 4th character in every second word is uppercase
//if second word is <4 char, do nothing


//split string into an array of words
//loop through this array, if index is even then capitalize every 4 letters
//join the array back into one string & return this value

//split string to every character
//loop through and replace the 4th characters with an uppercase
//join the string back together

function fourthCharUpper(word) {
  let chars = word.split("");
  let weirdCaseChars = chars.map((char, idx) => {
    if ((idx + 1) % 4 === 0) {
      char = char.toUpperCase();
    }
    return char;
  });
  return weirdCaseChars.join("");
}

function toWeirdCase(string) {
  let strArr = string.split(" ");
  for (let i = 1; i < strArr.length; i += 2) {
    strArr[i] = fourthCharUpper(strArr[i]);
  }
  return strArr.join(" ");
}


console.log(
  toWeirdCase('Lorem Ipsum is simply dummy text of the printing world') ===
              'Lorem IpsUm is simPly dummy texT of the printing worLd');
console.log(
  toWeirdCase('It is a long established fact that a reader will be distracted') ===
              'It is a lonG established facT that a reader wilL be disTracTed');
console.log(toWeirdCase('aaA bB c') === 'aaA bB c');
console.log(
  toWeirdCase('Miss Mary Poppins word is supercalifragilisticexpialidocious') ===
              'Miss MarY Poppins worD is supErcaLifrAgilIstiCexpIaliDociOus');
*/



//input: array of integers
//output: array of 2 integers
//closest together in value
//arranged by order of original array
/*
//find the 2 values
sort the array 
declare a closestVals variable & assign it to the first 2 elements 
declare a differenceBetweenVals variable & assign it to the absolute value of difference in the two elements 
loop through the array, checking the difference between each 2 elements
replace the closestVal var with the current 2 elements if difference is less than differenceBetweenVals
*/

/*
function closestNumsSorted(arr) {
  let sortedArr = arr.slice().sort((a, b) => a - b);
  let closestVals = [sortedArr[0], sortedArr[1]];
  let differenceBetweenVals = sortedArr[1] - sortedArr[0];
  for (let i = 1; i < sortedArr.length - 2; i++) {
    let diff = sortedArr[i + 1] - sortedArr[i];
    if (diff < differenceBetweenVals) {
      differenceBetweenVals = diff;
      closestVals = [sortedArr[i], sortedArr[i + 1]];
    }
  }
  return closestVals;
}

function closestNumbers(arr) {
  return arr.filter(element => {
    let values = closestNumsSorted(arr);
    return values.includes(element);
  });
}

console.log(closestNumbers([5, 25, 15, 11, 20]));     // [15, 11]
console.log(closestNumbers([19, 25, 32, 4, 27, 16])); // [25, 27]
console.log(closestNumbers([12, 7, 17]));             // [12, 7]

*/

/*
input: string 
output: string (one char)

rules: 
return the character that appears least often 
case insensitive 
if the char appear an equal # of times, then return the first one 

declare a variable as leastCommonCar
declare a var as number of occurances
transform the string to lowercase 
loop through each character in the string 
count the number of times it appears 
if # of occurances = 1, return that char 
if # of occurances < the saved variable, sqap leastcommonchar and numberOfOccurances variable 


Count the # of times it appears 
split the string into an array, filter the array to the char, return the length of the array 
*/
/*
function countChars(char, string) {
  return string.split("").filter(letter => letter === char).length;
}

function leastCommonChar(string) {
  string = string.toLowerCase();
  let leastCommon = "";
  let leastNmberOfOccurances = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < string.length; i += 1) {
    let currentChar = string[i];
    let numberOfOccurances = countChars(currentChar, string);
    if (numberOfOccurances === 1) {
      return currentChar;
    } else if (numberOfOccurances < leastNmberOfOccurances) {
      leastNmberOfOccurances = numberOfOccurances;
      leastCommon = currentChar;
    }
  }
  return leastCommon;
}

console.log(leastCommonChar("Hello World") === "h");
console.log(leastCommonChar("Peter Piper picked a peck of pickled peppers") ===
                            "t");
console.log(leastCommonChar("Mississippi") === "m");
console.log(leastCommonChar("Happy birthday!") === ' ');
console.log(leastCommonChar("aaaaaAAAA") === 'a');
*/
/*
let billAmount = Number(rlSync.question("What is the bill? "));
let tipPercent = Number(rlSync.question("What is the tip percentage? "));

tipPercent = tipPercent > 1 ? (tipPercent / 100) : tipPercent;
let tipAmount = billAmount * tipPercent;
let total = billAmount + tipAmount

console.log(`The tip is $${tipAmount.toFixed(2)}`);
console.log(`The total is $${total.toFixed(2)}`);
*/

//convert to a string
//split the string into an array
//reduce the array 
  //conver the char into a number and then add it to the accumlator
/*
function sum(num) {
  return String(num).split("").reduce((acc, current) => acc + Number(current), 0);
}

console.log(sum(23));
console.log(sum(496));
console.log(sum(123456789));
*/


