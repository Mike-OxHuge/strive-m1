console.log("day10");
// 21) Given variable x = "John" and y = "Doe", write on the console log "John <> Doe"
let x = "John";
let y = "Doe";
console.log(`exercise 21: "John <> Doe"`);

// 22) Create an object with properties such name, surname, email
let obj = {
  name: "Benito",
  surname: "Mussolini",
  email: "presidente@pec.governo.it",
};

// 23) Delete Email from the previously created object
delete obj.email;

// 24) Create an array with 10 strings in it
let array = [];
for (let i = 1; i <= 10; i++) {
  array.push(String(i));
}

// 25) Print in the console every string in the previous array
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

// 26) Create an array with 100 random numbers in it
// creating 2 of them for an exercise 30
let arrayOfHundred = [];
let arrayOfHundred2 = [];
for (let i = 1; i <= 100; i++) {
  let n = Math.floor(Math.random() * 65535);
  let j = Math.floor(Math.random() * 65535);
  arrayOfHundred.push(Number(n));
  arrayOfHundred2.push(Number(j));
}

// 27) Wrote a function to get the MAX and the MIN from the previously created array
const maxOf = function () {
  let maxi = Math.max(...arrayOfHundred);
  console.log(maxi);
};
maxOf();

const minOf = function () {
  let mini = Math.min(...arrayOfHundred);
  console.log(mini);
};
minOf();

// 28) Create an array of arrays, in which every array has 10 random numbers
let arrayOfArrays = [
  (innerArray1 = []),
  (innerArray2 = []),
  (innerArray3 = []),
];
for (let i = 1; i <= 10; i++) {
  let x = Math.floor(Math.random() * 65535);
  let y = Math.floor(Math.random() * 65535);
  let z = Math.floor(Math.random() * 65535);
  arrayOfArrays[0].push(x);
  arrayOfArrays[1].push(y);
  arrayOfArrays[2].push(z);
}

// 29) Create a function that gets 2 arrays and returns the longest one
const longDongArray = function (a, b) {
  if (a.length > b.length) {
    console.log(a);
    return a;
  }
};
longDongArray(arrayOfArrays, arrayOfHundred);

// 30) Create a function that gets 2 arrays of numbers and returns the one with the higher sum of values
const higherSum = function (x, y) {
  let one = x.reduce((a, b) => a + b, 0);
  let two = y.reduce((a, b) => a + b, 0);
  let result;
  if (one > two) {
    result = one;
  }
  return result;
};
higherSum(arrayOfHundred, arrayOfHundred2);
// console.log(higherSum(arrayOfHundred, arrayOfHundred2));

// DOM
// 31) Get element with ID "container" from the page
let container = document.getElementById("container");

// 32) Get every "td" from the page
let everyTd = document.getElementsByTagName("td");

// 33) Create a cycle that prints the text inside every td of the page
for (let i = 0; i < everyTd.length; i++) {
  console.log(everyTd[i].innerText);
}

// 34) Write a function to change the heading of the page
const changeHeading = function (newText) {
  let heading = document.getElementById("heading");
  heading.innerText = newText;
};
changeHeading("Created heading for exercise 2 and changed for exercise 34");
