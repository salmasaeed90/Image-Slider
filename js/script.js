// code #1
// select All elem

var imgs = Array.from(document.querySelectorAll(".container img"));
var innerImg = document.getElementById("innerimg");
var fixedBox = document.getElementById("fixed-box");
var closeBtn = document.getElementById("closeBtn");
var leftBtn = document.getElementById("leftBtn");
var rightBtn = document.getElementById("rightBtn");
var currentIndex;

for (var i = 0; i < imgs.length; i++) {
  imgs[i].addEventListener("click", function (e) {
    var clickedImg = e.target;
    currentIndex = imgs.indexOf(clickedImg); //index target img
    var imgSrc = clickedImg.getAttribute("src");
    innerImg.setAttribute("src", imgSrc);
    fixedBox.classList.replace("d-none", "d-flex");
  });
}

function closeButton() {
  fixedBox.classList.replace("d-flex", "d-none");
}

function previousImg() {
  currentIndex--;
  if (currentIndex <= 0) {
    currentIndex = imgs.length - 1;
  }

  var prevImg = imgs[currentIndex];
  var imgSrc = prevImg.getAttribute("src");
  innerImg.setAttribute("src", imgSrc);
}
function nextImg() {
  currentIndex++;
  if (currentIndex == imgs.length) {
    currentIndex = 0;
  }

  var nextImg = imgs[currentIndex];
  var imgSrc = nextImg.getAttribute("src");
  innerImg.setAttribute("src", imgSrc);
}

leftBtn.addEventListener("click", function (e) {
  e.stopPropagation;
  previousImg();
});
rightBtn.addEventListener("click", function (e) {
  e.stopPropagation;
  nextImg();
});
closeBtn.addEventListener("click", function () {
  closeButton();
});

document.addEventListener("keyup", function (e) {
  if (e.key == "ArrowLeft") {
    previousImg();
  } else if (e.key == "ArrowRight") {
    nextImg();
  } else if (e.key == "Escape") {
    closeButton();
  }
});
