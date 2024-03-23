const express = require("express");
const app = express();

const port = 8080;

app.set("view engine", "ejs");

app.get("/:search/:value", (req, res) => {
    console.log("Root is calling");
    let {search, value} = req.params;
    console.log(req.params);
    console.log(`Your search is ${search} and value is ${value}`);
    res.send("this is root");
})

app.listen(port, () => {
    console.log(`listining the port ${port}`);
});


