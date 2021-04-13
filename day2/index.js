/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
- You can test your code in a separate file or de-commenting the single exercises in this one.
You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.

*/
/* EXERCISE 1
Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.
*/

/* ANSWER'S HERE */
let value = "value";
console.log(`The type of ${value} is a ${typeof value}`); // it's a string

value = 2;
console.log(`The type of ${value} is a ${typeof value}`); // now it's a number

value = undefined;
console.log(`The type of ${value} is a ${typeof value}`); // now it's undefined

value = ["", "", ""];
console.log(`The type of ${value} is a ${typeof value}`); // now it's an array of strings, but the type is an object

value = true;
console.log(`The type of ${value} is a ${typeof value}`); // now it's a boolean

value = [
  {
    value: "string",
    type: String,
  },
  {
    value: 1,
    type: Number,
  },
  {
    value: true,
    type: Boolean,
  },
  {
    value: undefined,
    type: undefined,
  },
  {
    value: null,
    type: Object,
  },
]; // and now it's an array of objects
/*
I honestly don't understand how can I 'write all answers in JS', but explain like to 12yo
*/

/* EXERCISE 2
Try to describe what a variable is, in your own words.
*/

/* like a box to store a value what we can change whenever we want */

/* EXERCISE 3
Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/

/* CODE'S HERE */
let valueOne = 12;
let valueTwo = "20";

let sum = valueOne + Number(valueTwo);

console.log(`The sum of ${valueOne} and ${Number(valueTwo)} is ${sum}`);

/* EXERCISE 4
Create a variable named x containing the number 12.
*/

/* CODE'S HERE */
let x = 12;

/* EXERCISE 5
Create a variable called name containing the string John Doe.
*/

/* CODE'S HERE */
let name = "John Doe";

/* EXERCISE 6
Execute a subtraction between the number 12 and the variable x, which is storing the value 12.
*/

/* CODE'S HERE */
let substraction = 12 - x;
console.log(
  `a subtraction between the number 12 and the variable x is ${substraction}`
);

/* EXERCISE 7
Create two variables: name1 and name2. name1 is equal to john, name2 is equal to John.
Verify that name1 is different from name2. 
Verify then, that name1 and name2 are equals if both lowercase (without changing the value of name2).
*/

/* CODE'S HERE */
let name1 = "john";
let name2 = "John";

let checkOne = name1 === name2;
let checkTwo = name1.toLowerCase === name2.toLowerCase;

console.log(`checkOne is: ${checkOne}, checkTwo(toLowerCase) is: ${checkTwo}`);

/* EXERCISE 8
Create a variable named x (its value must be less than 10). Write the code to print the literal value of x (ex.: if x is 1 print "one", if 5 print "five" etc.).
*/

/* CODE'S HERE */
//I already declared a variable x, so this time is going to be y
let y = Math.floor(Math.random() * 9);
console.log(
  "The random value is: " +
    y +
    " " +
    " " +
    "and its type is: " +
    typeof y +
    ", " +
    "apparently"
);
if (y === 1) {
  console.log(`the value of ${y} is one`);
} else if (y === 2) {
  console.log(`the value of ${y} is two`);
} else if (y === 3) {
  console.log(`the value of ${y} is three`);
} else if (y === 4) {
  console.log(`the value of ${y} is four`);
} else if (y === 5) {
  console.log(`the value of ${y} is five`);
} else if (y === 6) {
  console.log(`the value of ${y} is six`);
} else if (y === 7) {
  console.log(`the value of ${y} is seven`);
} else if (y === 8) {
  console.log(`the value of ${y} is eight`);
} else {
  console.log(
    `the value of ${y} is supposed to be nine. because there's nothing else left`
  );
}

/* EXERCISE 9
[Extra] Insert a value in a variable based on the resut of a ternary if (topic not covered during lesson, try to search it by yourself, tomorrow morning we'll discuss it together ;) )
*/

/* CODE'S HERE */
// I am not sure I am getting it right, but let's see
let correction = 9 - y;
if (y < 9) {
  result = y + correction;
}
console.log(`This value has to be NINE: ${result}, am I doing it right?`);

/* WHEN YOU ARE FINISHED
Upload the .js file on Eduflow before 5PM CET. In the next days we'll also learn how to use GIT!
*/
