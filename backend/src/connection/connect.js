const mysql = require("mysql");
const dotenv = require("dotenv");
dotenv.config();
const connection = mysql.createConnection({
  // host: "http://localhost:3306/",
  host: "127.0.0.1",
  user: "root",
  password: `${process.env.db_password}`,
  database: `${process.env.dbName}`,
});

module.exports = connection;
