// let btn1 = document.querySelector("#btn1");

// btn1.onclick = (e) => {
//     console.log(e);
//     console.log("halwa hai dosto");
//     let a = 43;
//     a++;
//     console.log(a);
// }
// btn1.onclick = () => {
//     console.log("click hoo geya");
// }

// btn1.addEventListener("click", () =>{
//     console.log("1. Clicked!!");
// })
// btn1.addEventListener("click", () =>{
//     console.log("2. Clicked!!");
// }) 
// const clk3 = () =>{
//     console.log("3. Clicked!!");
// }
// btn1.addEventListener("click", clk3) 
// btn1.addEventListener("click", () =>{
//     console.log("4. Clicked!!");
// }) 
// btn1.removeEventListener("click", clk3)

// Question
let btn1 = document.querySelector("#btn1");
let a = "light";
btn1.addEventListener("click", () => {
    if(a === "light"){
        document.querySelector("body").style.backgroundColor = "black";
        a = "black";
    }
    else{
        document.querySelector("body").style.backgroundColor = "white";
        a = "light";
    }
})





