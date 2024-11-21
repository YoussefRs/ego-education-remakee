const mysql = require("mysql2");
require("dotenv").config();

function createConnection() {
  const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });
  
  connection.connect((err) => {
    if (err) {
      console.error("Error connecting to database:", err);
      // You may want to handle errors and retries here
    }
    console.log("Connected to ego db");
  });

  return connection;
}

module.exports = { createConnection };