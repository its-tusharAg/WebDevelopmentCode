console.log("Halwa")

// let x = 10;
// {
//     console.log(x);
//     let x = 20;
//     console.log(x)
// }

// async function catFact() {
//     try{
//         let res = await axios.get("https://catfact.ninja/fact");
//         console.log(res.data.fact);
//     }
//     catch {
//         console.log("error");
//     }
// }

// catFact()

// showing cat fact to the html pade
// let btn = document.querySelector("button");
// let result = document.querySelector("#result");
// let img = document.querySelector("img");
// let url = "https://catfact.ninja/fact";
// let dogImgUrl = "https://dog.ceo/api/breeds/image/random";

// let img = document.createElement("img");

// async function randFact(){
//     try{
//         let val = await axios.get(url);
//         result.innerText = val.data.fact;
//         // console.log(val);
//     }
//     catch{
//         result.innerText = "error";
//     }
// }




//  btn.addEventListener("click", () => {   
//     // randFact();
//     rangImg();
// })


// async function rangImg() {
//     try {
//         let DogImg = await axios.get(dogImgUrl);
//         console.log(DogImg.data.message)
//         img.src = DogImg.data.message;
//     }
//     catch{
//         console.log(error);
//     }
// } 

// let url2 = "https://icanhazdadjoke.com/";

// async function getJoke() {
//     try{
//         const conflict = {headers:{Accept: "application/json"}};
//         let val = await axios.get(url2, conflict);
//         console.log(val.data.joke);
//     }
//     catch{
//         console.log("error");
//     }
    
// }
// getJoke();


let url3 = "http://universities.hipolabs.com/search?name=";

let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    let input = document.querySelector("input").value;
    console.log(input);

    let colArr = await clgNme(input);
    console.log(colArr);
});
async function clgNme(country) {
    try{
        let val = await axios.get(url3 + country);
        return val.data
    }
    catch{
        console.log("error");
        return [];
    }
}

