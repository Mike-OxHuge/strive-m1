console.log("homework starts here");
/* EXERCISE 1
Write a function for changing the title of the document in something else.
*/
let ex1 = document.getElementById("ex1");
let ex1title = document.getElementById("ex1title");
let ex1text = document.getElementById("ex1text");
ex1text.value = "Write a new title here"; // can be written in HTML
const changeTitle = function (newTitle) {
  ex1title.innerText = newTitle;
};
ex1.onclick = function () {
  ex1title.innerText = ex1text.value;
};

/* EXERCISE 2
Write a function for changing the class of the title of the page in "myHeading".
*/
let ex2 = document.getElementById("ex2");
let ex2heading = document.getElementById("ex2heading");
let isEx2Changed = false;
const addClassToTitle = function () {
  if (!isEx2Changed) {
    ex2heading.classList.add("myHeading");
  } else {
    ex2heading.classList.remove("myHeading");
  }
  isEx2Changed = !isEx2Changed;
};
ex2.onclick = function () {
  addClassToTitle();
};

/* EXERCISE 3
Write a function for changing the text of only the p which are children of a div.
*/
let ex3 = document.getElementById("ex3");
let newP = document.querySelector("div p");
let isEx3Changed = false;
const changePcontent = function () {
  if (!isEx3Changed) {
    newP.innerText =
      "THE LOREM IS GONE WHAT ARE WE GONNA DO NOW, BRING IT BACK PLEASE";
  } else {
    newP.innerText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea autem
    magnam officiis a laudantium voluptatibus minima et expedita sed
    blanditiis eos hic quisquam mollitia vel, aliquid architecto, aliquam
    quibusdam suscipit!`;
  }
  isEx3Changed = !isEx3Changed;
};
ex3.onclick = function () {
  changePcontent();
};

/* EXERCISE 4
Write a function for changing the destination of every link to https://www.google.com
*/
let ex4 = document.getElementById("ex4");
let links = document.querySelectorAll("li a");
let isEx4Changed = false;
let defaultLinks = [
  "https://yahoo.com",
  "https://www.aol.com",
  "https://www.microsoft.com",
];
const changeUrls = function () {
  if (!isEx4Changed) {
    for (let i = 0; i < links.length; i++) {
      links[i].href = "https://google.com";
      links[i].innerHTML = "https://google.com";
    }
  } else {
    for (let i = 0; i < links.length; i++) {
      for (let j = 0; j < defaultLinks.length; j++) {
        links[i].href = defaultLinks[i];
        links[i].innerHTML = defaultLinks[i];
      }
    }
  }
  isEx4Changed = !isEx4Changed;
};
ex4.onclick = function () {
  changeUrls();
};
/* EXERCISE 5
Write a function for adding a new item in the second list.
*/
let ex5 = document.getElementById("ex5");
let ex5text = document.getElementById("ex5text");
// ex5text.value = "Input new item"; // can be written in HTML
let newElement = document.querySelector(".new-list");

const addToTheSecond = function (content) {
  let newItem = document.createElement("li");
  content = ex5text.value;
  newItem.innerText = content;
  newElement.appendChild(newItem);
};
ex5.onclick = function () {
  addToTheSecond(ex5text);
};

/* EXERCISE 6
Write a function for adding a second paragraph to the div.
*/
let ex6 = document.getElementById("ex6");
let ex6div = document.getElementById("ex6div");
let ex6input = document.getElementById("ex6input");
const addParagraph = function (content) {
  content = ex6input.value;
  let newParagraph = document.createElement("p");
  newParagraph.innerText = content;
  ex6div.appendChild(newParagraph);
  console.log(ex6div);
};
ex6.onclick = function () {
  addParagraph();
};

/* EXERCISE 7
Write a function for making the first UL disappear.
*/
let ex7 = document.getElementById("ex7");
let ex7div = document.querySelector("#ex7");
let ex7uls = document.querySelectorAll("#ex7 ul");
let isRemoved = false;
const firstUlDisappear = function () {
  if (!isRemoved) {
    ex7div.removeChild(ex7uls[0]);
  } else {
    ex7div.appendChild(ex7uls[0]);
  }
  isRemoved = !isRemoved;
};
ex7.onclick = function () {
  firstUlDisappear();
};

/* EXERCISE 8
Write a function for making the background of every UL green.
*/
let ex8 = document.getElementById("ex8");
let allTheUls = document.querySelectorAll("ul");
let isColored = false;
const paintItGreen = function () {
  if (!isColored) {
    for (let i = 1; i < allTheUls.length; i++) {
      allTheUls[i].style.backgroundColor = "green";
    }
  } else {
    for (let i = 1; i < allTheUls.length; i++) {
      allTheUls[i].style.backgroundColor = "";
    }
  }
  isColored = !isColored;
};
ex8.onclick = function () {
  paintItGreen();
};

/* EXERCISE 9
Make the heading of the page change color every time the user clicks on it.
*/
let ex9 = document.getElementById("ex9");
let isEx9Changed = false;
const makeItClickable = function () {
  if (!isEx9Changed) {
    ex9.style.color = "purple";
  } else {
    ex9.style.color = "";
  }
  isEx9Changed = !isEx9Changed;
};
ex9.onclick = function () {
  makeItClickable();
};

/* EXERCISE 10
Change the footer text with something else when the user clicks on it.
*/
let ex10 = document.getElementById("ex10");
let footerText = document.getElementById("footer-text");
let isFooterChanged = false;
const changeFooterText = function () {
  window.scrollBy({
    top: window.innerHeight,
    behavior: "smooth",
  });
  if (!isFooterChanged) {
    footerText.innerText = "The new text of the footer";
  } else {
    footerText.innerText =
      "The old text of the footer. Well not really old, the original one was lorem, but screw it, let's make a new-old text.";
  }
  isFooterChanged = !isFooterChanged;
};
ex10.onclick = function () {
  changeFooterText();
};

/* EXERCISE 11
Attach an event listener to the input field in the page for console logging its value just after any keystroke.
*/

const inputField = document.getElementById("input-field");
inputField.addEventListener("keyup", function (event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // keyCode is deprecated, but it works.
    console.log(inputField.value);
  }
});

/* EXERCISE 12
Create a new welcome alert message when the page successfully loads.
*/

window.onload = function () {
  alert("welcome to my homework");
};

/* EXERCISE 13
Use HTML5 tags to divide the content of the page in a more semantic way.
*/
