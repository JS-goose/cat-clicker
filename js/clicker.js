let catImg = document.querySelector(".cat_img1");
let clickCounter = document.querySelector(".numClicks");

catImg.addEventListener("click", function() {
  clickCounter.innerHTML ++;
});
