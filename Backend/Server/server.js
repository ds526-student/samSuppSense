const express = require('express');
const path = require('path');
const cors = require('cors');


const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());


//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//import and use routes api
const userRouter = require('./database');  
const openAIRouter = require('./openAi');

app.use('/api/db', userRouter);  
app.use('/api/ai', openAIRouter); 


//serve static frontend files
app.use(express.static(path.join(__dirname, '../../Frontend')));

//start server 
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${PORT}`);
  console.log(`Accessible via: http://13.211.191.145:${PORT}`);
});