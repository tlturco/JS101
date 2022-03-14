//Exercise 1
//Sun of Digits
// turn num into a string
// split string into an array
// reduce to a sum (turning each element back to number first)
function sumOfDigits(num) {
  let sum = num.toString().split('').reduce((accumulator, digit) => {
    return accumulator + Number(digit);
  }, 0);
  return sum;
}

console.log(sumOfDigits(23)); //5
console.log(sumOfDigits(496)); //19
console.log(sumOfDigits(123456789)); //45


//Exercise 2
//Alphabetical Numbers
//create an array of each number as a word
//with the index of the array being the same as the number
//translate the number array to the numWords array
//sort the array
//create a new empty array for order
//find the index of each number in the numWords array
//push it to the empyty arr
// return arr

function alphabeticNumberSort(numberArr) {
  let numWords = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

  let translatedNums = numberArr.map(num => numWords[num]).sort();
  
  let alphabeticalNums = translatedNums.map(word => {
    return numWords.indexOf(word);
  });
  return alphabeticalNums;
}

console.log(alphabeticNumberSort(
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]

//Exercise 3
//Multiply All Pairs
//declare an empty results array
//use nested forEach loops
//for each num in array 1, loop through array 2
//return the product & push to the result array
//return the sorted results array
function multiplyAllPairs(arr1, arr2) {
  let result = [];
  arr1.forEach(num1 => {
    arr2.forEach(num2 => {
      result.push(num1 * num2);
    });
  });
  return result.sort((firstEl, secondEl) => firstEl - secondEl);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));

//Exercise 4
//Leading Substrings
//declare an empty array
//use a for loop
//create a substring from 0 to index in the for loop
//push this to the array
//return the array

function leadingSubstrings(str) {
  let result = [];
  for (let index = 1; index <= str.length; index++) {
    result.push(str.substring(0, index));
  }
  return result;
}

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));


function substrings(str) {
  let result = [];

  for (let char = 0; char < str.length; char++) {
    let substring = str.substring(char);
    result.push(leadingSubstrings(substring));
  }

  return result.flat();
}

console.log(substrings('abcde'));

function isPalindrome(str) {
  return (str.length > 1 && str === str.split("").reverse().join(""));
}

function palindromes(str) {
  let substringsArr = substrings(str);
  return substringsArr.filter(isPalindrome);
}

console.log(palindromes('abcd'));
console.log(palindromes('madam'));
console.log(palindromes('knitting cassettes'));

function leadingSubArray(numbers) {
  let result = [];
  for (let length = 1; length <= numbers.length; length++) {
    result.push(numbers.slice(0,length));
  }
  return result.flat();
}

function sumOfSums(numbers) {
  return leadingSubArray(numbers).reduce((accumulator, element) => accumulator + element);
}

console.log(sumOfSums([3, 5, 2]));

//launch school solution
/*
function sumOfSums(numbers) {
  let sumTotal = 0;
  for (let idx = 1; idx <= numbers.length; idx++) {
    sumTotal += numbers.slice(0, idx).reduce((accum, num) => accum + num);
  }
  return sumTotal;
}
*/

//Take a grocery list & rewrite it
//grocery list is nested array
//each subarray is the relevant item in index 0
//and the # of that item to buy in index 1
//loop through the top element of the grocerylist array
//do loop for the # of times in index 1 to push the item to the final list

function buyFruit(groceryList) {
  let result = [];
  groceryList.forEach(nestedArr => {
    let [fruit, quantity] = nestedArr;
    while (quantity > 0) {
      result.push(fruit);
      quantity -= 1;
    }
  });
  return result;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));


let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
  { id: 105, movement: 'in',  quantity: 10 },
  { id: 102, movement: 'out', quantity: 17 },
  { id: 101, movement: 'in',  quantity: 12 },
  { id: 103, movement: 'out', quantity: 20 },
  { id: 102, movement: 'out', quantity: 15 },
  { id: 105, movement: 'in',  quantity: 25 },
  { id: 101, movement: 'out', quantity: 18 },
  { id: 102, movement: 'in',  quantity: 22 },
  { id: 103, movement: 'out', quantity: 15 }, ];

function transactionsFor(ID, listOfTransactions) {
  return listOfTransactions.filter(transaction => transaction.id === ID);
}

console.log(transactionsFor(101, transactions));

function isItemAvailable(ID, listOfTransactions) {
  let transactions = transactionsFor(ID, listOfTransactions);
  let amount = 0;
  transactions.forEach(transaction => {
    if (transaction.movement === 'in') {
      amount += transaction.quantity; 
    } else if (transaction.movement === 'out') {
      amount -= transaction.quantity;
    }
  });
  return amount > 0;
}

console.log(isItemAvailable(101, transactions));
console.log(isItemAvailable(103, transactions));
console.log(isItemAvailable(105, transactions));