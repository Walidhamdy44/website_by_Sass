// start carsowll
$(".template .owl-carousel").owlCarousel({
  loop: true,
  margin: 20,
  autoplay: true,
  autoplayTimeout: 3000,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 4,
      nav: true,
    },
  },
});

//

$(".rating .owl-carousel").owlCarousel({
  loop: true,
  margin: 20,
  autoplay: true,
  autoplayTimeout: 4000,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
      nav: true,
    },
  },
});

//

$(".insta .owl-carousel").owlCarousel({
  loop: true,
  rtl: true,
  autoplay: true,
  autoplayTimeout: 3000,
  margin: 20,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
      nav: true,
    },
  },
});

// start search section
let searchIcon = document.querySelector(".search-icon");
let searchclose = document.getElementById("close");
let searchclose2 = document.getElementById("close2");
let searchSec = document.querySelector(".search-bar");
searchIcon.onclick = function () {
  searchSec.classList.add("open");
};
searchclose.onclick = function () {
  searchSec.classList.remove("open");
};
searchclose2.onclick = function () {
  searchSec.classList.remove("open");
};

// start menu

let menuBtn = document.getElementById("menu-btn");
let menuClose = document.getElementById("menu-close");
let menu = document.getElementById("menu");

menuBtn.onclick = function () {
  menu.classList.toggle("close");
  menu.classList.toggle("open");
};
menuClose.onclick = function () {
  menu.classList.remove("open");
  menu.classList.add("close");
};
document.querySelectorAll(".menu li").forEach((e) => {
  e.onclick = function () {
    menu.classList.remove("open");
    menu.classList.add("close");
  };
});

// start scroolRevel
ScrollReveal({
  reset: false,
  distance: "60px",
  duration: 1800,
  delay: 1000,
});

ScrollReveal().reveal(
  ".landing .text , .landing .btns a , .main-title ,.cards .card:nth-child(2)",
  {
    origin: "left",
    delay: 200,
    interval: 200,
    scale: 0.85,
  }
);
// ScrollReveal().reveal(".cards .card:nth-child(4)", {
//   origin: "right",
//   delay: 1000,
//   interval: 200,
// });
ScrollReveal().reveal(".img-orignal , .cards .card:nth-child(3)", {
  origin: "top",
  delay: 1000,
  interval: 200,
  distance: "100px",
});
ScrollReveal().reveal(".landing .imgs .small-imgs img , .experienc .imgs img", {
  origin: "top",
  delay: 1000,
  interval: 200,
});
ScrollReveal().reveal(
  ".company .links .box ,.experienc .box ,.Intergation .box",
  {
    origin: "top",
    delay: 500,
    interval: 400,
    scale: 0.95,
    duration: 1500,
    opacity: 0,
  }
);
