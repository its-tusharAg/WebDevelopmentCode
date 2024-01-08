console.log("Hello");
let num = 1;
let num2 = 4;
console.log(num+num2);
console.log(`Halwa hai dosto and cost ${22 + 32} nice`);

let color = "green";

if(color == "red"){
    console.log("Stop");
}
if(color == "yellow"){
    console.log("Slow down");
}
if(color == "green"){
    console.log("Go");
}

let size = "L";
if(size === "XL"){
    console.log(`Price is: ${250}`);
}
else if(size === "L"){
    console.log("Price is 200");
}
else if(size === "M"){
    console.log("Pirce is 100");
}
else {
    console.log("Price is 50");
}

let str = "anshika";
if((str[0] === 'a') && (str.length > 3)){
    console.log("Good String");
}
else{
    console.log("Not a good String");
}

// PDF questions
// Question 1

let checkNum = 300;
if(checkNum%10 === 0){
    console.log("Good");
}
else{
    console.log("bad");
}

// Question 2
let nm = "Tushar";
let age = 20;

// alert(`${nm} is ${age} years old`);

// Question4
let str1 = "Aalwa0";
if((str1[0] === 'a' || str1[0] === 'A') && str.length > 5) {
    console.log("Golder String");
}
else{
    console.log("Not a Golden String");
}

// Quesetion 5
let findNum1 = 8
let findNum2 = 15
let findNum3 = 19

if(findNum1 > findNum2 && findNum1 >findNum3 ){
    console.log(findNum1)
}
else if(findNum2 > findNum1 && findNum2 > findNum3){
    console.log(findNum2);
}
else{
    console.log(findNum3);
}

// Question 6

let checkLastDigNum1 = 3245;
let checkLastDigNum2 = 345;

if(checkLastDigNum1[checkLastDigNum1.length-1] == checkLastDigNum2[checkLastDigNum2.length-1]){
    console.log("Yes");
}
else{
    console.log("not");
}

if(1){
    console.log(true);
}
else{
    console.log(false);
}

// lec quesstion

let weakDay = 9;

switch (weakDay) {
    case 1:
        console.log("Monday")
        break;
    case 2:
        console.log("Tuesday")
        break;
    case 3:
        console.log("wednesday")
        break;
    case 4:
        console.log("Thursday")
        break;
    case 5:
        console.log("Friday")
        break;
    case 6:
        console.log("Saturday")
        break;
    case 7:
        console.log("Sunday")
        break;
    default:
        console.log("Invalid")
        break;
}

let firstName = prompt("enter your first name");
let lastName = prompt("enter your last name");

console.log(firstName + " " + lastName);
