const express = require('express');
const path = require('path');
const cors = require('cors');
const OpenAI = require("openai");

const getSummary = require("./openAi")

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//serve static frontend files
app.use(express.static(path.join(__dirname, '../../Frontend')));


app.post('/api/summary', async (req, res) => {
    try {
        const { text } = req.body;
        console.log("Summary requested for:", text);

        if (!text) {
            return res.status(400).json({ error: 'No text provided' });
        }

        const summary = await getSummary(text);
        console.log("Generated summary:", summary); 

        res.json({ summary });
    } catch (error) {
        console.error("Summary generation error:", error); 
        res.status(500).json({ error: 'Failed to generate summary' });
    }
});


//import and use routes api
const userRouter = require('./database');  
app.use('/api', userRouter); 



//start server 
app.listen(PORT, () => console.log(`App available at http://localhost:${PORT}`));