const express = require("express");

const app = express();

// console.log(app);

let port = 8080;
app.listen(port, () => {
    console.log(`app is listining on port ${port}`);
});


// app.use((req, res) => {
//     // console.log(req);
//     console.log("new incoming request");
//     // res.send("This is a a response");
//     res.send({
//         fruit: "Mango",
//         color: "Yellow",
//         taste: "Tasty"
//     });
// })

// app.get("/", (req, res) => {
//     res.send("You call the rooth path")
// });
// app.get("/apple", (req, res) => {
//     res.send("You contacted the apple page");
// });
// app.get("/orange", (req, res) => {
//     res.send("You contacted the orange page");
// });
// app.get("*", (req, res) => {
//     res.send("This path does not defined");
// });
// app.post("/", (req, res) => {
//     res.send("this is post request");
// })

app.get("/:username/:id", (req, res) => {
    console.log(req.params);
    let {username, id} = req.params;
    res.send(`<h1>Username is @${username}</h1>`);
    // res.send(`Your username is @${username}`);
})

app.get("/search", (req, res) => {
    let {q} = req.query;
    if(!q){
        res.send("nothing search");
    }
    res.send(`search result for quary: ${q}`)
})
