const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
var cors = require("cors");
const port = process.env.PORT || 3008;

// parse requests of content-type: application/json
// app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.use(cors());

const mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "db_asset",
});

mysqlConnection.connect();

// set port, listen for requests
app.listen(port, () => {
  console.log("Express Server is running on port 3008.");
});

// Get All Data Asset
app.get("/data", (req, res) => {
  mysqlConnection.query(
    `SELECT * FROM assets ORDER BY No desc`,
    (err, rows, fields) => {
      if (!err) res.send(rows);
      else console.log(err);
    }
  );
});

// Get Data By ID
app.get("/data/:No", (req, res) => {
  mysqlConnection.query(
    `SELECT * FROM assets WHERE No = '${req.params.No}'`,
    (err, rows, fields) => {
      if (!err) res.send(rows);
      else console.log(err);
    }
  );
});

// Delete Data By ID
app.delete("posts/:No", (req, res) => {
  mysqlConnection.query(
    `DELETE FROM assets WHERE No = '${req.params.No}'`,
    (err, rows, fields) => {
      if (!err) res.send("Deleted Successfully");
      else console.log(err);
    }
  );
});

// Insert Data
app.post("/data", (req, res) => {
  var sql =
    "INSERT INTO assets VALUES (null, '" +
    req.body.name +
    "', '" +
    req.body.merk +
    "', '" +
    req.body.type +
    "', '" +
    req.body.user +
    "','" +
    req.body.place +
    "', '" +
    req.body.code +
    "', Null)";

  mysqlConnection.query(sql, (err, rows, fields) => {
    if (!err) res.send("Insert Data Successfully");
    else console.log(rows);
  });
});

app.listen(3000);
