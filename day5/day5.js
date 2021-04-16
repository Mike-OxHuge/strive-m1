console.log("~~~Day 5 solo challenge begins here");
/*
    ASSIGNMENT RULES
    - All the answers must be written in JavaScript
    - The solution must be pushed to the repository and be available for the tutors by the end of the day
    - You can ask for help, reach the Teaching Assistants if needed
    - You can google / use StackOverflow BUT we suggest you to use just the material provided
    - You can test your code in a separate file or de-commenting the single exercises in this one.
      You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
    - Complete as many exercise that you can
    - Publish them into your own GitHub account and upload repository link on Eduflow before 16.30 (Berlin Time) 
*/

//JS Basics

/* Ex.A
   Create a variable called "test" and assign a string to it.
*/
let test = "text as a string";
console.log(
  `The varbiale test has the value of: ${test} and its type is ${typeof test}`
);

/* Ex.B
    Create a variable called "sum" and assign to it the result of the sum between 10 and 20.
*/
let sum = 10 + 20;
console.log(
  `The variable sum has the value of ${sum} and its type is ${typeof sum}`
);

/* Ex.C 
    Create a variable called "random" and assign to it a random number between 0 and 20 (it should be randomly created at each execution).
*/
let random = Math.floor(Math.random() * 20 + 1);
console.log(`The random value is ${random} and its type is ${typeof random}`);

/* Ex.D
    Create a variable called "me" and assign to it an object containing the following information: name = your name, surname = your surname, age = your age.
*/
let me = {
  name: "Mike",
  surname: "Oxhuge",
  age: 27,
};
console.log(me);

/* Ex.E 
    Programmatically remove the age property from the previously create object.
*/
delete me.age;
console.log(me);

/* Ex.F 
   Programmatically add to the object me an array called "skills", containing the programming languages you know right now.
*/
me.skills = [];
me.skills.push("html", "css", "js", "vue");
console.log(me.skills);
/* Ex.G 
   Programmatically remove the last skill from the "skills" array inside the "me" object.
*/
me.skills.splice(-1); // also delete me.skills[3] would work, but it'd leave an empty slot in the array
console.log(me.skills);
// JS Functions
/* Ex.1
    Write a function called "dice"; it should randomize an integer number between 1 and 6.
*/
const dice = function (min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min));
};
console.log(`the random value between 1 and 6 is: ${dice(1, 6)}`);
/* Ex.2 
    Write a function called "whoIsBigger" which receives 2 numbers as parameters and returns the biggest one.
*/

const whoIsBigger = function (x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
};
let resultOne = dice(1, 65535);
let resultTwo = dice(1, 65535);

console.log(
  `The biggest number between function dice() (the value of ${resultOne}) and yet another function dice() (the value of ${resultTwo}) is ${whoIsBigger(
    resultOne,
    resultTwo
  )}`
);

/* Ex.3
    Write a function called "splitMe" which receives a string as a parameter and returns an array with every word in that string.
    Ex. splitMe("I love coding") => returns ["I", "Love", "Coding"]
*/

const splitMe = function (stringForSplit) {
  stringForSplit = stringForSplit.split(" ");
  return stringForSplit;
};

console.log(splitMe("There's a moose loose aboot this hoose"));
/* Ex.4
    Write a function called "deleteOne" which receives a string and a boolean as parameters. If the boolean value is true it should return the string without the first letter, otherwise it should remove the last one from it.
*/
const deleteOne = function (value, statement) {
  if (typeof statement === "boolean" && typeof value === "string") {
    if (statement) {
      value = value.slice(1);
      return value;
    } else {
      value = value.slice(0, -1);
      return value;
    }
  } else {
    console.log(`Incorrect data input: The ${statement} has to be boolean, it is ${typeof statement}; 
    The ${value} has to be string, it is ${typeof value}`);
  }
};
console.log(
  `The default string is 'moose', if the statement is 'true' it'll be ${deleteOne(
    "moose",
    true
  )}`
);
console.log(
  `The default string is 'moose', if the statement is 'false' it'll be ${deleteOne(
    "moose",
    false
  )}`
);

/* Ex.5
   Write a function called "onlyLetters" which receives a string as a parameter and returns it removing all the digits.
   Ex.: onlyLetters("I have 4 dogs")  => returns "I have  dogs"
*/
const onlyLetters = function (numberlessString) {
  numberlessString = numberlessString.replace(/[0-9]/gi, "");
  return numberlessString;
};
let givenString = "15 mooses aboot 7 hooses";
console.log(
  `The given string is "${givenString}" the function result: "${onlyLetters(
    givenString
  )}"`
);

/* Ex.6 
   Write a function called "isThisAnEmail" which receives a string as a parameter and returns true if the string is a valid email address.
*/
const isThisAnEmail = function (possiblyEmail) {
  let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (possiblyEmail.match(mailformat)) {
    return true;
  } else {
    return false;
  }
};
let exampleOne = isThisAnEmail("moose on the loose");
let exampleTwo = isThisAnEmail("moose-on@the.loose");
console.log(`
Is 'moose on the loose' a valid email? ${exampleOne};
Is 'moose-on@the.loose' a valid email? ${exampleTwo};
`);
/* Ex.7
   Write a function called "whatDayIsIt" that should return the current day of the week.
*/

const whatDayIsIt = function () {
  let date = new Date();
  let weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  let today = weekday[date.getDay()];
  console.log(`Today is: ${today}`);
};
whatDayIsIt();

/* Ex.8
    Write a function called "rollTheDices" which receives a number as a parameter.
    It should invoke the dice() function defined in Ex1 the specified amount of times,
    and return an object containing a "sum" property holding the sum of all values extracted
    and a "values" array containing the single values of the dicerolls themselves.
    Example: RollTheDices(3) => returns {
        sum: 10
        values: [3, 3, 4]
    }
*/

const rollTheDices = function (numberOfTimes) {
  let anArrayOfRandomNumbers = []; // creating empty array
  for (let i = 0; i < numberOfTimes; i++) {
    //looping the functions 'numberOfTimes' times
    anArrayOfRandomNumbers.push(dice(1, 6)); // pushing values given by function into the array
  }
  return anArrayOfRandomNumbers; // returning the array
};
let howManyTimes = 3; // here we can set how many times we want to roll the dice, I did as in an example: 3 times
let total = rollTheDices(howManyTimes); // creating an array which will store the data of fired function

let summary = total.reduce(function (a, b) {
  // the calculation itself
  return a + b;
});

console.log(total); // outputs an array

console.log(
  // outputs amount of random numbers and their sum
  `the sum of an array of ${total.length} random numbers is: ${summary}`
);

/* Ex.9
   Write a function called "howManyDays" which receives a date as a parameter and should return the number of days passed since that date.
*/

let customDate = new Date("04/01/2021"); // mm/dd/yyyy

const howManyDays = function (customDate) {
  let currentDate = new Date();
  let differenceInTime = currentDate.getTime() - customDate.getTime();
  let differenceInDays = differenceInTime / (1000 * 3600 * 24);
  console.log(
    `The differnce in days between ${currentDate} and ${customDate} is ${differenceInDays} days or ${Math.round(
      differenceInDays
    )} as a rounded value or ${Math.floor(
      differenceInDays
    )} as a rounded in a different way.`
  );
};
howManyDays(customDate);

/* Ex.10
   Write a function called "isTodayMyBirthday" which should return true if today's your birthday, false otherwise.
*/

const isTodayMyBirthday = function (anyOtherDay) {
  let today = new Date();
  let month = today.getMonth();
  let day = today.getDate();
  let isItToday;
  if (day === 15 && month === 3) {
    isItToday = true;
  } else {
    isItToday = false;
  }
  return isItToday;
};
let currentDay = new Date();

let check = isTodayMyBirthday(currentDay);
if (check) {
  console.log(`The value is ${check} it's MY BIRTHDAY!`);
} else {
  console.log(`The value is ${check} and it's not my birthday`);
}

// JS Arrays // Objs
// NOTE: movies array is moved over here!

const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/* Ex.11
   Write a function called "deleteProp" which receives an object and a string as parameters, and returns the given object after deleting its property named as the given string.
*/
let customObject = {
  who: "moose",
  what: "loose",
  where: "aboot this hoose",
  why: "god knows",
};
const deleteProp = function (obj, str) {
  delete obj[str];
  return (result = obj);
};

deleteProp(customObject, "why");
console.log(result);

/* Ex.12 
    Write a function called "olderMovie" which finds the oldest movie in the array provided at the end of this file.
*/
const olderMovie = function () {
  // this function is getting all the years from the array
  let years = [];
  for (let i = 0; i < movies.length; i++) {
    years.push(movies[i].Year);
  }
  return (smallestYear = Math.min.apply(Math, years)), (arrayOfYears = years); // and returns this array along with the smallest value in it
};
olderMovie();
console.log(typeof smallestYear + " " + smallestYear); // checking type and it's a number
// console.log(arrayOfYears);
smallestYear = String(smallestYear); // changing type to a string
console.log("Second call" + " " + typeof smallestYear + " " + smallestYear); // checking type, it's a string now
const oldestMovie = movies.filter((movie) => movie.Year === smallestYear); // filtering an original array by year === smallest year
console.log(oldestMovie);
/* Ex.13
    Write a function called "countMovies" which returns the number of movies contained in the array provided at the end of this file.
*/
const countMovies = function () {
  return (amountOfMovies = movies.length);
};
countMovies();
console.log(movies);
console.log(`The array countains ${amountOfMovies} movies`);

/* Ex.14
    Write a function called "onlyTheTitles" which creates an array with just the titles of the movies provided in the array at the end of the file.
*/
const onlyTheTitles = function () {
  let titles = [];
  for (let i = 0; i < movies.length; i++) {
    titles.push(movies[i].Title);
  }
  return (arrayOfTitles = titles);
};
onlyTheTitles();
console.log("Just titles:");
console.log(arrayOfTitles);
/* Ex.15
   Write a function called "onlyInThisMillennium" which returns only the movies produced in this millennium.
*/
const onlyInThisMillennium = function () {
  let movies2k = [];
  for (let i = 0; i < movies.length; i++) {
    if (Number(movies[i].Year) >= 2000) {
      movies2k.push(movies[i].Title + " " + movies[i].Year);
    }
  }
  return (thisMillenium = movies2k);
};
onlyInThisMillennium();
console.log("Movies made after 2000");
console.log(thisMillenium);
/* Ex.16 
    Write a function called "getMovieById" which receives an id as a parameter and returns the movie with the given id.
*/
const getMovieById = function (id) {
  return (selectedMovie = movies.filter((movie) => movie.imdbID === id));
};
getMovieById("tt4154796");
console.log(selectedMovie);

/* Ex.17
    Write a function called "sumAllTheYears" which returns the sum of all the years in which the movies provided have been produced.
*/
const sumAllTheYears = function () {
  let arrayOfYears = [];
  for (let i = 0; i < movies.length; i++) {
    arrayOfYears.push(Number(movies[i].Year));
  }
  let summary = arrayOfYears.reduce(function (a, b) {
    return a + b;
  });
  console.log(summary);
  return summary;
};
sumAllTheYears();

/* Ex.18
    Write a function called "searchByTitle" which receives a string as a parameter and returns all the movies which contain that string in the title.
*/
const searchByTitle = function (id) {
  return (selectedMovie = movies.filter((movie) => movie.Title === id));
};
searchByTitle("Lord of War");
console.log(selectedMovie);
/* Ex.19
    Write a function called "searchAndDivide" which receives a string as a parameter and returns an object;
    this object should contain an array called "match", made by all the movies which contain the given string in the title,
    and another array "unmatch" with all the remaining ones.
*/
const searchAndDivide = function (str) {
  let match = [];
  let unmatch = [];
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].Title.match(str)) {
      match.push(movies[i]);
    } else {
      unmatch.push(movies[i]);
    }
  }
  console.log(match);
  console.log(unmatch);
  return match, unmatch;
};
searchAndDivide("of");
/* Ex.20
   Write a function called "removeIndex" which receives a number as a parameter and returns the movies array without the element in the given position.
*/
const removeIndex = function (num) {
  delete movies[num];
  return (sliced = movies);
};
removeIndex(7);
console.log(sliced);

// [EXTRAS] JS Advanced

/* Ex.21
  Create a function called "halfTree" which receives a number as a parameter and builds an "*" half tree with the given height.
  Example:
  halfTree(3)
  *
  **
  ***
*/

/* Ex.22 
  Create a function called "tree" which receives a number as a parameter and builds an "*" tree with the given height.
  Example: 
  tree(3)
    *  
   *** 
  *****
*/

/* Ex.23
  Create a function called "isItPrime" that receives a number as a parameter and returns true if the given number is a prime number.
*/

/* This movies array is used throughout the exercises. Please don't change it :)  */
