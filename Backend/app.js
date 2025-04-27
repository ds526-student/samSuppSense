//express app creates urls for users to navigate to
const express = require('express');
const { readFile } = require('fs');

const app = express();
const { readFile } = require('fs');

//reads html file and send it to the user browsing the site
app.get('/', (request, response) => {

    //getss the html file from frontend folder
    readFile(path.join(__dirname, '../frontend/app.html'), 'utf8', (err, data) => {
        if (err) {
            response.status(500).send('Server Error: Unable to read html file');
        }   
        else {
            response.send(data);    
        } 
    });     
});


