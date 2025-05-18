// processing.js
const express = require('express');
const router = express.Router();

function getIngredientSummary(ingredientName) {
    return `Summary for ${ingredientName}: This is a placeholder summary that will be replaced with actual information about the ingredient.`;
}

router.post('/processProductData', async (req, res) => {
    try {
        const { productData, ingredients } = req.body;
        
        //ingredients from getIngredients endpoint is an array of objects with just IngredientName
        const ingredientsWithSummaries = ingredients.map(ingredient => ({
            IngredientName: ingredient.IngredientName,
            summary: getIngredientSummary(ingredient.IngredientName)
        }));

        res.json({
            product: productData,
            ingredients: ingredientsWithSummaries
        });

    } catch (error) {
        console.error('Error processing product data:', error);
        res.status(500).send('Error processing product data');
    }
});

module.exports = router;