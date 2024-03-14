let typeBox = document.querySelector(".add-task input");
let addBtn = document.querySelector(".add-task button");
let task = document.querySelector(".tasks");

let unImg = document.querySelector(".uncheck-img");
let tsk = document.querySelector(".tsk");
let cros = document.querySelector(".cros");
let container = document.querySelector(".container");
 

addBtn.addEventListener("click", () => {
    let div = document.createElement("div");
    div.classList.add(".tasks")

    div.append(unImg);

    div.append(tsk);

    div.append(cros);

    console.log(div.classList.contains(".tasks"));

    container.append(div);
    // console.log("halwa");
})