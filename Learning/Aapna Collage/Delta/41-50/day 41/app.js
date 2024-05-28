const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

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

app.listen(8000, () => {
    console.log("Server is working");
});

app.get("/", (req, res) => {
    res.send("working");
})

// index rout
app.get("/listings", async (req, res)=> {
    const listings = await Listing.find();
    res.render("listings/index", {listings});
});

// create  rout
app.get("/listings/new", (req, res) => {
    res.render("listings/new.ejs")
});

// add rout
app.post("/listings", async (req, res) => {
    // const {title, description, image, price, location, country} = req.body;
    // const data = await new Listing({
    //     title: title,
    //     description: description,
    //     image: image,
    //     price: price,
    //     location: location,
    //     country: country
    // });
    const data = new Listing(req.body.listing)
    await data.save();
    res.redirect("http://localhost:8000/listings");
});

//edit rout
app.get("/listings/:id/edit", async (req, res) => {
    let {id} = req.params;
    let listing = await Listing.findById(id);
    res.render("listings/edit.ejs", {listing});
});

//delete rout
app.delete("/listings/:id", async (req, res) => {
    let {id} = req.params;
    await Listing.findByIdAndDelete(id);
    res.redirect("/listings")
})

//update rout
app.put("/listings/:id", async (req, res)=> {
    let {id} = req.params;
    let data = await Listing.findByIdAndUpdate(id, {...req.body.listing})
    res.redirect("/listings")
});

//show rout
app.get("/listings/:id", async (req, res) => {
    let {id} = req.params;
    console.log(id);
    const listing = await Listing.findById(id);
    res.render("listings/show", {listing});
});






