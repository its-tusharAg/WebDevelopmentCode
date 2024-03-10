// $(document).ready(function () {
//   $(".slider").slick({
//     arrows: false,
//     dots: true,
//     appendDots: ".slider-dots",
//     dotsClass: "dots",
//   });

//   let hamburger = document.querySelector(".hamburger");
//   let times = document.querySelector(".times");
//   let mobileNav = document.querySelector(".mobile-nav");
//   hamburger.addEventListener("click", function () {
//     mobileNav.classList.add("open");
//   });
//   times.addEventListener("click", function () {
//     mobileNav.classList.remove("open");
//   });
// });

// code to change conntact us page
let trBtn = document.querySelector("#train-btn");
let stBtn = document.querySelector("#stud-btn");
let stdForm = document.querySelector("#std-form");
let trForm = document.querySelector("#trai-form");

trBtn.addEventListener("click", () => {
  trForm.classList.remove("hide");
  stdForm.classList.add("hide");
});
stBtn.addEventListener("click", () => {
  trForm.classList.add("hide");
  stdForm.classList.remove("hide");
});
// // infinite slider

// let copy = document.querySelector(".logos-slide").cloneNode(true);
// document.querySelector(".logos").appendChild(copy);
