let str  = "Tushar ";
console.log(str);
// .trim uses to remove extra spaces from both ends of the string but not from middle
console.log(str.trim()); 
console.log(str.toUpperCase());
console.log(str.toLowerCase());
// indexOf
console.log(str.indexOf("Tu"))
// metod chaining
console.log(str.trim().toUpperCase());
//Slicing
console.log(str.slice(3));
console.log(str.slice(1, 3));
console.log(str.slice(-2));
// replace
console.log(str.replace("Tu", "Ra"));
// repeat
console.log(str.repeat(3));
// lec question
// question 1
let msg = "help!";
console.log(msg.trim().toUpperCase());
// qustion 3
let clgName = "ApnaCollege";
console.log(clgName.slice(4).replace("l", "t"));




