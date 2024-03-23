// console.log("Hello world");
// console.log(window);
// console.log(document);
// console.dir(document);
// console.dir(document.all);
// document.all[8].innerText = "Tushar"; 

// let mainImg = document.getElementById("main-img");
// console.dir(mainImg);
// mainImg.src = "https://upload.wikimedia.org/wikipedia/en/b/bd/Issue252.jpg";

// let oldImg = document.getElementsByClassName("old-img");
// console.dir(oldImg);

// for(let i=0; i<oldImg.length; i++){
//     oldImg[i].src = "https://upload.wikimedia.org/wikipedia/en/b/bd/Issue252.jpg";
// }
// let para = document.getElementsByTagName("p");
// console.dir(para)
// para[0].innerText = "Hala hai dosto";
// para[1].innerText = "Hala hai dosto";

// let h1Element = document.querySelector("h1");
// h1Element.innerText = "Tushar";
console.dir(document.querySelectorAll("div p"))

let bol = document.querySelector("h1");
// console.log(bol.innerText)
// bol.innerText = "<b>Halw</b>";
// bol.innerHTML = "<b>Halw</b>";
// console.log(bol.innerText);
bol.innerHTML = `<u>${bol.innerText}</u>`

// set and get attributes
let img = document.querySelector("img");
let imgAtr = img.getAttribute("id");
console.dir(img.style);
console.log(img.style);
img.setAttribute("src", "https://upload.wikimedia.org/wikipedia/en/b/b3/Spider-Man_characters.jpeg")

let hed = document.querySelector("h1");
// hed.style.color = "green" 
// hed.style.backgroundColor = "yellow" 

let ankr = document.querySelectorAll(".personal-info a");
for(let i=0; i<ankr.length; i++){
    ankr[i].style.color = "yellow";
}

console.dir(hed.classList);
hed.classList.add("green");
hed.classList.remove("green");
console.log(hed.classList.contains("halwa"));
console.log(hed.classList.contains("underline"));

let newp = document.createElement("p");
newp.innerText = "Halwa hai dosto";
console.log(newp);
let box = document.querySelector(".personal-info");
box.appendChild(newp);


// video question 
// first
let para = document.createElement("p");
para.innerText = "Hey i am red";
let body = document.querySelector("body");
body.append(para)
para.style.color = "red";

// second
let h3 = document.createElement("h3");
h3.innerText = "I am blue";
body.append(h3);
h3.style.color = "blue";
//  third
let div = document.createElement("div");
div.style.border = "6px solid black";
div.style.backgroundColor = "pink";
let h1Div = document.createElement("h1");
h1Div.innerText = "I am in a div";
let paraDiv = document.createElement("p");
paraDiv.innerText = "me to"

body.append(div);
div.append(h1Div);
div.append(paraDiv);
