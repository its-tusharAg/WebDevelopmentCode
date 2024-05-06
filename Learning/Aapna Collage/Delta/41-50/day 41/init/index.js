const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const mongo_url =  "mongodb://127.0.0.1:27017/wonderlust";

main()
.then(() => {
    console.log("Connected to DB");
})
.catch((e) => {
    console.log(e);
});

async function main() {
    await mongoose.connect(mongo_url);
}

let initDB = async () => {
    // await Listing.deleteMany({});
    await Listing.insertMany(initData.data)
    console.log(initData.data);
    console.log("Data Added");
}
initDB();