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

gidget = new Cat("Gidget", "./img/gidget-min.jpg");
catOne.addEventListener("click", function() {
  // Image courtesy of Erik-Jan Leusink on https://www.unsplash.com
  imgDisplay.src = gidget.img;
  numClicks.innerHTML = gidget.clicks;
  catName.innerHTML = gidget.name;

  catClicker.onclick = function() {
    gidget.addClicks();
    numClicks.innerHTML = gidget.clicks;
  };
});

bethany = new Cat("Bethany", "./img/bethany-min.jpg");
catTwo.addEventListener("click", function() {
  // Image courtesy of Gabriel Rodriguez on https://www.flickr.com/photos/chewie/2290467335
  imgDisplay.src = bethany.img;
  numClicks.innerHTML = bethany.clicks;
  catName.innerHTML = bethany.name;

  catClicker.onclick = function() {
    bethany.addClicks();
    numClicks.innerHTML = bethany.clicks;
  };
});

rocket = new Cat("Rocket", "./img/rocket-lucija-ros-536041-min.jpg");
catThree.addEventListener("click", function() {
  // Image courtesy of Lucija Ros on https://www.unsplash.com
  imgDisplay.src = rocket.img;
  numClicks.innerHTML = rocket.clicks;
  catName.innerHTML = rocket.name;

  catClicker.onclick = function() {
    rocket.addClicks();
    numClicks.innerHTML = rocket.clicks;
  };
});

ginger = new Cat("Ginger", "./img/ginger-berkeli-alashov-568352-min.jpg");
catFour.addEventListener("click", function() {
  // Image courtesy of Berkeli Alashov on https://www.unsplash.com
  imgDisplay.src = ginger.img;
  numClicks.innerHTML = ginger.clicks;
  catName.innerHTML = ginger.name;

  catClicker.onclick = function() {
    ginger.addClicks();
    numClicks.innerHTML = ginger.clicks;
  };
});

nala = new Cat("Nala", "./img/nala-xenia-bogarova-422041-min.jpg");
catFive.addEventListener("click", function() {
  // Image courtesy of Xenia Bogarova on https://www.unsplash.com
  imgDisplay.src = nala.img;
  numClicks.innerHTML = nala.clicks;
  catName.innerHTML = nala.name;

  catClicker.onclick = function() {
    nala.addClicks();
    numClicks.innerHTML = nala.clicks;
  };
});
