const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: "oneplus8t"
  });

  let q = "insert into user (id, userName, email, password) values ?;"
  let userData = [
    ["102", "Tushar2", "tjtushar@gmail.comB", "3534"], 
    ["103", "Tushar3", "tjtushar@gmail.comc", "12sdfe345"],
  ];
  try{
      connection.query(q, [userData], (err, result) =>{
        if(err) {throw err};
        console.log(result);
    });
  }
  catch(e){
    console.log(e);
  }

connection.end();

let  getRandomUser = () => {
    return {
      id: faker.string.uuid(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    };
  }

