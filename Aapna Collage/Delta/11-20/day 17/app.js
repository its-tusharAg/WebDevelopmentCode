for(let i=0; i<5; i++){
    console.log(i);
}

// prinitng odd nums
for(let i=1; i<=20; i++){
    if(i%2 != 0){
        console.log(i);
    }
}

// even nums
for(let i=1; i<=15; i++){
    if(i%2==0){
        console.log(i);
    }
}

// table of 5
// let num = prompt("Enter the number:");
// for(let i=1; i<=10; i++){
//     console.log(i*num);
// }

// while loop
let i = 0;
while(i<5){
    console.log(i);
    i++;
}

// favMovie game

// let fevMov = "Iron Man";
// let userMov = prompt("Enter your favourate movie:");

// while(userMov.toLowerCase() != fevMov.toLowerCase() && userMov.toLowerCase() != "quit"){
//     console.log("Wrong!! HaaHaaahAa!!!");
//     userMov = prompt("Enter your favourate movie:");
//     if(userMov.toLowerCase() === fevMov.toLowerCase()){
//         console.log("Yaiiii!!! you guessed it right!!.");
//     }
// }

// for of loop

let fruits = ["Mango", "Apple", "Papaya", "Banana"];

for(fruit of fruits){
    console.log(fruit);
}

for(charr of "Halwa"){
    console.log(charr);
}

// To do list program





// pdf questions
// Question 1
let numA = [1, 2, 3, 4, 5, 6, 2, 3]
let remoNum = 2;
for(let i=0; i<numA.length; i++){
    if(numA[i] === remoNum) {
        numA[i];
    }
}

