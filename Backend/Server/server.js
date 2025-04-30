//imports the express library for web applications and API in node
const express = require('express');

//imports the node js built in path module 
const path = require('path');
//import the file system module to read and write files in the server
const { readFile } = require('fs').promises;

//create an instance of express application (for defining routes)
const app = express();

//defines route handler for the root URL ("/") 
app.get('/', async (request, response) => {

    // Gets the HTML file from the frontend folder
    response.send( await readFile(path.join(__dirname, '../frontend/index.html'), 'utf8'));
    
});

//import the router 
const userRouter = require('./productRoutes')

//use the router
app.use('')

//let the server listen in the enviroment port or 3000
app.listen(process.env.port || 3000, () => console.log("app available on http://localhost:3000"))

