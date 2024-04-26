const mongoose = require("mongoose");
const { title } = require("process");

main()
.then(() => {
    console.log("Working");
})
.catch((err) => {
    console.log("err");
})


async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    auther: String,
    price: Number,
})

const Book = mongoose.model("Book", bookSchema);