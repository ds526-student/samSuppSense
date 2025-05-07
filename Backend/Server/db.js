// packages used
var mysql = require('mysql');
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express(); // creates an instance of express
app.use(cors()); // enables CORS for all routes
app.use(bodyParser.json()); 

// connects to the MySQL database
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mcdonaldstest"
});

// connects to the database, logs a message if successful
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

let storedInput = null;

// runs a select query when the submit button is clicked
app.post('/query', function (req, res) {
  const barcode = req.body.barcode;
  const sql = 'SELECT * FROM products WHERE ProductID = ?';
  con.query(sql, [barcode], function (err, result) {
    // handles the response from the database
    if (err) {
      console.error(err);
      res.status(500).send('Error executing query');
    } else {
      res.json(result);
      console.log(result);
    }
  });
});

// Endpoint to serve the stored result
app.post('/api/submit', (req, res) => {
  if (storedResult) {
    res.json({ success: true, data: storedResult });
  } else {
    res.json({ success: false, message: 'No data available' });
  }
});

// listens on port 3000
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});