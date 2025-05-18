// processing.js
const express = require('express');
const router = express.Router();

function getIngredientSummary(ingredientName) {
    return `Summary for ${ingredientName}: This is a placeholder summary that will be replaced with actual information about the ingredient.`;
}

// POST endpoint to process ingredients
router.post('/api/ai/processProductData', (req, res) => {
    try {
        // 1. Get the array of ingredients from frontend
        const ingredients = req.body; // Expects [{ "IngredientName": "Beef" }, ...]

        // 2. Validate input
        if (!Array.isArray(ingredients)) {
            return res.status(400).json({ error: "Expected an array of ingredients" });
        }

        const summaries = [];
        for (let i = 0; i < ingredients.length; i++) {
            const name = ingredients[i].IngredientName;
            summaries.push({
                ingredient: name,
                summary: getIngredientSummary(name)
            });
        }

        // 4. Send response
        res.json({
            success: true,
            data: summaries
        });

    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ 
            success: false,
            error: "Internal server error" 
        });
    }
});

module.exports = router;