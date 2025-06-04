const express = require('express');
const router = express.Router();
require('dotenv').config();



const OpenAI = require('openai');
const client = new OpenAI({apiKey: process.env.OpenAI_API_KEY,}); 

async function getIngredientSummary(ingredient) {
  const prompt = `summarise the effects of the following ingredient in the human body: ${ingredient}. Make sure the summary is no more than 3 lines, and is from a creditable source where the information has real scientific research backing it up in the website you are referencing.`;

  const response = await client.chat.completions.create({
    model: 'gpt-4o-mini-search-preview',
    messages: [{ role: 'user', content: prompt }],
  });
  return response.choices[0].message.content;
  
}


//endpoint to process ingredients
router.post('/processProductData', async (req, res) => {
     try {
        const { text } = req.body;
        console.log("Summary requested for:", text);

        if (!text) {
            return res.status(400).json({ error: 'No text provided' });
        }

        const summary = await getIngredientSummary(text);
        console.log("Generated summary: " + summary); 

        res.json({ summary });

    } catch (error) {
        console.error("Summary generation error: " + error); 
        res.status(500).json({ error: 'Failed to generate summary' });
    }
});

module.exports = router;



