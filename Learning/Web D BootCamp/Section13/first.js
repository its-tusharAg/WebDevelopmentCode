console.log("Halwa");
//  prompt("Halwa hai dosto haha");
let myName = "Tushar agarwal";
console.log(myName);
console.log(typeof(myName));
let a = 3;
let b = 8;
let c;
c = a;
a = b;
b = c;
console.log(a);
console.log(b);

let hel = "Hello";
let name = "Tushar";
// let greeting = " welcome";

console.log(name.length);
let para = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer tookl"

// console.log(140 - para.length);
// let writen = prompt("Type your msg");
// console.log("You have written", writen.length, "characters, you have", 140-writen.length, "character left.");
console.log(para.slice(0, 140))
console.log(myName.toUpperCase());
let userName = prompt("Enter your name:")
alert("Hello, " + userName.slice(0, 1).toUpperCase() + userName.slice(1, userName.length).toLowerCase());
