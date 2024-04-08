const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(8000, () => {
    console.log("Server working at 8000 port");
});

let posts = [
    {
        username: "tusharAg",
        content: "halwa hai dosto",
    },
    {
        username: "bhabkaDevi",
        content: "raat ko hoga hangema, jb chamekega chanda mana...Yo",
    },
    {
        username: "kabirSingh",
        content: "tuu too single hi marega",
    }

]

app.get("/posts", (req, res) => {
    res.render("index.ejs", {posts})
});

app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});

app.post("/posts", (req, res) => {
    console.log(req.body);
    res.send("Send ho geya");
});