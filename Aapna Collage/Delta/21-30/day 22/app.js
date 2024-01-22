console.log("Hello world");
console.log(window);
console.log(document);
console.dir(document);
console.dir(document.all);
document.all[8].innerText = "Tushar"; 

let mainImg = document.getElementById("main-img");
console.dir(mainImg);
mainImg.src = "https://upload.wikimedia.org/wikipedia/en/b/bd/Issue252.jpg";