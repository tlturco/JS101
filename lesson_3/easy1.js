/* eslint-disable no-unused-expressions */
//Question 2
let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false

console.log(str1.endsWith('!'));
console.log(str2.endsWith('!'));

//Question 3
let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };
('Spot' in ages) ? console.log("Yes") : console.log("No");
('Herman' in ages) ? console.log("Yes") : console.log("No");

//Launch School solution:
// ages.hasOwnProperty("Spot");

//Question 4
let munstersDescription = "the Munsters are CREEPY and Spooky.";
munstersDescription = munstersDescription[0].toUpperCase() + munstersDescription.slice(1).toLowerCase();
console.log(munstersDescription);
// => The munsters are creepy and spooky.

//Launch School Solution: 
//munstersDescription.charAt(0).toUpperCase() + munstersDescription.substring(1).toLowerCase();

//Question 5
console.log(false == '0'); //true
console.log(false === '0'); //false

//Question 6
//ages object defined above in Q3
let additionalAges = { Marilyn: 22, Spot: 237 };
Object.assign(ages, additionalAges);

//Question 7
//reassigning the str1 and str2 variables
//since they were declared in another Q above
str1 = "Few things in life are as important as house training your pet dinosaur.";
str2 = "Fred and Wilma have a pet dinosaur named Dino.";
console.log(str1.includes("Dino"));
console.log(str2.includes("Dino"));

//Question 8 and 9
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
flintstones.push("Dino", "Hoppy");

//Question 10
let advice = "Few things in life are as important as house training your pet dinosaur.";
let houseIndex = advice.indexOf("house");
let newAdvice = advice.substring(0, houseIndex);
// Expected return value:
// => 'Few things in life are as important as '