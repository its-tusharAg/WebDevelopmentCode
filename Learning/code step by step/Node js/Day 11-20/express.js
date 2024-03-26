const express = require("express");
const app = express();

app.listen(8000);

app.get("/", (req, res) => {
    res.send(
        `<h1>${req.query.name}</h1> 
    <a href="/about">About Page</a>`
    ); 
});

app.get("/about", (req, res) => {
    res.send(`{
        Name: "Tushar",
        RollNo: 45
    },
    {
        Name: "Rahul",
        RollNo: 42
    } <a href="/">Home Page</a>`);
});

