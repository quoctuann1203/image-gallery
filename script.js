"use strict";

const images = document.querySelectorAll(".image img");
const btnLeft = document.querySelector(".left");
const btnRight = document.querySelector(".right");
const btnClose = document.querySelector(".close");
const galleryImg = document.querySelector(".gallery__inner img  ");
const gallery = document.querySelector(".gallery");

let currentIndex = 0;

// Funtion
const left = function () {
  if (currentIndex === 0) {
    btnLeft.classList.add("hidden");
  } else {
    btnLeft.classList.remove("hidden");
  }
};

const right = function () {
  if (currentIndex === images.length - 1) {
    btnRight.classList.add("hidden");
  } else {
    btnRight.classList.remove("hidden");
  }
};

const close = function () {
  gallery.classList.remove("show");
};

const showGallery = function () {
  left();
  right();
  galleryImg.src = images[currentIndex].src;
  gallery.classList.add("show");
};

// Event

images.forEach((item, index) => {
  item.addEventListener("click", function () {
    currentIndex = index;
    showGallery();
  });
});

// Keydown Prev
btnClose.addEventListener("click", function () {
  close();
});

const arrowLeft = function() {
  if (currentIndex > 0) {
    currentIndex--;
    showGallery();
  }
}
const backLeft = btnLeft.addEventListener("click", function () {
  arrowLeft();
});

// Keydown Left
const arrowRight = function() {
  if (currentIndex < images.length - 1) {
    currentIndex++;
    showGallery();
  }
}

const goRight = btnRight.addEventListener("click", function () {
  arrowRight();
});


// Keydown
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    close();
  }
  if (e.key === "ArrowLeft" || e.key === "ArrowUp" ) {
    arrowLeft();
  }
  if (e.key === "ArrowRight" || e.key === "ArrowDown") {
    arrowRight();
  }
});

