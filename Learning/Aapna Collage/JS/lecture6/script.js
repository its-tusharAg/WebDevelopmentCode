// console.log("Halwa")
// console.log(window);  
// console.log(window.document); // use to print code
// console.dir(window.document); // use to print documents/object and properties objects
// console.dir(document.body);
// console.dir(document.getElementById("halId")); // use to get/access ID from js
// console.log(document.getElementById("halId")); // can use to print id from js
// // if id element is not present then output cameout to be null
// // but if class does not present then output is empty html collecton
// let classDetail = document.getElementsByClassName("heading-index");
// console.dir(classDetail); // use to access classes directl through js
// console.log(classDetail);
// let paraDetail = document.getElementsByTagName("p");
// console.dir(paraDetail);// use to access tags directl through js

// // acces using querySelector
// // can acces tage, classes and ids with one ketword
// let firEleTag = document.querySelector("p")
// let allEleTag = document.querySelectorAll("p")
// console.dir(firEleTag);
// console.dir(allEleTag);
// let firEleClass = document.querySelector(".headline-index")
// let allEleClass = document.querySelectorAll(".headline-index")
// console.dir(firEleClass);
// console.dir(allEleClass);
// let firEleId = document.querySelector("#halId")
// let allEleId = document.querySelectorAll("#halId")
// console.dir(firEleId);
// console.dir(allEleId);
// console.dir(document.body.firstChild)
// console.log(document.querySelector("div").firstChild)
// console.log(document.div);

//we can access tag and can change usine innerTect/HTML
// let div = document.querySelector("div");
// console.dir(div);
// console.dir(div.innerText);
// console.dir(div.innerHTML);
// console.dir(div.innerText= "halwa");
// console.dir(div.innerHTML = "<div>haaa</div>");


// Question1: creating h2 heading
// let div = document.querySelector("h2");
// console.dir(div.innerText + " from apna collage");

// Question2: create 3 div and add some text

// let div = document.querySelectorAll(".box");
// div[0].innerText = " Halwa hai dosto";
// div[1].innerText = "nahi hai";
// div[2].innerText = "pta nahi";
//using loops
// let c = 0;
// for(i of div){
//     i.innerText = `unique hai p${c}`
//     c++;
// }
// let div = document.querySelector("div");
// console.dir(div);
// // use to get attribute
// console.dir(div.getAttribute("class"));
// div.setAttribute("class", "kkk") //use to change attribute name
// console.log(div.getAttribute("class")); 

// let para = document.querySelector("p");
// console.dir(para);
// console.log(para.getAttribute("class"));
// para.setAttribute("class", "nahihai");
// console.log(para.getAttribute("class"));

//style
// let div = document.querySelector("div");
// console.dir(div.style);
// div.style.backgroundColor = "purple";
// div.style.visibility = "hidden";

// to creat element

// let btn = document.createElement("button");
// btn.innerText = "Halwa";
// console.log(btn)
// let div = document.querySelector("div");
// div.append(btn);
// div.prepend(btn);
let h1 = document.createElement("h1");
h1.innerText = "Halwa hai dosto";
let body = document.querySelector("body");
body. prepend(h1);