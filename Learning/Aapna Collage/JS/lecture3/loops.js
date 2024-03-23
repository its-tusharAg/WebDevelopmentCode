// for(let i=0; i<50; i++){
//     console.log("nice");
// }
// let str = "Halwaaaaaaaa";
// let strLen = str.length;
// let len = 0;
// for(let i of str){
//     // to print character using for loop
//     console.log(i);
//     len++;
// }
// console.log(len);
// console.log(strLen)

// let student = {
//     fullName : "Tushar Agarwal",
//     section : "Y",
//     cgpa : 6.4,
// }
// for(let key in student){
//     console.log(key, ":", student[key])
// }
// console.log(student["fullName"])
// Question: print even number
// let num = 100;
// for(let i=0; i<=num; i++){
//     if(i%2===0){
//         console.log(i);
//     }
// }

// Question: ask use to guess the number until enters the correct valur
let num = 54;
let guessNum = prompt("Guess the number:");
while(guessNum!=num){
    guessNum = prompt("Guess the number again:");
}