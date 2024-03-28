const express = require("express");
const app = express();
const path = require("path");

const publicAdd = path.join(__dirname, "public");

app.listen(8000);
// app.use(express.static(publicAdd)).listen(8000); 

app.get("", (_, res) => {
    res.sendFile(`${publicAdd}/index.html`);
})
app.get("/about", (_, res) => {
    res.sendFile(`${publicAdd}/about.html`);
})