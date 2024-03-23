// let btns = document.querySelectorAll("button");
// btn.onclick = function () {
//     console.log("it clicked");
// };
// btn.onclick = () => {
// alert("it clicked")
// console.log("it clicked");
// };


// for(btn of btns) {
//     // btn.onclick = () => {
//     //     alert("Halwa hai dosto");
//     // }
//     btn.onclick = sayHelo;
//     btn.onmouseenter = () => {
//         console.log("hover hooooo rha")
//     }
// }
// function sayHelo() {
//     console.log("Hello");
// }

// eventListerner
// for(btn of btns) {
//     btn.addEventListener("click", () => {
//         console.log("You clicked it");
//     })
//     btn.addEventListener("click", sayNme);
//     btn.addEventListener("dblclick", rlNum);
// }

// function sayNme() {console.log("Tushar")};
// function rlNum() {console.log(45)};

// random color generator

// let btn = document.querySelector("button");
// let h1 = document.querySelector("h1");
// let p = document.querySelector("p");

// btn.addEventListener("click", () => {
//     h1.innerText = getRandomColor();
//     p.innerText = "";
//     p.style.backgroundColor = getRandomColor();
// })

// function getRandomColor() {
//     let red = Math.floor(Math.random()*255);
//     let green = Math.floor(Math.random()*255);
//     let blue = Math.floor(Math.random()*255);

//     let color = `rgba(${red}, ${green}, ${blue})`;
//     return color;
// }

// this code
// let h1 = document.querySelector("h1");
// let h3 = document.querySelector("h3");
// let p = document.querySelector("p");
// let btn = document.querySelector("button");

// function bgChange() {
//     this.style.backgroundColor = "blue";
// }

// h1.addEventListener("click", bgChange);
// h3.addEventListener("click", bgChange);
// p.addEventListener("click", bgChange);
// btn.addEventListener("click", bgChange);
// h1.addEventListener("dblclick", (e) => {
//     console.log(e);
// })

// keyboard events

// inp = document.querySelector("input");
// inp.addEventListener("keydown", () =>{
//     console.log("key is prasses")
// })
// inp.addEventListener("keydown", (e) =>{
//     console.log("Key =", e.key, "code =", e.code);
// })

// form event
let form = document.querySelector("form");
// let input = document.querySelector("input");

// form.addEventListener("submit", () => {
//     event.preventDefault();
//     alert("your form is submited");
// })

// code to extract data from form

// form.addEventListener("submit", () => {
//     event.preventDefault();
//     let inp = document.querySelector("input");
//     // console.dir(inp.innerText);
//     // console.dir(inp.value);
//     let user = document.querySelector("#user");
//     let pass = document.querySelector("#pass");
//     console.log(user.value);
//     console.log(pass.value);
// })

// change event
// form.addEventListener("submit", () => {
//     event.preventDefault();})
//     let user = document.querySelector("#user");
//     // for change event
//     form.addEventListener("change", () => {
//         console.dir(user.value)
//     })
//// for input event
//     user.addEventListener("input", () => {
//         console.dir(user.value)
//     })


// pdf questions

// q2
let body = document.querySelector("body")
let btn = document.createElement("button");
body.append(btn);
btn.innerText = "Click Me!"
btn.addEventListener("click", () => {
    btn.style.backgroundColor = "green"
})

// q3
let h2 = document.querySelector("h2");
let inp = document.querySelector("#nmINp");

inp.addEventListener("input", () => {
    // console.log(inp.value)
    h2.innerText = inp.value;
})


