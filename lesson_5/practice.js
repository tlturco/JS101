//Put array in decesing order

let arr = ['10', '11', '9', '7', '8'];
arr.sort((a,b) => {
  return Number(b) - Number(a);
});
console.log(arr);

//sort based on publication year
let books = [
  { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
  { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
  { title: 'Ulysses', author: 'James Joyce', published: '1922' },
  { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
];

books.sort((bookObj1, bookObj2) => {
  return Number(bookObj1.published) - Number(bookObj2.published);
});

console.log(books);


//Demonstrate how you'd access the letter g

let arr1 = ['a', 'b', ['c', ['d', 'e', 'f', 'g']]];
console.log(arr1[2][1][3]);

let arr2 = [{ first: ['a', 'b', 'c'], second: ['d', 'e', 'f'] }, { third: ['g', 'h', 'i'] }];
console.log(arr2[1].third[0]);

let arr3 = [['abc'], ['def'], { third: ['ghi'] }];
console.log(arr3[2].third[0][0]);

let obj1 = { a: ['d', 'e'], b: ['f', 'g'], c: ['h', 'i'] };
console.log(obj1.b[1]);

let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 }};
console.log(Object.keys(obj2.third)[0]);


//Change value 3 to 4

arr1 = [1, [2, 3], 4];
arr1[1][1] = 4;

arr2 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];
arr2[2] = 4;

obj1 = { first: [1, 2, [3]] };
obj1.first[2][0] = 4;

obj2 = { a: { a: ['1', 'two', 3], b: 4 }, b: 5 };
obj2.a.a[2] = 4;


//Compute the total age of the male members of the family
let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

let maleAge = 0;
for (let person in munsters) {
  if (munsters[person]['gender'] === 'male') {
    maleAge += munsters[person]['age'];
  }
}

console.log(maleAge);


//Print out info about the family
for (let person in munsters) {
  let name = person;
  let age = munsters[person]['age'];
  let gender = munsters[person]['gender'];
  console.log(`${name} is a ${age}-year-old ${gender}.`);
}

//Launch School Solution
/*
Object.entries(munsters).forEach(entry => {
  let name = entry[o];
  let age = entry[1]['age'];
  let gender = entry[1]['gender'];
  console.log(`${name} is a ${age}-year-old ${gender}.`);
});
*/

let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

let vowels = ['a', 'e', 'i', 'o', 'u'];
let vowelsInString = '';
Object.values(obj).forEach(entry => {
  let string = entry.join("").split("");
  string.forEach(char => {
    if (vowels.includes(char)) {
      vowelsInString += char;
    }
  });

});
console.log(vowelsInString);


//Sort the sub array
arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];


let sortedArr = arr.map(subArr => {
  if (typeof subArr[0] == 'number') {
    return subArr.slice().sort((a, b) => a - b);
  } else {
    return subArr.slice().sort();
  }
});

console.log(arr);
console.log(sortedArr);

//Use map to return a new array with each number incremented by 1
arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];
let newArr = arr.map(obj => {
  let incrementedObj = {};
  for (let key in obj) {
    incrementedObj[key] = obj[key] + 1;
  }
  return incrementedObj;
});

console.log(newArr);


//return a new array with identical structure whose values are multiples of 3

arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

let filteredArr = arr.map(subArr => {
  return subArr.filter(num => num % 3 === 0);
});

console.log(filteredArr);

//sort array based on sum of odd #
arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

arr.sort((subArr1, subArr2) => {
  let sum1 = subArr1.filter(num => num % 2 === 1)
                    .reduce((sum, next) => sum + next);
  let sum2 = subArr2.filter(num => num % 2 === 1)
                    .reduce((sum, next) => sum + next);

  console.log(`Sum 1 = ${sum1} and Sum 2 = ${sum2}`);
  return sum1 - sum2;
});

console.log(arr);


//return the colors of freuit and the size of veggies

obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

let colorsSizes = [];
for (let produce in obj) {
  if (obj[produce].type === 'fruit') {
    colorsSizes.push(obj[produce]['colors'].map(color => color[0].toUpperCase() + color.slice(1)))
  } else {
    colorsSizes.push(obj[produce].size.toUpperCase() );
  }
}

console.log(colorsSizes);

//filter to only obj where all numbers are even
//arr.filter
//use Object.vallues
//use .every

arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

let evenArr = arr.filter(obj => {
  return Object.values(obj).flat()
                          .every(num => num % 2 === 0);
});

console.log(evenArr);

//turn the nested array into an object
arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];
let newObj = {};

arr.forEach(subArr => {
  let key = subArr[0];
  let value = subArr[1];
  newObj[key] = value;
});

console.log(newObj);


//create UUID

function generateUUID() {
  return hexDecString(8) + '-' + hexDecString(4) + '-' + hexDecString(4) + '-' + hexDecString(4) + '-' + hexDecString(12);
}

function getRandomHexDecChar() {
  let hexRef = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
  return hexRef[Math.floor(Math.random() * hexRef.length)];
}

function hexDecString(length) {
  let result = '';
  while (result.length < length) {
    result += getRandomHexDecChar();
  }
  return result;
}

console.log(generateUUID());