// console.log("Hello world"); 
// console.log(5===5);

// let age = 45;
// if(age >= 18){
//     console.log("Yes");
// }
// let mode = "white";
// let color;
// if(mode === "white"){
//     color = "white";
// }
// let num = prompt("Enter the number: ");
// if(num%5===0){
//     console.log(true);
// }
// else{
//     console.log(false)
// }

let score = prompt("Enter Your Marks:");
let grade;

if(score>=80 && score<=100){
    grade = "A";
}
else if(score>=70 && score<=79){
    grade = "B";
}
else if(score>=60 && score<=69){
    grade = "C";
}
else if(score>=50 && score<=59){
    grade = "D";
}
else{
    grade = "F";
}
console.log(grade);
