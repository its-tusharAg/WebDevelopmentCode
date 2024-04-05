// const express = require("express");
// const app = express();

// app.listen(8000, () => {
//     console.log("Port is listenign at post 8000");
// });

// app.use(express.urlencoded({extended: true}));

// app.get("/request", (req, res) => {
//     let {user, pass} = req.query;
//     res.send(`Send GET response. Welcome ${user}`);
// })
// app.post("/request", (req, res) => {
//     let {user, pass} = req.body;
//     res.send(`Sending POST response. welcome ${user}!!`);
// }) 
// const arr = [1,2,3];
// const arr2 = [1,2,3];
 

class Student{
    constructor(name, age, marks){
        this.name = name;
        this.age = age;
        this.marks = marks;
    }
    talk() {
        console.log(`My name is ${this.name}`);
    }
}

let p1 = new Student("Tushar", 25, 99);
let p2 = new Student("Rahul", 25, 99);