//Question 1
function asciiArt(phrase) {
  for (let i = 0; i < 10; i++){
    console.log(" ".repeat(i) + phrase);
  }
}

asciiArt("The Flintstones Rock!");

//Question 2
let munstersDescription = "The Munsters are creepy and spooky.";
let swappedPhrase = '';
for (let charIndex = 0; charIndex < munstersDescription.length; charIndex++){
  if (munstersDescription[charIndex] === munstersDescription[charIndex].toUpperCase()) {
    swappedPhrase += munstersDescription[charIndex].toLowerCase()
  } else {
    swappedPhrase += munstersDescription[charIndex].toUpperCase()
  }
}
console.log(munstersDescription);
console.log(swappedPhrase);

//Question 3
function factors(number) {
  let divisor = number;
  let factors = [];
  while (divisor > 0){
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  }
  return factors;
}

console.log(factors(72));
console.log(factors(0));
console.log(factors(-7));

//Question 4
//array.push() mutates the caller
//and returns the length of the modified array
//array.concat does not
//and returns the new array it made

//Question 5
console.log(0.3 + 0.6); //output 0.899999999
console.log(0.3 + 0.6 === 0.9); //output false
//computer uses floating point numbers

//Question 6
let nanArray = [NaN];

console.log(nanArray[0] === NaN); //returns false
console.log(Number.isNaN(nanArray[0])); //use this instead

//Question 7
let answer = 42;

function messWithIt(someNumber) {
  return (someNumber += 8);
}

let newAnswer = messWithIt(answer);

console.log(answer - 8); //Output: 34
//the function stores a copy of answer and reassigns that paramter
//the original value of answer does not get reassigned +=8

//Question 8
let munsters = {
  Herman: { age: 32, gender: "male" },
  Lily: { age: 30, gender: "female" },
  Grandpa: { age: 402, gender: "male" },
  Eddie: { age: 10, gender: "male" },
  Marilyn: { age: 23, gender: "female" }
};

function messWithDemographics(demoObject) {
  Object.values(demoObject).forEach(familyMember => {
    familyMember["age"] += 42;
    familyMember["gender"] = "other";
  });
}


//Question 9
function rps(fist1, fist2) {
  if (fist1 === "rock") {
    return fist2 === "paper" ? "paper" : "rock";
  } else if (fist1 === "paper") {
    return fist2 === "scissors" ? "scissors" : "paper";
  } else {
    return fist2 === "rock" ? "rock" : "scissors";
  }
}

console.log(rps(rps(rps("rock", "paper"), rps("rock", "scissors")), "rock"));
//Output = paper

//Question 10
function foo(param = "no") {
  return "yes";
}

function bar(param = "no") {
  return param === "no" ? "yes" : "no";
}

console.log(bar(foo())); //returns no