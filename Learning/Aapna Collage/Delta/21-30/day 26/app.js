// async function greet() {
//     // throw("nol");
//         return "Holla!";
// }

// greet()
// .then((suss)=>{
//     console.log("Success");
//     console.log(suss)
// })
// .catch((err)=>{
//     console.log("Failure");
//     console.log(err);
// })

// function randNum() {
//     return new Promise((resolved, fail)=> {
//         let rnm = Math.floor(Math.random()*10)+1;
//         setTimeout(() => {
//         console.log(rnm);
//         resolved();
//     }, 1000);
//     })

// }

// async function getNum() {
//     await randNum();
//     await randNum();
//     await randNum();
// }
// getNum();

// let h1 = document.querySelector("h1");

// function colorChange(color, timer) {
//     return new Promise((resolve, reject)=> {
//         setTimeout(() => {
//             h1.style.color = color;
//             resolve();
//         }, timer);
//     }) 
// }

// async function getColor() {
//     await colorChange("pink", 1000);
//     await colorChange("blue", 1000);
//     await colorChange("red", 1000);
// }
// getColor();


// my first request

let url = "https://catfact.ninja/fact";
// fetch(url)
//     .then((res) => {
//         console.log(res);
//         return res.json();
//     })
//     .then((data) => {
//         console.log(data);
//         return fetch(url)
//     })
//     .then((res) => {
//         return res.json();
//     })
//     .then((data) => {
//         console.log(data)
//     })
//     .catch((err) => {
//         console.log("fail");
//         console.log(err);
//     })

// creating async and await method

async function getres(){
    let res = await fetch(url);
    let data = await res.json();
    console.log(res);
    console.log(data);
}

getres();