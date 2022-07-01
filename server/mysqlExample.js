// get the client
const mysql = require("mysql2");

// create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  user: "service",
  password: "1q2w3e4r!",
  database: "fintech",
});

// simple query
const sql = "SELECT * FROM user";
connection.query(sql, [], (err, result) => {
  console.log(result);
});
