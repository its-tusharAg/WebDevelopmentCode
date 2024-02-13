// for(let i=0; i<5; i++){
//     console.log(i);
// }

// let args = process.argv;
// for(let i=2; i<args.length; i++){
//     console.log("welcome " + args[i]);
// }

// importing code/method from another file within same directory
const math = require("./math");
console.log(math.mult(2,4));
console.log(math.g);

// importing code/methods form another file form diff directory
const fruitInfo = require("./Fruits/index");
console.log(fruitInfo);
for(let i=0; i<fruitInfo.length; i++){
    console.log(fruitInfo[i].name);
}
