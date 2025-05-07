const express = require('express');
const router = express.Router();
const mysql = require('mysql');

// Database connection
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mcdonaldstest"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Database connected in routes.js!");
});

// Handle submission of barcode and fetch product
router.post('/query', (req, res) => {
  const { barcode } = req.body;
  const sql = 'SELECT * FROM products WHERE ProductID = ?';
  con.query(sql, [barcode], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error executing query');
    } else {
      res.json(result);
    }
  });
});

module.exports = router;