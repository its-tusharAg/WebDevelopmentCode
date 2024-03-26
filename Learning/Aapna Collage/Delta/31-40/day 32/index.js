let express = require("express");
let path = require("path");
let app = express();


app.set("views", path.join(__dirname, "/views"))

app.listen(8000, () => {
    console.log("Server is listning");
});

app.use(express.static(path.join(__dirname, "/public/css")));

app.get("/", (req, res) =>{
    res.render("home.ejs");
})

app.get("/rollDise", (req, res) =>{
    let disevalue = Math.floor(Math.random()*6)+1;
    res.render("rollDise.ejs", {disevalue});
})

app.get("/ig/:username", (req, res)=>{
    const userData = require("./data.json");
    const {username} = req.params;

    // console.log(username);
    // let followers = ["naman", "rahul", "saloni", "ram"];
    // console.log(userData);   
    const data = userData[username];
    res.render("instagram.ejs", {data});
})