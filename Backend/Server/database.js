const express = require('express');
const router = express.Router();
const mysql = require('mysql');

// information for connecting to the database
let currentCon = mysql.createConnection({
  host: "localhost",
  user: "guest",
  password: "",
  database: "mcdonaldstest"
});

// connect to the database
currentCon.connect(function(err) {
  if (err) throw err;
  console.log("Database connected!");
});

router.post('/login', (req, res) => {
  const { username, password } = req.body;

const newConnection = mysql.createConnection({
  host: "localhost",
  user: username,
  password: password,
  database: "mcdonaldstest"
});

  newConnection.connect(function(err) {
    if (err) {
      console.error('Error connecting to the database:', err);
    } else {
      console.log('Connected to the database as:', username);
      currentCon = newConnection;
      res.json({ success: true, message: 'New Login successful' });
    }
  });
});

router.post('/logout', (req, res) => {
  const newConnection = mysql.createConnection({
    host: "localhost",
    user: "guest",
    password: "",
    database: "mcdonaldstest"
  });

  newConnection.connect(function(err) {
    if (err) {
      console.error('Error connecting to the database:', err);
    } else {
      console.log('Connected to the database as: guest');
      currentCon = newConnection;
      res.json({ success: true, message: 'Logout successful' });
    }
  });
});

// uses the barcode from the frontend to select a product from the database
router.post('/productSelect', (req, res) => {
  const { barcode } = req.body;
  currentCon.query('SELECT ProductID, ProductName FROM products WHERE ProductID = ?', [barcode], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error executing query');
    } else {
      res.json(result);
    }
  });
});

// uses the barcode from the frontend to select an ingredient from the database
router.post('/ingredientSelect', (req, res) => {
  const { barcode } = req.body;
    currentCon.query('SELECT IngredientID, IngredientName FROM ingredients WHERE IngredientID = ?', [barcode], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error executing query');
    } else {
      res.json(result);
    }
  });
});

// uses the product name from the frontend to select a product id from the database
router.post('/getProductId', (req, res) => {
  const { productName } = req.body;
  console.log('Product Name:', productName);
  currentCon.query('SELECT ProductID From products WHERE ProductName = ?', [productName], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error executing query');
    } else {
      res.json(result);
      console.log('Product ID:', result);
    }
  });
});

router.post('/getIngredientId', (req, res) => {
  const { ingredientName } = req.body;

  currentCon.query('SELECT IngredientID FROM ingredients WHERE IngredientName = ?', [ingredientName], (err, result) => {
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
  currentCon.query('SELECT IngredientID FROM product_ingredients WHERE ProductID = ?', [productId], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error fetching ingredient IDs(database.js)');
    }

    // formats the ingredient IDs into an array
    const ingredientIds = result.map(row => row.IngredientID);
    console.log('Ingredient IDs:', ingredientIds);

    // grabs the ingredient names based on the ingredient IDs
    currentCon.query('SELECT IngredientName FROM ingredients WHERE IngredientID IN (?)', [ingredientIds], (err, ingredients) => {
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

// adds a productid with a corresponding ingredientid to product_ingredients
router.post('/addIngredientToProduct', (req, res) => {
  const { ProductID, IngredientID } = req.body;
  // console.log('Product ID:', product, 'Ingredient ID:', ingredient);
  
  currentCon.query('INSERT INTO product_ingredients (ProductID, IngredientID) VALUES (?, ?)', [ProductID, IngredientID], (err, result) => {
  if (err) {
    console.error(err);
    res.status(500).send('Error adding ingredient to product');
  } else {
    console.log('Ingredient added to product:', result);
    res.json({ success: true, result });
  }
  });
});

// removes a productid along with a corresponding ingredientid from product_ingredients
router.post('/removeIngredientFromProduct', (req, res) => {
  const { ProductID, IngredientID } = req.body;

  currentCon.query('DELETE FROM product_ingredients WHERE ProductID = ? AND IngredientID = ?', [ProductID, IngredientID], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error removing ingredient from product');
    } else {
      console.log('Ingredient removed from product', result);
      res.json({ success: true, result });
    }
  });
});

router.post('/insertNewIngredient', (req, res) => {
  const { IngredientID, IngredientName } = req.body;

  currentCon.query('INSERT INTO ingredients (IngredientID, IngredientName) VALUES (?,?)', [IngredientID, IngredientName], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error inserting new ingredient');
    } else {
      console.log('New Ingredient successfully added', result);
      res.json({ success: true, result });
    }
  });
});

// starts the database connection when the server starts
module.exports = router;