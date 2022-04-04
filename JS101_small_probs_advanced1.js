//madlibs
//input: template text with nouns/adjectives/verbs/adverbs to randomly replace
//output: sentence with random nouns/adjectives/verbs/adverbs

//1.

let adjectives = ['quick', 'lazy', 'sleepy', 'noisy', 'hungry'];
let nouns =  ['fox', 'dog', 'head', 'leg', 'tail', 'cat'];
let verbs = ['jumps', 'lifts', 'bites', 'licks', 'pats'];
let adverbs = ['easily', 'lazily', 'noisily', 'excitedly'];

function randomlySelect(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

let test = "The ADJECTIVE brown NOUN ADVERB VERB the ADJECTIVE yellow NOUN who ADVERB VERB his NOUN and looks around.";
let test2 = "The NOUN VERB the NOUN's head";

// eslint-disable-next-line max-lines-per-function
function madlibs(template) {
  function replaceWordType(type) {
    let wordType;
    switch (type) {
      case 'ADJECTIVE' : wordType = adjectives;
        break;
      case 'NOUN' : wordType = nouns;
        break;
      case 'VERB' : wordType = verbs;
        break;
      case 'ADVERB' : wordType = adverbs;
        break;

    }
    while (template.includes(type)) {
      let randomWord = randomlySelect(wordType);
      template = template.replace(type, randomWord);
    }
  }
  replaceWordType('ADJECTIVE');
  replaceWordType('NOUN');
  replaceWordType('ADVERB');
  replaceWordType('VERB');
  return template;
}

console.log(madlibs(test));
console.log(madlibs(test2));

//transpose a 3x3 matrix
//input matrix
//output new, transposed matrix
//rules: do not mutate original array
/*
1. declare new empty Array
2. loop through the rows
3. loop through the columns
4. push each element to the new array
5. return the new array
*/

function transpose(matrix) {
  let transposedMatrix = [];
  let numRows = matrix.length;
  let numColumns = matrix[0].length;
  for (let colIndx = 0; colIndx < numColumns; colIndx++) {
    let row = [];
    for (let rowIndx = 0; rowIndx < numRows; rowIndx++) {
      row.push(matrix[rowIndx][colIndx]);
    }

    transposedMatrix.push(row);
  }

  return transposedMatrix;
}

let matrix = [
  [1, 5, 8, 5],
  [4, 7, 2, 0],
  [3, 9, 6, 1]
];

let newMatrix = transpose(matrix);
console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]


console.log(transpose([[1, 2, 3, 4]]));
console.log(transpose([[1], [2], [3], [4]]));
console.log(transpose([[1]]));
console.log(transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]));


//Rotating Matrix
//Rotate each side of the matrix clockwise by 90 degrees
/*
let example1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

matrix[2][0], matrix[1][0] matrix[0][0]
matrix[2][1] matrix[1][1] matrix[0][1]
matrix[2][2] matrix[1][2] matrix[0][2]

let example2 = [
  [3, 4, 1],
  [9, 7, 5]
]

matrix[1][0] matrix[0][0]
matrix[1][1] matrix[0][1]
matrix[1][2] matrix[0][2]
*/


function rotate90(matrix) {
  let rotated = [];
  let newRowsCount = matrix[0].length;
  for (let rowIndx = 0; rowIndx < newRowsCount; rowIndx += 1) {
    rotated.push([]);
  }

  for (let colIdx = 0; colIdx < matrix[0].length; colIdx += 1) {
    for (let rowIndx = matrix.length - 1; rowIndx >= 0; rowIndx -= 1) {
      rotated[colIdx].push(matrix[rowIndx][colIdx]);
    }
  }

  return rotated;
}

let matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

let matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

let newMatrix1 = rotate90(matrix1);
let newMatrix2 = rotate90(matrix2);
let newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]