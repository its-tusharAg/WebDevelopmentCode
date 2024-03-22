const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const homeRouter = require('./routers/homerouter')
const port  = process.env.port || 3000;
const app = express();

mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/userdb',{useNewUrlParser:true});
const db=mongoose.connection;
db.on("error",()=>{console.log("error in connection");})
db.on('open',()=>{console.log("connects");})
app.set('view engine','ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
   
// parse application/jsonm
app.use(bodyParser.json())


app.use('/',homeRouter)
app.listen(port)
 