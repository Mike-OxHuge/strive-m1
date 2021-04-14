console.log(
  " ~~~~~~~~~~~~~~~~~~ day 3 extra homework starts here ~~~~~~~~~~~~~~~~~~ "
);
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
Write the code to revert an array.
es:
[1, 3, 5] ==> [5, 3, 1]
*/

let extraHomeWorkArray = [1, 3, 5];
console.log(`unreversed array: ${extraHomeWorkArray}
reversed array: ${extraHomeWorkArray.reverse()}`);

/* EXERCISE 2
Write the code to get the maximum value in an array.
*/

console.log(
  `The highest value in the array is: ${Math.max(...extraHomeWorkArray)}`
);

/* EXERCISE 3
Write the code to get the minimum value in an array.
*/

console.log(
  `The lowest value in the array is: ${Math.min(...extraHomeWorkArray)}`
);

/* EXERCISE 4
Write the code to get only even numerical values in an array.
*/
extraHomeWorkArray.push("2"); // had to push some string to see if the code actually works
let filteredArray = [];
for (let i = 0; i < extraHomeWorkArray.length; i++) {
  if (typeof extraHomeWorkArray[i] === "number") {
    filteredArray.push(extraHomeWorkArray[i]);
  } else {
    console.log(
      "if you can see this message, that means that at least one of the values in the array wasn't a number"
    );
  }
}
console.log(filteredArray);

/* EXERCISE 5
Write the code to delete even entries from an array.
*/

filteredArray.push(2, 4, 6); // had to push some even numbers, because there was no even numbers in the array

let evenNumbersOnly = [];
for (let i = 0; i < filteredArray.length; i++) {
  if (filteredArray[i] % 2 === 0) {
    evenNumbersOnly.push(filteredArray[i]);
  } else {
    console.log(
      "if you can see this message, that means that at least one of the values wasn't even"
    );
  }
}

console.log(evenNumbersOnly);

/* EXERCISE 6
Write the code to remove all the vowels from a string.
*/

let normalString = "I am a string without vowels!";
let stringWithoutVowels = "";
function vowelessness() {
  stringWithoutVowels = normalString.replace(/[aeiou]/gi, "");
}
vowelessness();

console.log(
  `${normalString} became: ${stringWithoutVowels} because now it has no vowels!`
);

/* EXERCISE 7
Write the code to increase all the numeric values in a array by 1.
*/
let increasedNumbers = [];
for (let i = 0; i < evenNumbersOnly.length; i++) {
  increasedNumbers.push(evenNumbersOnly[i] + 1);
}
console.log(increasedNumbers);

/* EXERCISE 8 
Replace all the strings in an array with their length.
es.: ["strive", "is", "great"] => [6, 2, 5]
*/

let customArray = [
  "if",
  "you",
  "take",
  "my",
  "bass",
  "away",
  "i'll",
  "blow",
  "your",
  "silly",
  "face",
  "away",
];
let emptyArray = [];
for (let i = 0; i < customArray.length; i++) {
  emptyArray.push(customArray[i].length);
}
console.log(emptyArray);

/* WHEN YOU ARE FINISHED
Send the code on the Eduflow platform. In the next days we'll also learn how to use GIT
*/
console.log(
  " ~~~~~~~~~~~~~~~~~~ day 3 extra homework ends here ~~~~~~~~~~~~~~~~~~ "
);
