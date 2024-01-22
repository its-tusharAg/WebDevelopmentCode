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
