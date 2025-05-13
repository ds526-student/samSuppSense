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

// uses the barcode from the frontend to select an ingredient from the database
router.post('/ingredientSelect', (req, res) => {
  const { barcode } = req.body;
    con.query('SELECT IngredientID, IngredientName FROM ingredients WHERE IngredientID = ?', [barcode], (err, result) => {
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
  con.query('SELECT ProductID From products WHERE ProductName = ?', [productName], (err, result) => {
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

  con.query('SELECT IngredientID FROM ingredients WHERE IngredientName = ?', [ingredientName], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error executing query');
    } else {
      res.json(result);
    }
  });
});

// uses the product ID to get the ingredients from the database using the fetchIngredientsFromDB method
router.post('/getIngredients', async (req, res) => {
  try {
    const ingredients = await fetchIngredientsFromDB(req.body.productId);
    res.json(ingredients); // Send to frontend
  } catch (err) {
    console.error(err);
    res.status(500).send('Database error');
  }
});

// adds a productid with a corresponding ingredientid to product_ingredients
router.post('/addIngredientToProduct', (req, res) => {
  const { ProductID, IngredientID } = req.body;
  // console.log('Product ID:', product, 'Ingredient ID:', ingredient);
  
  con.query('INSERT INTO product_ingredients (ProductID, IngredientID) VALUES (?, ?)', [ProductID, IngredientID], (err, result) => {
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

  con.query('DELETE FROM product_ingredients WHERE ProductID = ? AND IngredientID = ?', [ProductID, IngredientID], (err, result) => {
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

  con.query('INSERT INTO ingredients (IngredientID, IngredientName) VALUES (?,?)', [IngredientID, IngredientName], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error inserting new ingredient');
    } else {
      console.log('New Ingredient successfully added', result);
      res.json({ success: true, result });
    }
  });
});

router.get('/ingredients/:productId', async (req, res) => {
  const { productId } = req.params;
  try {
    const ingredients = await processIngredients(productId);
    res.json({ success: true, ingredients });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Error fetching ingredients', error: err.message });
  }
});

//method that gets the ingredients
const fetchIngredientsFromDB = (productId) => {
  return new Promise((resolve, reject) => {
    // First query: Get IngredientIDs
    con.query(
      'SELECT IngredientID FROM product_ingredients WHERE ProductID = ?',
      [productId],
      (err, result) => {
        if (err) return reject(err);

        const ingredientIds = result.map(row => row.IngredientID);
        console.log('Ingredient IDs:', ingredientIds);

        // Second query: Get IngredientNames
        con.query(
          'SELECT IngredientName FROM ingredients WHERE IngredientID IN (?)',
          [ingredientIds],
          (err, ingredients) => {
            if (err) reject(err);
            else resolve(ingredients);
          }
        );
      }
    );
  });
};



// starts the database connection when the server starts

// exports current module as well as method to get ingredients  
module.exports = {
  router,  // for Express
  fetchIngredientsFromDB,
};