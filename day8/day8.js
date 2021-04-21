console.log("day 8 homework starts here");

/* Create a CSS class for the task list item with a border, a bold text and a bigger font size */
let listItems = document.querySelectorAll("li");
for (let i = 0; i < listItems.length; i++) {
  listItems[i].classList.add("task-list-item");
}

/* EXERCISE 5: 
                Add a new task to the list.
                Suggestion:
                - Use document.getElementById to get the UL item and the input text
                - Use the document.createElement to create the new List Item
                - Append the child to the UL
*/
let ex5 = document.getElementById("newTask");
const addNewTask = function (param) {
  param = ex5.value;
  let taskList = document.getElementById("task-list");
  let newItem = document.createElement("li");
  newItem.innerText = param;
  if (newItem.innerText.length > 0) {
    taskList.appendChild(newItem);
    newItem.classList.add("task-list-item");
    ex5.value = "";
  } else {
    alert("can't add empty item!");
  }
};
/* EXERCISE 6: 
    Create a method "removeLast" which removes the last item from the task list
*/
// ain't done
const removeLast = function () {
  let taskList = document.getElementById("task-list").children;
  taskList[taskList.length - 1].remove();
};

/* EXERCISE 7: 
    Create a method "removeFirst" which removes the first item from the task list
*/
const removeFirst = function () {
  let taskList = document.getElementById("task-list").children;
  taskList[0].remove();
};

/* EXERCISE 8: 
     Create a method "getTasksAsArray" which returns, and prints to the console an array containing the tasks as string
*/
const getTasksAsArray = function () {
  let arrayOfTasks = [];
  let tasks = document.querySelectorAll("ul li");
  for (let i = 0; i < tasks.length; i++) {
    arrayOfTasks.push(tasks[i].innerText);
  }
  console.log(arrayOfTasks); // prints an array
  console.log(`The type of items in the array: ${typeof arrayOfTasks[0]}`); // check the type and it's a string
};
getTasksAsArray();

/* EXERCISE 9:
   Create a method "changeTaskBackgroundColor" which takes the color from the color picker with an 
   onchange event listener ad applies it as background to every list item
*/
let colorPicker = document.getElementById("colorPicker");

const changeTaskBackgroundColor = function (bgcolor) {
  let taskList = document.getElementById("task-list");
  bgcolor = colorPicker.value;
  taskList.style.backgroundColor = bgcolor;
};

/* EXTRA */

/* EXERCISE 10: 
 Create a method "bubbleSort()" which sort the task list alphabetically using the bubble sort algorithm
            
 Use your spare time to beautify your task list via CSS.

Suggestion:
- Break the code into many function for semplicity 
- Reuse the functions previously created
*/

const bubbleSort = function () {
  let arrayOfTasks = []; // creating an empty array
  let tasks = document.querySelectorAll("ul li"); // selecting li inside of ul
  for (let i = 0; i < tasks.length; i++) {
    arrayOfTasks.push(tasks[i].innerText.toLowerCase());
  } // looping through and pushing lowerCase strings to the new array
  arrayOfTasks.sort(); // sorting the array (by default it sorts alphabetically)
  tasks = document.querySelector("ul"); // reselecting the ul (not sure if it's neccessary)
  for (let i = 0; i < tasks.children.length; i + 1) {
    // i have no idea why it didn't work with i++
    tasks.children[i].remove();
  } // removing each children of the ul
  for (let i = 0; i < arrayOfTasks.length; i++) {
    // looping through an array of sorted lower cased strings
    let newItem = document.createElement("li"); // creating new li
    newItem.innerText = arrayOfTasks[i]; // innerText of a new li as a string [i] from the array
    tasks.appendChild(newItem); // appending new item
    newItem.classList.add("task-list-item", "capitalize"); // appliying styles
  }
};
