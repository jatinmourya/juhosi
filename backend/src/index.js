const dotenv = require("dotenv");
dotenv.config();

const db = require("./connection/connect");
db.connect(function (err) {
  if (err) throw err;
  else {
    console.log("Connected to database : " + process.env.dbName);
    db.query(`create database if not exists ` + process.env.dbName);
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

app.listen(9123, () => {
  console.log(`Server live at http://localhost:${9123}`);
});
