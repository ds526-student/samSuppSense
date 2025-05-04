//imports the express library for web applications and API in node
const express = require('express');

//imports the node js built in path module 
const path = require('path');
//import the file system module to read and write files in the server
const { readFile } = require('fs').promises;

//create an instance o
// defining express application (for defining routes)
const app = express();

app.use(express.static(path.join(__dirname, '../../Frontend')));

//defines route handler for the root URL 
//note: '/' looks for "index.html" by default
app.get('/', async (request, response) => {
    try {
        // Gets the HTML file from the frontend folder
        const html = await readFile(path.join(__dirname, '../../frontend/index.html'), 'utf8');
        //send html back to client
        response.send(html);
    } 
    catch (error) {
        response.status(500).send("error loading page");
    }
});

//route to get the results html and give it to the client
app.get('/results.html', async (request, response) => {
    try {
        // Gets the HTML file from the frontend folder
        const html = await readFile(path.join(__dirname, '../../frontend/results.html'), 'utf8');
        //send html back to client
        response.send(html);
    } 
    catch (error) {
        response.status(500).send("error loading page");
    }
});

//route to get the input html and give it to the client
app.get('/input.html', async (request, response) => {
    try {
        // Gets the HTML file from the frontend folder
        const html = await readFile(path.join(__dirname, '../../frontend/input.html'), 'utf8');
        //send html back to client
        response.send(html);
    } 
    catch (error) {
        response.status(500).send("error loading page");
    }
});



//import the router 
//const userRouter = require('./productRoutes')

//use the router
//app.use('/api', productRoutes)

//let the server listen in the enviroment port or 3000
app.listen(process.env.port || 3000, () => console.log("app available on http://localhost:3000"))

