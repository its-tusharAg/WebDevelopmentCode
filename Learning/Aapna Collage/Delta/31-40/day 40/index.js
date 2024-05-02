const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));

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


app.listen(8080, () => {
    console.log("Server working");
});

app.get("/", (req, res) => {
    res.send("Halwa hai dosto");
})

app.get("/chats", async (req, res) => {
    let chats = await Chat.find()
    res.render("index.ejs", {chats});
    // console.log(chats);
})

// new root to enter details for new chats
app.get("/chats/new", (req, res) => {
    // res.send("Halw ahi dosto");
    res.render("new.ejs")
})

// create new chat
app.post("/chats", (req, res) => {
    let {from, to, msg} = req.body;
    let newChat = new Chat({
        from: from,
        to: to,
        msg: msg,
        create_at: new Date(),
    });
    newChat.save()
    .then((r) => {
        console.log(r);
    })
    .then((e) => {
        console.log("err");
    })
    res.redirect("/chats");
})

//edit form
app.get("/chats/:id/edit", async (req, res) => {
    let {id} = req.params;
    let chat = await Chat.findById(id.toString());
    res.render("edit.ejs", {id, chat});
    console.log(id);
    console.log(chat.msg);
});

//update rout
app.put("/chats/:id", async (req, res) => {
    let {id} = req.params;
    let {msg: newMsg} = req.body;
    let updatedChat = await Chat.findByIdAndUpdate(id, {msg: newMsg}, {runValidators: true, new: true});
    console.log(updatedChat);
    res.redirect("/chats");
})

// destroy route
app.delete("/chats/:id", (req, res) => {
    let {id} = req.params;
    // console.log(id);
    // res.send("Deleted")
    Chat.findByIdAndDelete(id)
    .then((r) => {
        console.log(r);
    })
    .catch((e) => {
        console.log(e);
    });
    res.redirect("/chats")
})