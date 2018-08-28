// Global Variables
const numClicks = document.querySelector("#numClicks");
let catOne = document.querySelector(".gidget");
let catTwo = document.querySelector(".bethany");
let imgDisplay = document.querySelector(".imgDisplay");
let catName = document.querySelector(".catName");

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
  const gidget = new Cat('Gidget', './img/gidget.jpg');
  imgDisplay.src = gidget.img;
});

catTwo.addEventListener('click', function() {
  const bethany = new Cat('Bethany', './img/bethany.jpg')
  imgDisplay.src = bethany.img;
});