const dotenv = require("dotenv");
dotenv.config();

const db = require("./connection/connect");
db.connect(function (err) {
  if (err) throw err;
  else {
    console.log("Connected to database : " + process.env.dbName);
    db.query(`create database if not exists ` + process.env.dbName);
    // db.query(`drop table  if exists ${process.env.tableName}`);
    // db.query(
    //   `create table if not exists ${process.env.tableName} (id int AUTO_INCREMENT PRIMARY KEY ,full_name varchar(100),email varchar(100),username varchar(100),password varchar(100), course_selected varchar(100))`
    // );
  }
});

const express = require("express");
const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors());

app.get("/", (req, res) => {
  res.send("this is node api for juhosi_web_app");
});

const router = require("./routes/routes");
app.use("/", router);

app.get("*", (req, res) => {
  res.send("oops , page not found ");
});

app.listen(process.env.port, () => {
  console.log(`Server live at http://localhost:${process.env.port}`);
});
