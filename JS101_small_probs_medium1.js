//Rotation (Part 1)
//check if it's an array & return undefined if not
//check if it's empty, return []
//create a copy of the array with slice()
//use shift to remove the first element of the array & save it to a variable
//push this to the end of the array
//return the new array

function rotateArray(arr) {
  if (!Array.isArray(arr)) return undefined;
  if (arr.length === 0) return [];

  let copy = arr.slice();
  let first = copy.shift();
  copy.push(first);
  return copy;

  //LS Solution
  //return arr.slice(1).concat(arr[0]);
}

//check that it rotates
rotateArray([7, 3, 5, 2, 9, 1]);
//check that it returns undefined
rotateArray();
//check that the original array isn't mutated
let array = [1, 2, 3, 4];
console.log(rotateArray(array));   // [2, 3, 4, 1]
console.log(array);


//Rotation (Part 2)
//inputs: number and las count digits to rotate
//output: new number with the specified digit moved to the end
//and all other digits moved left
//rules:
  //rotate the last count digits of the original number
  //leave the first digits in the same order
  //same rules of rotation as the previous exercise
//data structure: split number using the count, convert that to an array
//return the data as a number


function rotateRightmostDigits(number, count) {
  let numberString = number.toString();
  let secondPart = numberString.slice(numberString.length - count);
  let firstPart = numberString.slice(0, numberString.length - count);
  let resultString = firstPart + rotateString(secondPart);
  return Number(resultString);
}

function rotateString(string) {
  return string.slice(1) + string[0];
}


//Rotation (Part 3)

function maxRotation(number) {
  let numDigits = number.toString().length;

  for (let i = 0; i < numDigits; i++) {
    number = rotateRightmostDigits(number, numDigits - i);
  }

  return number;
}


console.log(maxRotation(735291));


//Stack Machine
// eslint-disable-next-line max-lines-per-function
function minilang(command) {
  let stack = [];
  let register = 0;

  let commands = command.split(" ");

  // eslint-disable-next-line max-lines-per-function
  commands.forEach(instruction => {
    if (instruction === 'PUSH') {
      stack.push(register);
    } else if (instruction === 'ADD') {
      register += stack.pop();
    } else if (instruction === 'SUB') {
      register -= stack.pop();
    } else if (instruction === 'MULT') {
      register *= stack.pop();
    } else if (instruction === 'DIV') {
      register = Math.floor(register / stack.pop());
    } else if (instruction === 'REMAINDER') {
      register %= stack.pop();
    } else if (instruction === 'POP') {
      register = stack.pop();
    } else if (instruction === 'PRINT') {
      console.log(register);
    } else {
      register = Number(instruction);
    }
  });
}

minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)


function wordToDigit(string) {
  // eslint-disable-next-line max-len
  const numberWords = {zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9};
  Object.keys(numberWords).forEach(number => {
    let regex = new RegExp(number, 'g');
    string = string.replace(regex, numberWords[number]);
  });
  return string;
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."

//Fibonacci 1

function fibonacci(nth) {
  if (nth <= 2) {
    return 1;
  }

  return fibonacci(nth - 1) + fibonacci(nth - 2);
}

console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(12));
console.log(fibonacci(20));


function proceduralFibonacci(nth) {
  let previousFib = 1;
  let currentFib = 1;
  let result = 0;
  let i = 3;

  while (i <= nth) {
    result = currentFib + previousFib;
    previousFib = currentFib;
    currentFib = result;
    i++;
  }
  return currentFib;
}

console.log(proceduralFibonacci(1));
console.log(proceduralFibonacci(2));
console.log(proceduralFibonacci(3));
console.log(proceduralFibonacci(4));
console.log(proceduralFibonacci(5));
console.log(proceduralFibonacci(12));
console.log(proceduralFibonacci(20));
console.log(proceduralFibonacci(50));

let memo = {};
function memoizationFibonacci(nth) {
  if (nth <= 2) {
    return 1;
  } else if (memo[nth]) {
    return memo[nth];
  } else {
    memo[nth] = memoizationFibonacci(nth - 1) + memoizationFibonacci(nth -2);
    return memo[nth];
  }
}

console.log(memoizationFibonacci(12));
console.log(memoizationFibonacci(20));