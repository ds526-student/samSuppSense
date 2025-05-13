const express = require('express');
const path = require('path');
const cors = require('cors');
const { processIngredientsWithAI } = require('./openAi'); // Import the service


const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



//serve static frontend files
app.use(express.static(path.join(__dirname, '../../frontend')));

//import and use routes api
const userRouter = require('./database');  
app.use('/api', userRouter); 

//api endpoint for getting AI processed ingredients
app.post('/api/process-ingredients', async (req, res) => {
  try {
    const { productId } = req.body;
    const processedIngredients = await processIngredientsWithAI(productId);
    res.json(processedIngredients);
  } catch (err) {
    console.error('Error processing ingredients:', err);
    res.status(500).json({ error: 'Failed to process ingredients' });
  }
});

//start server 
app.listen(PORT, () => console.log(`App available at http://localhost:${PORT}`));