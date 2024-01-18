 function printHello(){
    console.log("Hello");
 }

 printHello();

//  Roll a dice 
function rollDice(){
    console.log(Math.floor(Math.random()*6)+1)
}
rollDice();

function preName(name){
    console.log(name);
}
preName("Tushar");

function info(name, age) {
    console.log(`${name}'s age is ${age}.`, );
}
info("Tushar", 20);


function avg3Num(a, b, c) {
    console.log((a+b+c)/3);
}

avg3Num(2, 3, 1);

// Table
function tables(num) {
    for(let i=1; i<=10; i++){
        console.log(num*i);
    }
}

tables(2);
