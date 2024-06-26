const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const {v4: uuidv4} = require("uuid");
const methodOverride = require("method-override");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride("_method"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(8000, () => {
    console.log("Server working at 8000 port");
});

let posts = [
    {
        id: uuidv4(),
        username: "tusharAg",
        content: "halwa hai dosto",
    },
    {
        id: uuidv4(),
        username: "bhabkaDevi",
        content: "raat ko hoga hangema, jb chamekega chanda mana...Yo",
    },
    {
        id: uuidv4(),
        username: "kabirSingh",
        content: "tuu too single hi marega",
    }

]

app.get("/posts", (req, res) => {
    res.render("index.ejs", {posts})
});

// create new post
app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});

// searching by id
app.get("/posts/:id", (req, res) => {
    let {id} = req.params;
    let post = posts.find((p) => id === p.id)
    res.render("show.ejs", {post})
});


app.post("/posts", (req, res) => {
    let {username, content} = req.body;
    let id = uuidv4();
    posts.push({id, username, content});
    res.redirect("/posts");
});

// PATCH: to update post
app.patch("/posts/:id", (req, res) => {
    let {id} = req.params;
    // let newUsername = req.body.username;
    let newContent = req.body.content;
    // console.log(newUsername);
    // console.log(id);
    let post = posts.find((p) => id === p.id)
    // post.username = newUsername;
    post.content = newContent;
    console.log(post);
    // res.send("Working fine");
    res.redirect("/posts");
})

//creating edit path
app.get("/posts/:id/edit", (req, res) => {
    let {id} = req.params;
    let post = posts.find((p) => id === p.id)
    res.render("editPost.ejs", {post});
})

//delete route to delte post
app.delete("/posts/:id", (req, res) => {
    let {id} = req.params;
    posts = posts.filter((p) => id !== p.id);
    // res.send("Deleted");
    res.redirect("/posts");
})