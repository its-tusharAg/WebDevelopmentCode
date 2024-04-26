const mongoose = require("mongoose");

main()
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
})

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017");
} 

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
})
 
const User = mongoose.model("User", userSchema);
// const Employee = mongoose.model("Employee", userSchema);
// const user1 = new User({ 
//     name: "Tushar",
//     email: "tjtushar780@gmail.com",
//     age: 20
// });

// to show data
User.updateOne({name: "Tushar"}, {name: "Rahul"})
.then((data) => {
    console.log(data);
})
User.find().then((data) => {
    console.log(data[0]);
})
.catch( () => {
    console.log("err")
})
// user1.save();