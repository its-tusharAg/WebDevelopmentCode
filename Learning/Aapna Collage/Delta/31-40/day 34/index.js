const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.listen(8000, () => {
    console.log("Server working at 8000 port");
});

app.get("/", (req, res) => {
    res.send("Server is responsing");
})
