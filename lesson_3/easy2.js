//Question 1
let advice = "Few things in life are as important as house training your pet dinosaur.";
let updatedAdvice = advice.replaceAll("important", "urgent");

//Question 2
let numbers = [1, 2, 3, 4, 5];

let forEachreversedArray = [];
numbers.forEach(element => {
  forEachreversedArray.unshift(element);
});

let reversedArray = numbers.slice().reverse();
let sortedArray = [...numbers].sort((num1, num2) => num2 - num1);

console.log(numbers);
console.log(forEachreversedArray);
console.log(reversedArray);
console.log(sortedArray);

//Question 3
numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

let number1 = 8;  // false
let number2 = 95; // true

numbers.includes(number1);
numbers.includes(number2);

//Question 4
let famousWords = "seven years ago...";
let method1FullQuote = "Four score and " + famousWords;
let method2FullQuote = "Four score and".concat(' ',famousWords);


//Question 5
let arrNums = [1, 2, 3, 4, 5];
arrNums.splice(2 ,1);


//Question 6
let flintstones = ["Fred", "Wilma"];
//how you'd concatenate without creating nesting arrays
//flintstones = flintstones.concat(["Barney", "Betty"], ["Bambam", "Pebbles"]);

flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

//Method 1
console.log([].concat(...flintstones));
//Method 2
let fixedArray = [];
flintstones.forEach(element => {
  if (Array.isArray(element)) {
    element.forEach(nestedElement => {
      fixedArray.push(nestedElement);
    });
  } else {fixedArray.push(element)}

});
console.log(fixedArray);

//Launch School Solutions
/*
//method with reduce
flintstones.reduce((accum, element) => {
  return accum.concat(element);
});

//method with forEach
let newFlinstones = [];
flintstones.forEach(element => {
  newFlinstones = newFlinstones.concat(element);
});

//method with flat
newFlinstones = flintstones.flat();
*/


//Question 7
let flintstonesObj = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };
let flintstonesArr = Object.entries(flintstonesObj).flat();
flintstonesArr.splice(flintstonesArr.indexOf("Barney") ,2);

//Launch School Solution
Object.entries(flintstonesObj).filter(pair => pair[0] === "Barney").shift();

//Question 8
let nums = [1, 2, 3, 4]; // true
let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false

Array.isArray(nums);
Array.isArray(table);

//Question 9
let title = "Flintstone Family Members";
let pad = Math.floor((40 - title.length) / 2);
let centeredTitle = title.padStart(pad + title.length);
console.log(centeredTitle);

//Question 10
let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

statement1.split('').filter(char => char === 't').length;
statement2.split('').filter(char => char === 't').length;
