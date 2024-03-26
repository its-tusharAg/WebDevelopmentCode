let a = 10;
let b = 0;


let asynk = new Promise((pr, er) => {
    setTimeout(() => {
        pr(10);
    }, 1000)
});

asynk.then((data) => {
    console.log(a + data);
}).catch((err) => {
    console.log("error");
});
