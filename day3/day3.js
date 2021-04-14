console.log(
  " ~~~~~~~~~~~~~~~~~~ day 3 homework starts here ~~~~~~~~~~~~~~~~~~ "
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
Create an array containing the first 5 positive numbers.
*/

let myArray = [1, 2, 3, 4, 5];
console.log(myArray); // outputs numbers outta the array

/* EXERCISE 2
Create an object containing your name, surname, email address and age.
*/

let myself = {
  firstName: "Mike",
  lastName: "Litoris",
  email: "mikelitoris34@icloud.com",
  age: 27,
};

console.log(
  `Hello, my name is ${myself.firstName}, my last name is ${myself.lastName}, 
  I am ${myself.age} years old and you can send me a message via email: ${myself.email}`
); // a very fancy output

/* EXERCISE 3 
Add to the previously created object a boolean value to rappresent wheter you have or not a driving license.
*/

myself.haveDriverLicense = false;
console.log(myself); // outputs an object with a new key and value

/* EXERCISE 4
Remove from the previously created object the age property.
*/

delete myself.age;
console.log(myself); // outputs an object without the key age

/* EXERCISE 5
Create a second object with name, surname, email address and verify that this object has a different email address than the previous one.
*/

let cia = {
  name: "Central Intelligence",
  surname: "Agency",
  email: "cia_foia@ucia.gov",
};
let comparison = myself.email.toLowerCase() !== cia.email.toLowerCase(); // comparing the difference between emails
if (comparison) {
  console.log(`My email: ${myself.email} is not the same as cia's email: ${cia.email}.
    They're really different and this is: ${comparison}`);
}

/* EXERCISE 6
You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
Write an algorithm that calculates the total cost to charge the user with.
*/
let items = [
  {
    item: "bananas",
    price: 20,
  },
  {
    item: "watermelons",
    price: 30,
  },
  {
    item: "mangos",
    price: 40,
  },
]; // items in the shop

let shoppingCart = items[0].price + items[1].price + items[2].price; // items in the shopping cart
let totalShoppingCart = null;
let shipping = 10; // I don't really want to change this value, it feels a bit dodgy to change shipping cost.

if (shoppingCart < 50) {
  totalShoppingCart = shoppingCart + shipping;
  console.log(
    `Your purchase is lower than 50 (${totalShoppingCart}), so the shipping cost is ${shipping}`
  );
} else {
  totalShoppingCart = shoppingCart;
  console.log(
    `Your purchase is more than 50 (${totalShoppingCart}), so you've got a free shipping`
  );
}

console.log(
  `The order summary is ${totalShoppingCart}. You bought: ${items[0].item} and 
  ${items[1].item} and ${items[2].item}`
);

/* EXERCISE 7
You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

let isBlackFridayToday = true;
let discount = isBlackFridayToday ? 0.8 : 0; // 0.8 is 80% (20% discount gives us 80% remainder)

let totalCost = isBlackFridayToday ? shoppingCart * discount : shoppingCart;

if (totalCost < 50) {
  totalCost = totalCost + shipping;
  console.log(
    `Your purchase is lower than 50 (${totalCost}), so the shipping cost is ${shipping}`
  );
} else {
  totalCost = totalCost;
  console.log(
    `Your purchase is more than 50 (${totalCost}), so you've got a free shipping`
  );
}

console.log(`The order summary is: ${totalCost}, because black friday is: ${isBlackFridayToday}
and so you have 20% off for your order. You bought: ${items[0].item} and 
${items[1].item} and ${items[2].item}`); // how is that possible: to insert the code here BUT modify pervious answer? I hope I've done it right :)

/* EXERCISE 8
Create an object representing a car with properties like brand, model, licensePlate.
After you create the first car, clone it 5 times and change the licensePlate for each cloned car without affecting the original one.
*/
let car0 = {
  brand: "VW",
  model: "BEETLE",
  licensePlate: "EWW A BUG",
};
let car1 = Object.assign({}, car0);
let car2 = Object.assign({}, car0);
let car3 = Object.assign({}, car0);
let car4 = Object.assign({}, car0);

car1.licensePlate = "80085";
car2.licensePlate = "B8B8B8";
car3.licensePlate = "4 MY EGO";
car4.licensePlate = "BRUHHH";

console.log(`
 The first car plate: ${car0.licensePlate} 
 The second car plate:   ${car1.licensePlate} 
 The third car plate:  ${car2.licensePlate} 
 The fourth car plate:  ${car3.licensePlate} 
 The fifth car plate:   ${car4.licensePlate}
 And all the cars are: ${car0.brand} ${car0.model}
`); // I've done pretty similar stuff with Vue. It was v-for="car in cars" :key='car.i' and so I'd cycle through predefined array of objects. But here's a bunch of objects, not an array of them.

/* EXERCISE 9
Create a new array called carsForRent containing all the cars from the previous exercise.
*/

let carsForRent = [car0, car1, car2, car3, car4];
console.log(carsForRent);

/* EXERCISE 10
Remove the first and the last car from the carsForRent array.
*/

carsForRent.shift();
carsForRent.pop();
console.log(carsForRent);

/* EXERCISE 11
Print in the console the TYPES of the car variable, of its licensePlate and of the its brand properties.
*/

console.log(`The type of the car variable is: ${typeof car0}, 
the type of its licensePlate is: ${typeof car0.licensePlate},
the type of its brand is: ${typeof car0.brand}`);

/* EXERCISE 12
Create a new array called carsForSale and insert 3 cars in it.
Store in a variable totalCars the number of cars present in both carsForSale and carsForRent arrays.
*/

let carsForSale = [
  {
    brand: "Tesla",
    model: "Model X",
    licensePlate: "NIKOLA",
  },
  {
    brand: "TOYOTA",
    model: "Prius",
    licensePlate: "BU77FR0G",
  },
  {
    brand: "NISSAN",
    model: "GTR",
    licensePlate: "B0R1S",
  },
];
console.log(carsForSale);

let totalCars = carsForRent.length + carsForSale.length;
console.log(`total amount of cars: ${totalCars}`);

/* EXERCISE 13
Print in the console the data from each car in the carsForSale array.
*/

console.log(`
The first car is: ${carsForSale[0].brand} ${carsForSale[0].model} with a license plate of ${carsForSale[0].licensePlate}.
The second car is: ${carsForSale[1].brand} ${carsForSale[1].model} with a license plate of ${carsForSale[1].licensePlate}.
The third car is: ${carsForSale[2].brand} ${carsForSale[2].model} with a license plate of ${carsForSale[2].licensePlate}.
`);

/* WHEN YOU ARE FINISHED
Send the code on the Eduflow platform. In the next days we'll also learn how to use GIT
*/
console.log(" ~~~~~~~~~~~~~~~~~~ day 3 homework ends here ~~~~~~~~~~~~~~~~~~ ");
