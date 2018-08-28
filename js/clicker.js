// Global Variables
const numClicks = document.querySelector("#numClicks");
let catOne = document.querySelector(".gidget");
let catTwo = document.querySelector(".bethany");
let catThree = document.querySelector(".rocket");
let catFour = document.querySelector(".ginger");
let catFive = document.querySelector(".nala");
let imgDisplay = document.querySelector(".imgDisplay");
let catName = document.querySelector("#catName");

// Constructor
class Cat {
  constructor(name, img) {
    this.name = name;
    this.img = img;
    this.clicks = 0;
  }

  addClicks() {
    console.log("addClicks is working");
    this.numClicks++;
  }
}

catOne.addEventListener('click', function() {
  gidget = new Cat('Gidget', './img/gidget.jpg');
  imgDisplay.src = gidget.img;
  catName.innerHTML = gidget.name;
});

catTwo.addEventListener('click', function() {
  bethany = new Cat('Bethany', './img/bethany.jpg')
  imgDisplay.src = bethany.img;
  catName.innerHTML = bethany.name;
});