const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

main()
.then(() => {
    console.log("Connection created");
})
.catch((err) => {
    console.log("err");
});

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

// creating chat
// let chat1 = new Chat({
//     from: "Tushar",
//     to: "Shivam",
//     msg: "Halwa hai dosto",
//     create_at: new Date()
// });

// chat1.save().then((res) => {
//     console.log("res");
// });

app.get("/chats", async (req, res) => {
    let chats = await Chat.find()
    res.render("index.ejs", {chats});
    console.log(chats);
})
app.listen(8080, () => {
    console.log("Server working");
});

app.get("/", (req, res) => {
    res.send("Halwa hai dosto");
})