const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

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
let allChat = [
    {
        from: "Tushar",
        to: "Shivam",
        msg: "Halwa hai dosto",
        create_at: new Date()
    },
    {
        from: "Rahul",
        to: "Aman",
        msg: "XYZ",
        create_at: new Date()
    }, {
        from: "Ravi",
        to: "Shyam",
        msg: "Pgl hai kya",
        create_at: new Date()
    }, {
        from: "Shaloni",
        to: "Tushar",
        msg: "Chl nikl",
        create_at: new Date()
    }, {
        from: "Ram",
        to: "Lachman",
        msg: "Noice",
        create_at: new Date()
    },
];

Chat.insertMany(allChat)
    .then((res) => {
        console.log("res");
    });
