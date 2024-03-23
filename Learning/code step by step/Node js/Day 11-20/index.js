const http = require("http");
let data = require("./data");

// const server = http.createServer((req, res) =>{
//     res.writeHead(200, {"Content-Type":"application/json"});
//     // res.write(JSON.stringify({
//         // name:"Tushar",
//         // Email:"tjtushar7830@gmail.com"
//     // }));
//     res.write(JSON.stringify(data));
//     // res.write("Halwa hai dosto");
//     res.end();
// });

// server.listen(8000);

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

let fs = require("fs");
let path = require("path");

let dirPath = path.join(__dirname, "files")
// console.log(dirPath);
// for(let i=0; i<5; i++){
//     fs.writeFileSync(`${dirPath}/doc${i}.txt`, "this is a file");
//    console.log(fs.readFileSync(`${dirPath}/doc${i}.txt`)); 
// }
// let i = 0;

// to get/print file name

fs.readdir(dirPath, (err, file) =>{
    console.log(file);
})
