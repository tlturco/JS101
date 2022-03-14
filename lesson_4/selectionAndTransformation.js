let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

function selectFruit(produce) {
  let fruits = {};
  for (let food in produce) {
    if (produce[food] === 'Fruit') {
      fruits[food] = 'Fruit';
    }
  }
  return fruits;
}
console.log(selectFruit(produce)); // => { apple: 'Fruit', pear: 'Fruit' }


function doubleNumbers(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    numbers[i] *= 2;
  }
  return numbers;
}

let myNumbers = [1, 4, 3, 7, 2, 6];
console.log(doubleNumbers(myNumbers)); // => [2, 8, 6, 14, 4, 12]
console.log(myNumbers);

//reassign array (bc previous function call just mutated it)
myNumbers = [1, 4, 3, 7, 2, 6];

function doubleOddIndex(numbers) {
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    if (i % 2 === 1) {
      result.push(numbers[i] * 2);
    } else {
      result.push(numbers[i]);
    }
  }
  return result;
}

console.log(doubleOddIndex(myNumbers));

function mulitply(numbersArray, multiplier) {
  let result = [];
  for (let i = 0; i < numbersArray.length; i++) {
    result.push(numbersArray[i] * multiplier);
  }
  return result;
}
console.log(mulitply(myNumbers, 3));


let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];

let flintstonesObj = {};

flintstones.forEach((character, index) => {
  flintstonesObj[character] = index;
});

console.log(flintstonesObj);


let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let sum = Object.values(ages).reduce((agesSum, age) => agesSum + age);
console.log(sum);

let ageArr = Object.values(ages);
//METHOD 1
let minAge = ageArr[0];
ageArr.forEach(age => {
  if (age < minAge) {
    minAge = age;
  }
});

//METHOD 2
minAge = Math.min(...ageArr);
console.log(minAge);

let statement = "The Flintstones Rock";
let charsInStatement = statement.split('').filter(char => char !== ' ');
let frequency = {};

charsInStatement.forEach(char => {
  frequency[char] = frequency[char] ? (frequency[char] += 1) : 1;
});

console.log(frequency);