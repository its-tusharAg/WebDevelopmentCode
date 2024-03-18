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

//50 projects in 50 days Udemy

const testimonialsContainer = document.querySelector('.testimonials-container');
const testimonial = document.querySelector('.testimonial');
const userImage = document.querySelector('.user-image');
const username = document.querySelector('.username');
const role = document.querySelector('.role');

const testimonials = [
  {
    name: 'Raghav Agarwal',
    position: 'Sap Programmer',
    photo: 'img/cartoon-img-3.jpg',
    text:
      'I joined the SD HANA course and to my surprise , it worked really well for me  .I already had the experience on SD but i was not confident for job switch . this institute has given my confidence back to me . Their one to one approach is the most needed in the industry and i did not find any other institute in the country who is providing such quality training',
  },
  {
    name: 'Saloni Sharma',
    position: 'SAP Analyst',
    photo: 'img/cartoon-img-4.png',
    text:
      "I have joined Accenture with very good hike and currently i am working with one of the US based giant brand in fashion industry . All thanks to Sir",
  },
  {
    name: 'Bhumi Patil',
    position: 'Assistant Consultant',
    photo: 'img/cartoon-img-5.png',
    text:
      "I used to be a sales executive when I decide to join SD Course. I was not very sure about the course and SAP itself; the institute first counseled me and then enrolled me for a training. They have helped me for interview, resume writing and preparing myself for interview.",
  },
]


let idx = 1;

function updateTestimonials(){
  const {name, position, photo, text} = testimonials[idx];
  
  testimonial.innerHTML = text;
  userImage.src = photo;
  username.innerHTML = name;
  role.innerHTML = position;
  
  idx++;
  
  if(idx > testimonials.length - 1){
    idx = 0;
  }
}

setInterval(updateTestimonials, 10000);

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

let calcScrollValue = () =>{
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =  document.documentElement.scrollHeight - document.documentElement.clientHeight;

  let scrollValue = Math.round((pos * 103) / calcHeight);

  if(pos > 100){
    scrollProgress.style.display = "grid";
  }
  else{
    scrollProgress.style.display = "none";
  }

  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#e67e22 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
}
window.onscroll = calcScrollValue;
window.onload = calcScrollValue;  
