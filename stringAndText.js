//Exercise 1
//Check to see if all letters are uppercase
//Ignore non-alphabetic characters

function isUppercase(str) {
  return str.toUpperCase() === str;
}

isUppercase('t');               // false
isUppercase('T');               // true
isUppercase('Four Score');      // false
isUppercase('FOUR SCORE');      // true
isUppercase('4SCORE!');         // true
isUppercase('');                // true


//Exercise 2
//Remove all vowels from an array of strings

function removeVowels(arrayOfStrings) {
  let result = [];
  let vowels = 'aeiouAEIOU';
  arrayOfStrings.forEach(string => {
    let removedVowelString = string.split("").filter(char => !vowels.includes(char)).join("");
    result.push(removedVowelString);
  });
  return result;
}

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]

/*Launch School SOlution

function removeVowels(strings) {
  return strings.map(string => string.replace(/[aeiou]/gi, ""));
}

*/

//Exercise 3
//Lettercase Counter

// eslint-disable-next-line max-lines-per-function
function letterCaseCount(string) {
  let array = string.split("");
  let lowercase = 0;
  let uppercase = 0;
  let neither = 0;

  array.forEach(char => {
    let charCode = char.charCodeAt(0);
    if (charCode >= 65 && charCode <= 90) {
      uppercase += 1;
    } else if (charCode >= 97 && charCode <= 122) {
      lowercase += 1;
    } else {
      neither += 1;
    }

  });
  return {
    lowercase,
    uppercase,
    neither
  };
}

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));

/*
Launch School Solution

function letterCaseCount(string) {
  let lowercaseChars = string.match(/[a-z]/g) || [];
  let uppercaseChars = string.match(/[A-Z]/g) || [];
  let neitherChars = string.match(/[^a-z]/gi) || [];

  return {
    lowercase: lowercaseChars.length,
    uppercase: uppercaseChars.length,
    neither: neitherChars.length
  };
}
*/

//Exercise 4
//Capitlize Words

function wordCap(string) {
  words = string.split(" ");
  words = words.map(word => {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  });
  return words.join(" ");
}

console.log(wordCap('four score and seven'));
console.log(wordCap('the javaScript language'));
console.log(wordCap('this is a "quoted" word'));


//Exercise 5
//Swap Case


function swapCase(string) {
  return string.split("")
              .map(char => {
                if (char.toUpperCase() === char) return char.toLowerCase();
                else return char.toUpperCase();
              })
              .join("");
}

console.log(swapCase('CamelCase'));
console.log(swapCase('Tonight on XYZ-TV'));


//Exercise 6
//Staggered Case

function staggeredCase(string) {
  let needsCap = true;
  return string.
    split("")
    .map((char, index) => {
      if (char.match(/[a-z]/gi)) {
        if (needsCap) {
          needsCap = false;
          return char.toUpperCase();
        } else {
          needsCap = true;
          return char.toLowerCase();
        }
    } else return char; 
    })
    .join("");

}

console.log(staggeredCase('I Love Launch School!'));
console.log(staggeredCase('ALL_CAPS'));
console.log(staggeredCase('ignore 77 the 4444 numbers'));



function wordLengths(sentence) {
  let result = [];
  if (sentence) {
    let words = sentence.split(" ");
    words.forEach(word => {
      result.push(`${word} ${word.length}`);
    });
}
  return result;
}


//A function that searches tesxt for a word
//And returns the # of times the word appears

//split the text by space
//filter the array by whether the text = the word
//return the length of the filtered array

function searchWord(word, text) {
  let filteredWords =  text.split(" ").filter(element => element.toLowerCase() === word.toLowerCase());
  console.log(filteredWords);
  return filteredWords.length;
}

const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

console.log(searchWord('sed', text));


//a function that searches text for a word
//returns the text with the word highlighted


function searchWord2(word, text) {
  let highlightedWord = `***${word.toUpperCase()}***`;
  const regex = new RegExp(word, 'gi');
  return text.replaceAll(regex, highlightedWord);
}

console.log(searchWord2('sed', text));