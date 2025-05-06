//importing necessary modules
const express = require('express');
const router = express.Router();
const db = require('/db');
//call the function to get the summary from openai
const { getSummaryFromOpenAI } = require('../utils/openai');

//route to get product details by barcode
router.get('/summary', async (req, res) => {
  const { barcode } = req.query;

  try {
    const [productRows] = await db.query('SELECT * FROM products WHERE barcode = ?', [barcode]);
    if (productRows.length === 0) return res.status(404).json({ error: 'Product not found' });

    const productId = productRows[0].id;
    const [ingredientRows] = await db.query('SELECT ingredient_name FROM product_ingredients WHERE product_id = ?', [productId]);

    const ingredientNames = ingredientRows.map(row => row.ingredient_name);

    if (ingredientNames.length === 0) return res.status(404).json({ error: 'No ingredients found' });

    const placeholders = ingredientNames.map(() => '?').join(', ');
    const [papers] = await db.query(`SELECT title, abstract FROM research_papers WHERE ingredient_name IN (${placeholders})`, ingredientNames);

    if (papers.length === 0) return res.status(404).json({ error: 'No research papers found' });

    const summary = await getSummaryFromOpenAI(ingredientNames, papers);

    res.json({ summary });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;