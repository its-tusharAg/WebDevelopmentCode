let newBtn = document.createElement("button");
newBtn.innerText = "click me";
newBtn.style.backgroundColor = "red";
newBtn.style.color = "white";

let bd = document.querySelector("body");
bd.prepend(newBtn);