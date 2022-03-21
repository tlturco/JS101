// eslint-disable-next-line max-lines-per-function
function letterPercentages(string) {

  let lowerCaseRegex = /[a-z]/g;
  let upperCaseRegex = /[A-Z]/g;
  let lowerCase = string.match(lowerCaseRegex);
  if (lowerCase) {
    lowerCase = lowerCase.length;
  } else {
    lowerCase = 0;
  }
  let upperCase = string.match(upperCaseRegex);
  if (upperCase) {
    upperCase = upperCase.length;
  } else {
    upperCase = 0;
  }
  let other = string.length - lowerCase - upperCase;

  return {
    lowercase: String((lowerCase / string.length * 100).toFixed(2)),
    uppercase: String((upperCase / string.length * 100).toFixed(2)),
    neither: String((other / string.length * 100).toFixed(2))
  };

}
/* Lauch School SOlution
function letterPercentages(string) {
  let count = string.length;

  function percentage(regex) {
    let matchingChars = string.match(regex) || [];
    return ((matchingChars.length / count) * 100).toFixed(2);
  }

  return {
    lowercase: percentage(/[a-z]/g),
    uppercase: percentage(/[A-Z]/g),
    neither:   percentage(/[^a-z]/gi),
  };
}*/

console.log(letterPercentages('abCdef 123'));
console.log(letterPercentages('AbCd +Ef'));
console.log(letterPercentages('123'));


//Excercise 2 Triangle
//Create 1 function to determine if the triangle is valid
//convert to an array, sort, and return conditional

function validTriangle(side1, side2, side3) {

  let arr = [side1, side2, side3]
    .filter(side => side > 0)
    .sort((a, b) => a - b);
  if (arr.length !== 3) {
    return false;
  } else {
    return arr[0] + arr[1] > arr[2];
  }
}

console.log(validTriangle(3, 3, 3));
console.log(validTriangle(3, 1, 1));
console.log(validTriangle(3, 2, 0));

function triangleType(side1, side2, side3) {
  let numEqual = 0;
  if (side1 === side2) {
    numEqual += 1;
  }
  if (side2 === side3) {
    numEqual += 1;
  }
  if (side1 === side3) {
    numEqual += 1;
  }
  switch (numEqual) {
    case 0: return "scalene";
    case 1: return "isosceles";
    case 3: return "equilateral";
  }
}

console.log(triangleType(3, 3, 3));
console.log(triangleType(3, 3, 1));
console.log(triangleType(3, 2, 0));

function triangle(side1, side2, side3) {
  if (!validTriangle(side1, side2, side3)) {
    return 'invalid';
  } else return triangleType(side1, side2, side3);
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"


//exercise 3 Troamgle angels

triangle(60, 70, 50)

function hasValidAngles(angle1, angle2, angle3) {
  let smallestAngle = [angle1, angle2, angle3].sort((a, b) => a - b).shift();
  return smallestAngle > 0 && angle1 + angle2 + angle3 === 180;
}

function triAngle(angle1, angle2, angle3) {
  [small, medium, large] = [angle1, angle2, angle3].sort((a, b) => a - b);
  if (!hasValidAngles(small, medium, large)) {
    return 'invalid';
  } else if (small < 90 && medium < 90 && large < 90) {
    return 'acute';
  } else if (large === 90) {
    return 'right';
  } else if (large > 90) {
    return 'obtuse';
  }

}

console.log(triAngle(60, 70, 50));       // "acute"
console.log(triAngle(30, 90, 60));       // "right"
console.log(triAngle(120, 50, 10));      // "obtuse"
console.log(triAngle(0, 90, 90));        // "invalid"
console.log(triAngle(50, 50, 50));


//Exerecise 4 Count the Friday the 13ths

function fridayThe13ths(year) {
  let numFridays13 = 0;
  for (let month = 0; month < 12; month++) {
    let the13th = new Date(year, month, 13);
    if (the13th.getDay() === 5) {
      numFridays13 += 1;
    }
  }
  return numFridays13;
}

console.log(fridayThe13ths(1986));
console.log(fridayThe13ths(2015));
console.log(fridayThe13ths(2017));


//Featured
//Rules
/* return the next number that is: 
--greater than the input
- a multiple of 7
-odd
--does not have any repeating digits
inputs:
--integer
output
-- featured integer
*/

//Algorithm
//create a while loop
//use inpupt value as the starting value
//increment the value by 1 each loop
//break condition = check whether the number is featured number
//to check whether it is a featured number
// num % 7 === 0 (multiple of 7)
// num % 2 === 1 (odd number)
//has repeating digits

function allUnique(N) {
  let digits = String(N).split('');
  let seen = {};

  for (let i = 0; i < digits.length; i++) {
    if (seen[digits[i]]) {
      return false;
    }

    seen[digits[i]] = true;
  }
  return true;
}

function isFeateredNum(num) {
  let isMultipleOf7 = num % 7 === 0;
  let isOdd = num % 2 === 1;
  let noRepeatingDigits = allUnique(num);
  return isMultipleOf7 && isOdd && noRepeatingDigits;
}


function featured(N) {
  if (N >= 9876543201) {
    return "There is no possible number that fulfills those requirements.";
  }

  let currentNum = N + 1;
  while (isFeateredNum(currentNum) === false) {
    currentNum += 1;

  }
  return currentNum;
}

console.log(featured(12));
console.log(featured(20));
console.log(featured(21));
console.log(featured(997));
console.log(featured(1029));
/*
console.log(featured(999999));
console.log(featured(999999987));
console.log(featured(9876543186));
console.log(featured(9876543200));
console.log(featured(9876543201));
*/

//Exercise 6
//Sum Square - Square Sum

function sumSquare(N) {
  var sum = 0;
  while (N > 0) {
    sum += N;
    N -= 1;
  }
  return Math.pow(sum, 2);
}

function squareSum(N) {
  var result = 0;
  while (N > 0) {
    result += Math.pow(N, 2);
    N -= 1;
  }
  return result;
}

function sumSquareDifference(N) {
  return sumSquare(N) - squareSum(N);
}

console.log(sumSquareDifference(3)); //22
console.log(sumSquareDifference(10)); //2640
console.log(sumSquareDifference(1)); //0
console.log(sumSquareDifference(100)); //25164150

/*
Launch School Solution
Combines all the functions into one code block
function sumSquareDifference(count) {
  let sum = 0;
  let sumOfSquares = 0;

  for (let number = 1; number <= count; number ++) {
    sum += number;
    sumOfSquares += Math.pow(number, 2);
  }

  return Math.pow(sum, 2) - sumOfSquares;
}
*/


//Exercise 7
//Bubble Sort

function bubbleSort(array) {
  let swapped = true;

  while (swapped === true) {
    swapped = false;

    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        swapped = true;
        //swap positions
        [array[i], array[i + 1]] = [array[i + 1], array[i]];

      }
    }
  }
  return "Now she's sorted :)";
}

let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]


//Exercise 8
//Longest sentence

function longestSentence(text) {
  let longSentence = text.split(/[.?!]/).sort((a, b) => b.split(' ').length - a.split(' ').length)[0];
  let numWordsInLogestSentence = longSentence.trim().split(' ').length;
  let punctuation = findPunctuation(longSentence, text);
  let resultText = longSentence + punctuation +  '\n\n' + `The longest sentence has ${numWordsInLogestSentence} words.`;
  console.log(resultText);
}

function findPunctuation(longSentence, text) {
  let locationOfLongSentence = text.indexOf(longSentence);
  let indexOfPunctuation = locationOfLongSentence + longSentence.length;
  return text[indexOfPunctuation];
}
/*
Launch School Solution
Uses .match() instead of .split()
function longestSentence(text) {
  let sentences = text.match(/\w.*?[.!?]/g);

  let longest = sentences.reduce(
    function(longest, sentence) {
      let length = sentence.split(/\s/).length;
      if (length > longest.length) {
        return { text: sentence, length: length };
      } else {
        return longest;
      }
    },
    { text: "", length: 0 }
  );

  console.log(longest.text + "\n");
  console.log("The longest sentence has " + longest.length + " words.\n");
}
*/
let longText =
  'Four score and seven years ago our fathers brought forth on this ' +
  'continent a new nation, conceived in liberty, and dedicated to the ' +
  'proposition that all men are created equal. Now we are engaged in a ' +
  'great civil war, testing whether that nation, or any nation so ' +
  'conceived and so dedicated, can long endure. We are met on a great ' +
  'battlefield of that war. We have come to dedicate a portion of that ' +
  'field, as a final resting place for those who here gave their lives ' +
  'that that nation might live. It is altogether fitting and proper that ' +
  'we should do this.';

let longerText = longText +
  'But, in a larger sense, we can not dedicate, we can not consecrate, ' +
  'we can not hallow this ground. The brave men, living and dead, who ' +
  'struggled here, have consecrated it, far above our poor power to add ' +
  'or detract. The world will little note, nor long remember what we say ' +
  'here but it can never forget what they did here. It is for us the ' +
  'living, rather, to be dedicated here to the unfinished work which ' +
  'they who fought here have thus far so nobly advanced. It is rather ' +
  'for us to be here dedicated to the great task remaining before us -- ' +
  'that from these honored dead we take increased devotion to that ' +
  'cause for which they gave the last full measure of devotion -- that ' +
  'we here highly resolve that these dead shall not have died in vain ' +
  '-- that this nation, under God, shall have a new birth of freedom -- ' +
  'and that government of the people, by the people, for the people, ' +
  'shall not perish from the earth.';

longestSentence(longText);
longestSentence(longerText);
longestSentence("Where do you think you're going? What's up, Doc?");
longestSentence("To be or not to be! Is that the question?");