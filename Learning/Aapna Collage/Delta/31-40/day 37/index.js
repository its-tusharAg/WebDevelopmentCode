const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views")); 

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: "oneplus8t"
});


let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.userName(),
    faker.internet.email(),
    faker.internet.password(),
  ];
}

let data = [];

// for (let i = 0; i < 100; i++) {
//   data.push(getRandomUser());
// }

// let q = "insert into user (id, userName, email, password) values ?;"
// let userData = [
//   ["102", "Tushar2", "tjtushar@gmail.comB", "3534"], 
//   ["103", "Tushar3", "tjtushar@gmail.comc", "12sdfe345"],
// ];

// try {
//   connection.query(q, [data], (err, result) => {
//     if (err) { throw err };
//     console.log(result);
//   });
// }
// catch (e) {
//   console.log(e);
// }
// connection.end();

// let  getRandomUser = () => {
//     return {
//       id: faker.string.uuid(),
//       username: faker.internet.userName(),
//       email: faker.internet.email(),
//       password: faker.internet.password(),
//     };
//   }

app.listen(8000, () => {
  // res.write("Nice");
  console.log("App is listning");
})

app.get("/", (req, res)=> {
  let q = "select count(*) from user";
  try {
  connection.query(q, (err, result) => {
    if (err) { throw err };
    let count =   result[0]["count(*)"];
    // res.send(result[0]);
    res.render("home.ejs", {count});
  });
}
catch (e) {
  console.log("Some error in DB");
}

// connection.end();
});


//user rout
app.get("/user", (req, res) => {
  let q = "select * from user";
  try {
  connection.query(q, (err, result) => {
    if (err) { throw err };
    let users =   result;
    res.render("user.ejs", {users});
  });
  }
  catch (e) {
    console.log("Some error in DB");
  }
});

// Edit user
app.get("/user/:id/edit", (req, res) => {
  let {id} = req.params;
  let q = `select * from user where id="${id}"`;
  try {
    connection.query(q, (err, result) => {
      if (err) { throw err };
      let user =   result[0];
      console.log(user);
      res.render("edit.ejs", {user});
    });
    }
    catch (e) {
      console.log("Some error in DB");
    }
  console.log(id);
});


