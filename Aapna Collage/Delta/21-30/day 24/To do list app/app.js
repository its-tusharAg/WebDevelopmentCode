// let div = document.querySelector("div");
// let ul = document.querySelector("ul");
// let lis = document.querySelectorAll("li");

// div.addEventListener("click", (event) => {
//     event.stopPropagation();
//     console.log("Div is clicked");
// })
// ul.addEventListener("click", (event) => {
//     event.stopPropagation();

//     console.log("ul is clicked")
// })
// for(li of lis) {
//     li.addEventListener("click", (event)=>{
//     event.stopPropagation();
//         console.log("li is clicked");
//     })
// }

// To do list

let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");


btn.addEventListener("click", () => {
    let elm = document.createElement("li");
    elm.innerText = inp.value;

    let dlBtn = document.createElement("button");
    dlBtn.innerText = "Delete"
    dlBtn.classList.add("delete");

    // dlBtn.addEventListener("click", () => {
    //     elm.remove();
    // });
    elm.appendChild(dlBtn);
    ul.append(elm);
    inp.value = "";
})

ul.addEventListener("click", (evl) => {
    console.log("Btn cklick");
    // let btns = document.querySelectorAll(".delete");
    // for(btn of btns) {
    //     btn.remove;
    // }
    console.log(evl.target);
    
})

// let dleBtns = document.querySelectorAll(".delete");
// for (dleBtn of dleBtns) {
//     dleBtn.addEventListener("click", () => {
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     });
// }


