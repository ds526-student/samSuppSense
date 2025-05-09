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
    con.query('SELECT ProductID, ProductName FROM products WHERE ProductID = ?', [barcode], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error executing query');
    } else {
      res.json(result);
    }
  });
});

// uses the product ID to get the ingredients from the database
router.post('/getIngredients', (req, res) => {
  const { productId } = req.body;
  // grabs the ingredient IDs based on the productID
  con.query('SELECT IngredientID FROM product_ingredients WHERE ProductID = ?', [productId], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error fetching ingredient IDs(database.js)');
    }

    // formats the ingredient IDs into an array
    const ingredientIds = result.map(row => row.IngredientID);
    console.log('Ingredient IDs:', ingredientIds);

    // grabs the ingredient names based on the ingredient IDs
    con.query('SELECT IngredientName FROM ingredients WHERE IngredientID IN (?)', [ingredientIds], (err, ingredients) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Error fetching ingredients');
      }

      // returns the ingredient names to the frontend
      console.log('Ingredients:', ingredients);
      res.json(ingredients);
    });
  });
});

// starts the database connection when the server starts
module.exports = router;