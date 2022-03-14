//Exercise 1
//Cute Angles
function dms(number) {
  let degree = Math.floor(number);
  let x = (number - degree) * 60;
  let minutes = Math.floor(x);
  let seconds = Math.floor((x - minutes) * 60);
  minutes = String(minutes).padStart(2, '0');
  seconds = String(seconds).padStart(2, '0');
  return degree + '°' + minutes + "'" +  seconds + '"';
}

dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"


//Exercise 2
//Combining Arrays
function union(arr1, arr2) {
  let result = [];

  let joinedArr = arr1.concat(arr2);
  joinedArr.forEach(element => {
    if (!result.includes(element)) {
      result.push(element);
    }
  });
  return result;
}
/* Launch School Solution
function copyNonDupsTo(resultArray, array) {
  array.forEach(value => {
    if (!resultArray.includes(value)) {
      resultArray.push(value);
    }
  });
}

function union(...args) {
  const newArray = [];

  args.forEach(value => copyNonDupsTo(newArray, value));

  return newArray;
}
*/

//Exercise 3
function halvsies(arr) {
  let midPoint = Math.ceil(arr.length / 2);
  let arr1 = [];
  let arr2 = [];
  for (let i = 0; i < midPoint; i++) {
    arr1.push(arr[i]);
  }

  for (let i = midPoint; i < arr.length; i++ ) {
    arr2.push(arr[i]);
  }
  return [arr1, arr2];
}

halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]

/*Launch School Solution
function halvsies(array {
  let half = Math.ceil(array.length / 2);
  let firstHalf = array.slice(0, half);
  let secondHalf = array.slice(half);
  return [firstHalf, secondHalf];
})

*/

//Exercise 4
function findDup(array) {

let dup = array.find((item, index) => array.indexOf(item) !== index);
  return dup;
}

console.log(findDup([1, 5, 3, 1]));                                // 1
console.log(findDup([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
         38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
         14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
         78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
         89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
         41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
         55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
         85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
         40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
          7, 34, 57, 74, 45, 11, 88, 67,  5, 58]));    // 73

//Exercise 5
function interleave(arr1, arr2) {
  if (arr1.length !== arr2.length) return 'improper inputs';
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    result.push(arr1[i], arr2[i]);
  }
  return result;
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));


//Exercise 6
function multiplicativeAverage(arr) {
  // eslint-disable-next-line max-len
  let product = arr.reduce((previousValue, currentValue) => previousValue * currentValue, 1);
  let avg = product / arr.length;
  return avg.toFixed(3);
}

//Exercise 6
function multiplyList(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    result.push(arr1[i] * arr2[i]);
  }
  return result;
}

//Exercise 7
function digitList(num) {
  let numStringArray =  num.toString().split("");
  return numStringArray.map(element => Number(element));
}
//Exercise 8
function countOccurrences(array) {
  let count = {};
  array.forEach(element => {
    count[element] = count[element] + 1 || 1;
  })
  for (let item in count) {
    console.log(`${item} => ${count[item]}`);
  }
}

//Exercise 9
function average(arr) {
  // eslint-disable-next-line max-len
  let sum = arr.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
  let avg = sum / arr.length;
  return Math.floor(avg);
}


//Exercise 10
const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

function leadingZero(number) {
  return number < 10 ? `0{number}` : String(number);
}

function formatTime(hours, minutes) {
  return `${leadingZero(hours)}:${leadingZero(minutes)}`;
}

function timeOfDay(deltaMinutes) {
  if (deltaMinutes < 0) {
    deltaMinutes = (deltaMinutes % MINUTES_PER_DAY) + MINUTES_PER_DAY;
  } else {
    deltaMinutes %= MINUTES_PER_DAY;
  }

  let hours = Math.floor(deltaMinutes / MINUTES_PER_HOUR);
  let minutes = deltaMinutes % MINUTES_PER_HOUR;

  return formatTime(hours, minutes);

}

//Exercise 11
function afterMidnight(stringDate) {
  stringDate = stringDate.split(":");
  let hours = Number(stringDate[0]);
  if (hours === HOURS_PER_DAY) {
    hours = 0;
  }
  let minutes = Number(stringDate[1]);

  let minsAfterMidnight = 0;
  minsAfterMidnight += hours * MINUTES_PER_HOUR;
  minsAfterMidnight += minutes;
  return minsAfterMidnight;
}

function beforeMidnight(stringDate) {
  stringDate = stringDate.split(":");
  let hours = Number(stringDate[0]);
  if (hours === 0) {
    hours = 24;
  }
  let minutes = Number(stringDate[1]);

  let hoursBeforeMidnight = 23 - hours;

  let minutesBeforeMidnight = 0;
  minutesBeforeMidnight += (60 - minutes);
  minutesBeforeMidnight += hoursBeforeMidnight * MINUTES_PER_HOUR;

  return minutesBeforeMidnight;
}

/*Launch School Solution
function afterMidnight(timeStr) {
  let [hours, minutes] = timeStr.split(":").map(num => Number(num));
  return ((hours * MINUTES_PER_HOUR) + minutes) % MINUTES_PER_DAY;
}

function beforeMidnight(timeStr) {
  let deltaMinutes = MINUTES_PER_DAY - afterMidnight(timeStr);
  if (deltaMinutes === MINUTES_PER_DAY) {
    deltaMinutes = 0;
  }
  return deltaMinutes;
*/

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);

console.log(afterMidnight("00:00"));
console.log(beforeMidnight("00:00"));
console.log(afterMidnight("12:34"));
console.log(beforeMidnight("12:34"));
console.log(afterMidnight("24:00"));
console.log(beforeMidnight("24:00"));