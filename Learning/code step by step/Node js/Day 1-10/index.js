// console.log("Halwa hia dosto");

// day 7
const http = require("http");
// const colors = require("colors");

function datacenter(req, res) {
    res.write("<h1>Hollaa thats my server</h1>")
    res.end();
}

http.createServer(datacenter).listen(8080);
