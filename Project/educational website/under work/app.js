let stBtn = document.querySelector(".st-btn");
let trBtn = document.querySelector(".tr-btn");
let trinerPg = document.querySelector(".trainer-page");
let studentPg = document.querySelector(".stud-page");



trBtn.addEventListener("click", () => {
    trinerPg.classList.remove("hide");
    studentPg.classList.add("hide");
})
stBtn.addEventListener("click", () => {
    trinerPg.classList.add("hide");
    studentPg.classList.remove("hide");
})
