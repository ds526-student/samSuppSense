const express = require('express');
const router = express.Router();
const mysql = require('mysql');

// information for connecting to the database
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mcdonaldstest"
});

// connect to the database
con.connect(function(err) {
  if (err) throw err;
  console.log("Database connected!");
});

// uses the barcode from the frontend to select a product from the database
router.post('/productSelect', (req, res) => {
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

// uses the productID from the previous query to select the ingredients from the database
router.post('/getIngredientIds', (req, res) => {
  const { productId } = req.body;
  const getIds = 'SELECT * FROM product_ingredients WHERE ProductID = ?';
  con.query(getIds, [productId], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error executing query');
    } else {
      res.json(result);
    }
  });
});

// uses the list of ingredient IDs from the previous query to select the ingredients from the database
router.post('/getIngredients', (req, res) => {
  const { ingredientIds } = req.body;
  const getIngredients = 'SELECT * FROM ingredients WHERE IngredientID IN (?)';
  con.query(getIngredients, [ingredientIds], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error executing query');
    } else {
      res.json(result);
    }
  });
});


module.exports = router;