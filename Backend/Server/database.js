const express = require('express');
const router = express.Router();
const mysql = require('mysql');


// information for connecting to the database
let currentCon = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "samsuppsense"
});

// connect to the database
currentCon.connect(function(err) {
  if (err) throw err;
  console.log("Database connected!");
});


// returns all the products in the database
router.post('/getAllProducts', (req, res) => {
  currentCon.query('SELECT ProductName FROM products', (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error executing query');
    } else {
      res.json(result);
    }
  });
});

// returns all the ingredients in the database
router.post('/getAllIngredients', (req, res) => {
  currentCon.query('SELECT IngredientName FROM ingredients', (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error executing query');
    } else {
      res.json(result);
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

// gets all the ingredients and messages from the messages database
router.post('/getAllMessages', (req, res) => {
  currentCon.query('SELECT IngredientName, Message FROM Messages', (err, result) => {
    if (err) {
      console.error('Error querying all messages (SELECT IngredientName, Message):', err);
      return res.status(500).json({ success: false, message: 'Error retrieving all messages.' });
    }
    res.json(result);
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
      res.clearCookie('loggedIn');
      console.log('Ingredient removed from product', result);
      res.json({ success: true, result });
    }
  });
});

// adds a new ingredient to the database
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

//gets the message for the ingredient
router.post('/getMessage', (req, res) => {
  const { IngredientName } = req.body;
  currentCon.query('SELECT Message FROM messages WHERE IngredientName = ?', [IngredientName], (err, result) => {
    if (err) {
      console.error("Error querying Messages Table:", err); // Log the error
      return res.status(500).send("Error querying Messages Table");
    }

    if (result && result.length > 0) { // Check if result is not null/undefined AND has elements
      return res.json({ exists: true, message: result[0].Message });
    } else {
      return res.json({ exists: false, message: null }); // Return exists: false if no data found
    }
  });
});

// insert a new message and ingredient to messages
router.post('/addEntryToMessages', (req, res) => {
  const { IngredientName, Message } = req.body;
  currentCon.query('INSERT INTO Messages (IngredientName, Message) VALUES (?, ?)', [IngredientName, Message], (err, result) => {
    if (err) {
      return res.status(500).send("Error Inserting Message");
    }
    return res.json({ success: true });
  });
});

// modify the message for the corresponding ingredient
router.post('/modifyMessageForIngredient', (req, res) => {
  const { IngredientName, Message } = req.body;
  currentCon.query('UPDATE Messages SET Message = ? WHERE IngredientName = ?', [Message, IngredientName], (err, result) => {
    if (err) {
      console.log("error updating message");
      return res.status(500).json({ success: false, message: 'failed to update message' });
    }

    if (result.affectedRows > 0) {
      res.json({ success: true, message: 'Message updated' });
    } else {
      res.status(404).json({ success: false, message: 'Message couldnt be found' })

    }
  });
});

// gets true or false if combination of username and password exists in the database
router.post('/getLogin', (req, res) => {
  const { username, password } = req.body;
  currentCon.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], (err, result) => {
    if (err) {

      console.log('Login error');
      return res.status(500).json({ success: false, message: 'Failed to login: error occured' });
    }

    if (result.length > 0) {
      res.cookie('loggedIn', 'true', {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000, // 1 day
        sameSite: 'lax',
        secure: false // set to true if using HTTPS
      });

      res.json({ success: true })
    } else {
      res.json({ success: false })
    }
  });
});


// gets true or false if combination of username and password exists in the database
router.post('/getLogin', (req, res) => {
  const { username, password } = req.body;
  currentCon.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], (err, result) => {
    if (err) {

      console.log('Login error');
      return res.status(500).json({ success: false, message: 'Failed to login: error occured' });
    }

    if (result.length > 0) {
      res.cookie('loggedIn', 'true', {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000, // 1 day
        sameSite: 'lax',
        secure: false // set to true if using HTTPS
      });

      res.json({ success: true })
    } else {
      res.json({ success: false })
    }
  });
});


router.get('/checkLogin', (req, res) => {

  const loggedIn = req.cookies.loggedIn === 'true';
  res.json({ loggedIn });
});



// logout
router.post('/logout', (req, res) => {
  res.clearCookie('loggedIn');
  res.json({ success: true, message: "Logged out successfully" });
});



//starts the database connection when the server starts
module.exports = router;
