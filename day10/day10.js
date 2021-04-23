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

// 35) Write a function to add an extra row to the table
const addRow = function () {
  let table = document.getElementById("table");
  let newTr = document.createElement("tr");
  newTr.innerHTML = `<td colspan="5">New row created for exercise 35</td>`;
  table.appendChild(newTr);
};
addRow();

// 36) Write a function to add the class "test" to each row in the table
const addClass = function () {
  let eachRow = document.getElementsByTagName("tr");
  for (let i = 0; i < eachRow.length; i++) {
    eachRow[i].classList.add("test");
  }
};
addClass();

// 37) Write a function to add a red background to every link in the page
const addBackground = function () {
  let everyLink = document.getElementsByTagName("a");
  for (let i = 0; i < everyLink.length; i++) {
    everyLink[i].style.backgroundColor = "red";
  }
};
addBackground();

// 38) Console log "Page loaded" when the page is correctly loaded
window.onload = function () {
  console.log("Page loaded");
};

// 39) Write a function to add new items to a UL
const addToUl = function () {
  let ul = document.getElementById("ul");
  let li = document.createElement("li");
  li.innerText = "New element of UL for exercise 39";
  ul.appendChild(li);
};
addToUl();

// 40) Write a function to empty a list
const emptyTheList = function () {
  let ol = document.getElementById("ol");
  let li = document.createElement("li");
  li.innerText =
    "I had to remove this list for an exercise 40, but I am pushing this element to sorta keep the progress of exercise 3";
  ol.innerHTML = "";
  ol.appendChild(li);
};
emptyTheList();

// EXTRA
// 41) Add an eventListener to alert when the mouse is over a link, displaying the URL
// couldn't really manage it, the page is full of links (remember, every picture has a link!)
// so if I fire an alert with URL the page becomes totally screwed. And I don't want to deal with
// tooltips in vanilla
// so here's inserting before the anchor itself. And writes in the console
// I didn't like this exercise :(
let everyLink = document.getElementsByTagName("a");
let somewhere = document.getElementsByTagName("a");
console.log(somewhere);
for (let i = 0; i < everyLink.length; i++) {
  everyLink[i].addEventListener(
    "mouseover",
    function (event) {
      let url = everyLink[i].getAttribute("href");
      let block = document.createElement("span");
      block.innerText = url;
      somewhere[i].parentElement.insertBefore(block, everyLink[i]);
      event.target.classList.add("exercise41");
      //   alert(`The URL IS: ${url}`);
      console.log(`The URL IS: ${url}`);
    },
    false
  );
}

// 42) Add a button to hide every image on the page
let button = document.createElement("button");
let isHidden = false;
button.innerText = "hide all the images";
let intersection = document.getElementById("span").parentElement;
intersection.appendChild(button);

button.onclick = function hideImages() {
  let images = document.getElementsByTagName("img");
  if (!isHidden) {
    for (let i = 0; i < images.length; i++) {
      images[i].classList.add("hidden");
      // could be done with images[i].style.display = 'none'
      button.innerText = "show all the images";
    }
  } else {
    for (let i = 0; i < images.length; i++) {
      images[i].classList.remove("hidden");
      // could be done with images[i].style.display = 'block'
      button.innerText = "hide all the images";
    }
  }
  isHidden = !isHidden;
};

// 43) Add a button to hide and show the table from the page
// here I'll create an HTML button
let button4table = document.getElementById("button4table");
let isTableHidden = false;
button4table.onclick = function hideTheTable() {
  let table = document.getElementById("table");
  if (!isTableHidden) {
    table.classList.add("hidden");
    button4table.innerText = "Show the Table";
  } else {
    table.classList.remove("hidden");
    button4table.innerText = "Hides the Table";
  }
  isTableHidden = !isTableHidden;
};

// 44) Write a function to sum every number inside the TD (if the content is numeric)
// something about match and/or find and/or filter all those values and then .reduce
// 45) Delete the last letter from the title each time the user clicks on it
// 46) Change a single TD background color when the user clicks on it
// 47) Add a button DELETE, on click it should delete a random TD from the page
// 48) Add a pink border to a cell when the mouse is over it
// 49) Write a function to add a table with 4 rows and 3 columns programmatically
// 50) Write a function to remove the table from the page
// naaaah, enough for me :) I can taste vanilla in my mouth.
