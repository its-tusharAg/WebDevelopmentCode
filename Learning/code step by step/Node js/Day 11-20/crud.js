const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "crudFile");

let filePath = `${dirPath}/doc.txt`;

// write
// fs.writeFileSync(filePath, "halwa hai dosto");

// read
// fs.readFile(filePath, "utf8", (error, file) => {
//     console.log(file);
// });

// append
// fs.appendFile(filePath, " and i love gaajr ka halwa", (err) =>{
//     if(!err) console.log("File updated");
// })

// rename
// fs.rename(filePath, `${dirPath}/halwa.txt`, (err) => {
//     if (!err) console.log("Rename hoo geya");
// })

// delete
// fs.unlinkSync(`${dirPath}/halwa.txt`)
