// // this keyword
// let student = {
//     name: "Tushar",
//     math: 26,
//     phy: 23,
//     getAvg() {
//         // console.log((math+phy)/3) //Math and phy is not defined
//         console.log((this.math + this.phy) / 2);
//     }
// }

// console.log(student.getAvg());


// // try and catch
// console.log("Holla");
// console.log("Holla");
// try {
//     console.log(a);
// }
// catch (err) {
//     // console.log("Error 404");
//     console.error(err);
//     // console.log(err);

// }
// console.log("Holla")

// // arrow function
// const sumNum = (a, b) => {
//     console.log(a + b);
// }

// console.log(sumNum);
// sumNum(1, 3);

// const powFun = a => {
//     console.log(a * a * a);
// }
// powFun(2)

// const mult = (a, b) => (
//     a * b
// );
// console.log(mult(2, 3));

// // setTimeout function
// console.log("Halwa");
// setTimeout(() => {
//     console.log("Hai dosto");
// }, 3000);

// setInterval(() => {
//     console.log("halwa hai dosto");
// }, 2000);

// let id = setInterval(() => {
//     console.log("Halwa hai dosto");
// }, 2000);
// console.log(id);

// let id2= setInterval(() => {
//     console.log("Nahi hai");
// }, 2000);
// clearInterval(id)
// console.log(id2);

// lec question
// question 1
const  squrFun = (a) =>(
    a*a
);
console.log(squrFun(2));

// question 2
let hw = setInterval(()=>{
    console.log("Hello world");
}, 2000);
setTimeout(() => {
    clearInterval(hw);
}, 10000);

// Pdf questions
// question 1
const arrayAve = (ar) => {
    let sm = 0;
    for(el of ar) {
        sm += el
    }
    return sm/(ar.length);
}

console.log(arrayAve([2, 3, 4, 5]));

// question 2
const isEven = nm => {
    return nm%2==0;
}
console.log(isEven(8));

// question 3

