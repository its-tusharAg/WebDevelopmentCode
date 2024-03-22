const http = require("http");
let data = require("./data");

const server = http.createServer((req, res) =>{
    res.writeHead(200, {"Content-Type":"application/json"});
    // res.write(JSON.stringify({
        // name:"Tushar",
        // Email:"tjtushar7830@gmail.com"
    // }));
    res.write(JSON.stringify(data));
    // res.write("Halwa hai dosto");
    res.end();
});

server.listen(8000);

// creation of files

// const fs = require("fs");

// const input = process.argv;
// console.log(input);
// if(input[2] == "add"){
//     fs.writeFileSync(input[3], "halwa hai dsoto");
// }
// else if(input[2] == "del"){
//     fs.unlinkSync(input[3])
// }
// else{
//     console.log("invalid input");
// }