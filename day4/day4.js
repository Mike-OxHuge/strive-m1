console.log("~~ Day 4 homeworks starts here");
/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.
*/

const area = function (l1, l2) {
  // declaring const as a function with 2 parameters (l1, l2)
  return l1 * l2; // it returns multiplication of a parameters
};
let rectangle = area(5, 7); // a variable what stores a value computed by a function (l1 = 5, l2 = 7)
let anotherRectangle = area(7, 9); // the same stuff, but another variable and (l1 = 7, l2 = 9)
console.log(
  `Square of one rectangle (5x7) is: ${rectangle}, and another one (7x9) is ${anotherRectangle}`
);
/* EXERCISE 2
Write a function "crazySum" which receives two integers. It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/
const crazySum = function (x, y) {
  if (x === y) {
    return (x + y) * 3;
  } else {
    return x + y;
  }
};
let crazySumResultOne = crazySum(2, 2);
let crazySumResultTwo = crazySum(2, 3);
console.log(`
if x equals y the result is: ${crazySumResultOne},
if x is not equal y the result is: ${crazySumResultTwo}
`);
/* EXERCISE 3
Write a function "crazyDiff" that computes the absolute difference between a given number and 19. 
It should return triple their absolute difference if the given number is greater than 19.
*/
let nineteen = 19; // declaring variable for 19
const crazyDiff = function (x, nineteen) {
  // x is an any given number
  if (x - nineteen > 0) {
    return Math.abs(x - nineteen) * 3; // Math.abs returns absolute value (-4 becomes 4)
  } else {
    return Math.abs(x - nineteen);
  }
};
let crazyDiffResultOne = crazyDiff(21, nineteen);
let crazyDiffResultTwo = crazyDiff(15, nineteen);
console.log(`
if given number is greater than 19 (21) the result is: ${crazyDiffResultOne},
if given number is 15 the result is: ${crazyDiffResultTwo}
`);
/* EXERCISE 4
Write a function "boundary" which accept an integer n and returns true if n is within 20 and 100 (included) or if it's equal to 400.
*/
let bamboolean;
const boundary = function (n) {
  if ((n >= 20 && n <= 100) || n === 400) {
    bamboolean = true;
  } else {
    bamboolean = false;
  }
};
let test = boundary(50);
console.log(`If n = 50, the value is: ${bamboolean}`);
test = boundary(200);
console.log(`If n = 200, the value is: ${bamboolean}`);
test = boundary(400);
console.log(`If n = 400, the value is: ${bamboolean}`);

/* EXERCISE 5
Write a function "strivify" which accepts a string.
It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

let strive = "Strive"; // declaring a var which will be added in the beginning of a string

const strivify = function (givenString) {
  if (givenString.startsWith("Strive")) {
    return givenString;
  } else {
    return strive.concat(givenString);
  }
};
let result = strivify(" is awesome");
console.log(
  `If the string doesn't begin with 'Strive', the result is: ${result}`
);
result = strivify("Strive is cool");
console.log(`If the string does begin with 'Strive', the result is: ${result}`);

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/
let checkResult; // declaring an empty variable, where we will store the value given by a function

function check3and7(foo) {
  if ((foo % 3 == 0 || foo % 7 == 0) && Math.sign(foo) === 1) {
    // checking remainder === 0 and math.sign checking if the number is positive. returns 1 or -1.
    checkResult = `The given value ${foo} is a multiple of 3 or 7`;
    console.log(checkResult);
  } else {
    checkResult = `The given value ${foo} is not a multiple of 3 or 7.`;
    console.log(checkResult);
  }
}
check3and7(7); // firing a function with different params
check3and7(10);
check3and7(-55);

/* EXERCISE 7
Write a function "reverseString" to programmatically reverse a given string (es.: Strive => evirtS).
*/

function reverseString(toBeReversed) {
  console.log(toBeReversed.split("").reverse().join(""));
}
/* 
    The split("") method splits a String object into an array of string by separating the string into sub strings.
    The reverse() method reverses an array in place. The first array element becomes the last and the last becomes the first.
    The join("") method joins all elements of an array into a string.
*/
reverseString("Strive");
reverseString("This one is tricky");

/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as a parameter.
*/

let checking = [];

function upperFirst(toBeCapitalized) {
  checking = toBeCapitalized.split(" ");
  for (let i = 0; i < checking.length; i++) {
    checking[i] = checking[i][0].toUpperCase() + checking[i].substr(1);
  }
  checking = checking.join(" ");
  console.log(checking);
}
upperFirst(
  "this is a string what supposed to have every first letter capitalized"
);
upperFirst("just another one");

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

const cutString = function (cuttedString) {
  return cuttedString.slice(1, -1); // slice from 1 (included, sliced just 0) to -1 (first from the end, exluded, so the last is sliced)
};
console.log(`balls became ${cutString("balls")}`);

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/
let randomArray = [];
let n = Math.floor(Math.random() * 10);

console.log(`The random value n is equal to: ${n}`);

const giveMeRandom = function (n) {
  for (let i = 0; i < n; i++) {
    randomArray.push(i);
    console.log("loop#" + i);
  }
  return randomArray;
};

console.log(giveMeRandom(n));

/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit in Eduflow.
*/
console.log("~~ Day 4 homeworks end here");
