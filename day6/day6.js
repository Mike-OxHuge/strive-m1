console.log(
  "full output can be seen over here: https://strive-m1-homeworks.netlify.app/"
);
// You have been assigned to the creation of a Smartphone Shop Website. The homepage you're about to write is just a showcase of the products of the shop with some extra information. No shopping cart / checkout features are required.

// Complete exercises from 1 to 6 with just plain HTML.

// EX1.: Add an h1 tag with the name of your shop

// EX2.: Add a TABLE with the top 5 products of your shop

// EX3.: Insert for each product an image, a title, a description and a price

// EX4.: Add links to existing Amazon products for each item in the table

// EX5.: Add a footer with the address and the name of your shop

// EX6.: Add a message board where the user can type a message in it (no real posting/saving features required!)

// EXTRA (use JavaScript code here)

// EX7.: Write a function to change the h1 text

// EX8.: Write a function to change the page background color

// EX9.: Write a function to change the footer address with a fake one

// EX10.: Write a function to add a CSS class to every Amazon link

// EX11: Write a function to toggle a CSS class for all the images in the table; that class should set the visibility of the image

// EX12: Write a function to color the price of each product in a different one every time it's invoked

// Get the modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// ex 7
let ex7 = document.getElementById("ex7");
let ex7h1 = document.getElementById("ex7h1");
let ex7h1Change = true;
ex7.onclick = function () {
  ex7h1.innerText = ex7h1Change ? "Day 6, but now changed" : "Day 6";
  ex7h1Change = !ex7h1Change;
};

// ex 8
let ex8 = document.getElementById("ex8");
let ex8body = document.getElementById("ex8body");
let ex8change = true;
ex8.onclick = function () {
  ex8body.style.backgroundColor = ex8change ? "#a52a2a73" : "#0000ff5b";
  ex8change = !ex8change;
};

// ex 9
let ex9 = document.getElementById("ex9");
let ex9footer = document.getElementById("ex9footer");
let ex9change = true;
ex9.onclick = function () {
  ex9footer.innerText = ex9change
    ? "Fake address"
    : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, corrupti?";
  ex9change = !ex9change;
};

// ex 10 (a bit broken)
// it does change the style, but I can't revert it.
let ex10 = document.getElementById("ex10");
let ex10addClass = document.querySelectorAll("td a");
let ex10change = true;
ex10.onclick = function () {
  if (ex10change) {
    for (let i = 0; i < ex10addClass.length; i++) {
      ex10addClass[i].classList.add("new-class");
    }
  } else {
    for (let i = 0; i < ex10addClass.length; i++) {
      ex10addClass[i].classList.add("old-class");
    }
  }
  ex10change = !ex10change;
};

// ex 11
let ex11 = document.getElementById("ex11");
let toggleVisibitiy = document.querySelectorAll("img");
let isVisible = true;
ex11.onclick = function () {
  if (isVisible) {
    for (let i = 0; i < toggleVisibitiy.length; i++) {
      toggleVisibitiy[i].style.display = "none";
    }
  } else {
    for (let i = 0; i < toggleVisibitiy.length; i++) {
      toggleVisibitiy[i].style.display = "block";
    }
  }
  isVisible = !isVisible;
};

// EX12: Write a function to color the price of each product in a different one every time it's invoked
// can't make it with a loop :)
let ex12 = document.getElementById("ex12");
// let changePriceColor = document.querySelectorAll("#price");
let price0 = document.querySelector("#price0");
let price1 = document.querySelector("#price1");
let price2 = document.querySelector("#price2");
let price3 = document.querySelector("#price3");
let price4 = document.querySelector("#price4");
let colorization = true;
ex12.onclick = function () {
  if (colorization) {
    price0.style.color = "red";
    price1.style.color = "blue";
    price2.style.color = "yellow";
    price3.style.color = "green";
    price4.style.color = "purple";
    // for (let i = 0; i < changePriceColor.length; i++) {
    //   changePriceColor[i].style.color = "red";
    // }
  } else {
    price0.style.color = "black";
    price1.style.color = "black";
    price2.style.color = "black";
    price3.style.color = "black";
    price4.style.color = "black";
    // for (let i = 0; i < changePriceColor.length; i++) {
    //   changePriceColor[i].style.color = "blue";
    // }
  }
  colorization = !colorization;
  //   console.log(changePriceColor);
};
