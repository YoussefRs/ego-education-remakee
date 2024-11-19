const mysql = require("mysql2");

function createConnection() {
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "youssefdb!",
    database: "my_new_database",
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