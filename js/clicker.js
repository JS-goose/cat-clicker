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
    this.clicks++;
  }
}

catOne.addEventListener("click", function() {
  // Image courtesy of Erik-Jan Leusink on https://www.unsplash.com
  gidget = new Cat("Gidget", "./img/gidget-min.jpg");
  imgDisplay.src = gidget.img;
  numClicks.innerHTML = 0;
  gidget.clicks = 0;
  catName.innerHTML = gidget.name;

  catClicker.onclick = function() {
    gidget.addClicks();
    numClicks.innerHTML = gidget.clicks;
  };
});

catTwo.addEventListener("click", function() {
  // Image courtesy of Gabriel Rodriguez on https://www.flickr.com/photos/chewie/2290467335
  bethany = new Cat("Bethany", "./img/bethany-min.jpg");
  imgDisplay.src = bethany.img;
  numClicks.innerHTML = 0;
  bethany.clicks = 0;
  catName.innerHTML = bethany.name;

  catClicker.onclick = function() {
    bethany.addClicks();
    numClicks.innerHTML = bethany.clicks;
  };
});

catThree.addEventListener("click", function() {
  // Image courtesy of Lucija Ros on https://www.unsplash.com
  rocket = new Cat("Rocket", "./img/rocket-lucija-ros-536041-min.jpg");
  imgDisplay.src = rocket.img;
  numClicks.innerHTML = 0;
  rocket.clicks = 0;
  catName.innerHTML = rocket.name;

  catClicker.onclick = function() {
    rocket.addClicks();
    numClicks.innerHTML = rocket.clicks;
  };
});
