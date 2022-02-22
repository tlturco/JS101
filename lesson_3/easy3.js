//Question 1
let numbers = [1, 2, 3, 4];
//Method 1
numbers = [];

//Method 2
while (numbers.length) {
  numbers.pop();
}

//Method 3
numbers.splice(0, numbers.length)

//Launch School
numbers.length = 0;

//Question 2
console.log([1, 2, 3] + [4, 5]); //Output 1,2,34,5
//converts the arrays to strings, and then concatenates the strings

//QUestion 3
let str1 = "hello there";
let str2 = str1;
str2 = "goodbye!";
console.log(str1); //output "hello there"

//Question 4
let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1); 
//Output: [ { first: 42 }, { second: "value2" }, 3, 4, 5 ]
//slice() makes a shallow copy of the array
//shallow copies duplicate the outermost values 
//but hold pointers to nested values
//so arr1[0] and arr2[0] hold pointers to the same object 
//when you change arr2[0], you also change arr1[0]

//Question 5
function isColorValid(color) {
  return (color === "blue" || color === "green");
}

/*Launch School Solution
const isColorValid = color => ["blue", "green"].includes(color);
*/

