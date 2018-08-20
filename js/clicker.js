let catImg = document.querySelector(".cat_img");
let clickCounter = document.querySelector(".numClicks");

catImg.addEventListener("click", function() {
  clickCounter.innerHTML ++;
});
