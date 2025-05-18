const express = require('express');
const router = express.Router();



// uses the product ID to get the ingredients from the database
router.post('/getIngredients', async (req, res) => {
  try {
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
      currentCon.query('SELECT IngredientName FROM ingredients WHERE IngredientID IN (?)', [ingredientIds], async (err, ingredients) => {
        if (err) {
          console.error(err);
          return res.status(500).send('Error fetching ingredients');
        }

        const summarisedIngredients = [];
        for (const ingredient of ingredients) {
          summarisedIngredients.push({
            name: ingredient.IngredientName,
            summary: await useOpenAIForSummary(ingredient.IngredientName)
          });
        }

        //returns the ingredient names to the frontend
        console.log('Ingredients with summaries:', summarisedIngredients);
        res.json(summarisedIngredients);
      });
    });
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).json({
      error: "Failed to fetch ingredients",
      details: error.message  // Send error details as JSON
    });
  }
});


async function useOpenAIForSummary(ingredient) {
  // impelemnt openAI api here and then return the processed string
  // this is just a placehlder so that it returns something
  return "Sample summary for " + ingredient;
}

module.exports = router;
