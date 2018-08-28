// Global Variables
let numClicks = document.querySelector("#numClicks");
let catOne = document.querySelector(".gidget");
let catTwo = document.querySelector(".bethany");
let catThree = document.querySelector(".rocket");
let catFour = document.querySelector(".ginger");
let catFive = document.querySelector(".nala");
let imgDisplay = document.querySelector(".imgDisplay");
let catName = document.querySelector("#catName");
let catClicker = document.querySelector("#catClicker");

// Constructor
class Cat {
  constructor(name, img) {
    this.name = name;
    this.img = img;
    this.clicks = 0;
  }

  addClicks() {
    console.log("addClicks is working");
    this.clicks++;
  }
}

catOne.addEventListener("click", function() {
  gidget = new Cat("Gidget", "./img/gidget.jpg");
  imgDisplay.src = gidget.img;
  numClicks.innerHTML = 0;
  gidget.clicks = 0;
  catName.innerHTML = gidget.name;

  catClicker.onclick = function() {
    gidget.addClicks();
    numClicks.innerHTML = gidget.clicks;
  }

});

catTwo.addEventListener("click", function() {
  // let catClicker = document.querySelector(".imgDisplay");
  bethany = new Cat("Bethany", "./img/bethany.jpg");
  imgDisplay.src = bethany.img;
  numClicks.innerHTML = 0;
  bethany.clicks = 0;
  catName.innerHTML = bethany.name;

  catClicker.onclick = function() {
    bethany.addClicks();
    numClicks.innerHTML = bethany.clicks;
  }

});
