let input = document.querySelector(".add-task input");
let btn = document.querySelector(".add-task button");
let ul = document.querySelector(".tasks");
let img = document.createElement("img");
let container = document.querySelector(".container");
let li = document.querySelector("li");

btn.addEventListener("click", () => {


    if (input.value !== "") {
        let li = document.createElement("li");
        let uncheck = document.createElement("img");
        let p = document.createElement("p");
        let cros = document.createElement("img");

        uncheck.src = "./img/unchecked.png";
        cros.src = "./img/cross.png";

        li.classList.add("tsk")
        p.classList.add("tsk-name")
        uncheck.classList.add("uncheck-img");
        cros.classList.add("cros");

        p.textContent = input.value;

        li.append(uncheck);
        li.append(p);
        li.append(cros);
        ul.append(li);

        

        // uncheck.addEventListener("click", () => {
        //     li.remove();
        // });
    }
    input.value = "";

    ul.addEventListener("click", function(e) {
    if (e.target.tagName == "li") {
        // event.target.parentElement.remove();
        console.log("clicked");
    }
});
})

