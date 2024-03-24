let express = require("express");
const send = require("send");
let app = express();

let server = app.listen(8000, (req, res) => {
    console.log(`App is listen at port number ${8000}`);
    // res.write("nice");
})
// app.use((req, res) =>{
//     console.log("Incoming request");
//     res.send();
// })

// app.use((req, res) => {
//     console.log("incoming request");
// })
app.get("/", (req, res) => {
    res.send("this is a home path")
})
app.get("/help", (req, res) => {
    res.send("this is a help path")
})
app.get("/contact", (req, res) => {
    res.send("this is a contact path")
})
app.get("/search", (req, res) => {
    let { q } = req.query;
    if (!q) {
        res.send(`<h1>No quary</h1>`)
    }
    else {
        res.send(`<h1>Your quary is: ${q}</h1>`)
    }
})
app.get("/:username", (req, res) => {
    console.log(req.params);
    let { username } = req.params;
    res.send(`This is your userName: @${username}`)
})

app.get("/*", (req, res) => {
    res.send("unknown path")
})



// let http = require("http");

// let server = http.createServer((req, res)=>{
//     res.write("server created");
//     res.end();
// }).listen(8000);