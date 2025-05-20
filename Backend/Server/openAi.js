const express = require('express');
const router = express.Router();

//@-------use this method to do any Ai processing-------
function getIngredientSummary(ingredientName) {
    return `Summary for ${ingredientName}: This is a placeholder summary that will be replaced with actual information about the ingredient.`;
}

// POST endpoint to process ingredients
router.post('/processProductData', (req, res) => {
    try {
        console.log("openai module reached");
        //gets the array of ingredients from frontend. The formatting is something like [{ "IngredientName": "Beef" }, etcetc..]
        const ingredients = req.body; 

        if (!Array.isArray(ingredients)) {
            return res.status(400).json({ error: "Expected an array of ingredients" });
        }
        else{
            console.log(ingredients);
        }

        //loop to put the summaries into an array
        const summaries = [];
        for (let i = 0; i < ingredients.length; i++) {
            const name = ingredients[i].IngredientName;
            summaries.push({
                ingredient: name,
                summary: getIngredientSummary(name)
            });
        }

        //send response back to frontend
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