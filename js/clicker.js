// Global Variables
const numClicks = document.querySelector("#numClicks");
let catOne = document.querySelector(".gidget");
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
