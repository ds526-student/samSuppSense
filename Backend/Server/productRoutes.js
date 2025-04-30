//imports expressjs library 
const express = require('express');
//router to organise endpoints
const router = express.Router();
//imports getProductByBarcode function from productController.js
//this function talks to the db and finds a product by its barcode
const { getProductByBarcode } = require('./productController');

//if the user is in /product
//the /product indicate the end part of the url. for example, the url could be http://localhost:3000/api/product?barcode=123 
router.get('/product', async (req, res) => {
  try {
    //if the url is the above, then req.query.barcode will be 123
    const { barcode } = req.query;
    //calls imported barcode function to search the databse. await pauses execution until db reponds 
    const product = await getProductByBarcode(barcode);
    
    //handling not found errors
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    
    //if product is found then send it back as a json file
    res.json(product);
  } 
  catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

//exporting router makes it available for other files
module.exports = router;