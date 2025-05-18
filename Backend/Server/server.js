const express = require('express');
const path = require('path');
const cors = require('cors');


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
//const openAIRouter = require('./openAi');

app.use('/api/db', userRouter);  
//app.use('/api/ai', openAIRouter); 

//start server 
app.listen(PORT, () => console.log(`App available at http://localhost:${PORT}`));