// // function holla() {
// //     console.log("inside holla function");
// //     console.log("Holla");
// // }

// // function demo() {
// //     console.log("Calling holla function");
// //     holla();
// // }

// // console.log("calling demo");
// // demo();
// // console.log("execution done");
// // demo();


// // callback function for change colorr
// // h1 = document.querySelector("h1");

// // function changeColor(color, timing, nextcolor) {
// //     setTimeout(() => {
// //         h1.style.color = color;
// //         if (nextcolor) nextcolor();
// //     }, timing);
// // }

// // // callback nesting => call back hell
// // changeColor("red", 1000, () => {
// //     changeColor("green", 1000, () => {
// //         changeColor("blue", 1000)
// //     })
// // });




// // function db(data, success, failure) {
// //     let rand = Math.floor(Math.random() * 10) + 1;

// //     if (rand > 4) {
// //         success();
// //     }
// //     else {
// //         failure();
// //     }
// // }

// // db("Tjtushar", () => {
// //     console.log("Success: Data is saved.");
// //     db("nice", ()=> {
// //         console.log("Success: saved again");
// //         db("Abb nahi yr", ()=>{
// //             console.log("Again saved");
// //         }, ()=> {
// //             console.log("Not saved");
// //         })
// //     }, ()=> {
// //         console.log("Failure: data not saved");
// //     })
// // }, () => {
// //     console.log("failure: Data is nott saved");
// // })


// // Promices functions

// // function addToDb(data) {
// //     return new Promise((resolve, reject) => {
// //         let intSpeed = Math.floor(Math.random()*10)+1;
// //         if(intSpeed > 4) {
// //             resolve("Data is saved");
// //         }
// //         else{
// //             reject("Weak connection");
// //         }
// //     });
// // }

// // let request = addToDb("Tjtushar");
// // request
// // .then((result) => {
// //     console.log("Success1");
// //     console.log(result);
// //     return addToDb("Halwa hai dosto");
// // })
// // .then((result) => {
// //     console.log("success2")
// //     console.log(result);
// // })
// // .catch((error) => {
// //     console.log("fialure")
// //     console.log(error);
// // });


// // changing h1 code using promices
// let h1 = document.querySelector("h1");
// function changeColorPromise(col, delay) {
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             h1.style.color = col;
//             resolve("color changed")
//         }, delay)
//     });
// }

// changeColorPromise("green", 1000)
// .then(()=>{
//     return changeColorPromise("pink", 1000)
// })
// .then(()=>{
//     return changeColorPromise("red", 1000)
// })
// .then(()=>{
//     return changeColorPromise("gray", 1000)
// })
// .then(()=>{
//     return changeColorPromise("blue", 1000)
// })

console.log("6")
