// setting required packages:
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const fs = require('fs');
//const tokenHandler = require('/TokenHandler');

// Create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(bodyParser.json());

// Home / index page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Login Page
app.get('/login', (req, res) => {
    res.sendFile( __dirname + "/login.html" );
});

// getting the token from the login response and decoding it.
app.post('/token', (req,res) => {
    const token = req.body;
    const tokenString = JSON.stringify(token);
    const tokenParsed = JSON.parse(tokenString);

    for (key in tokenParsed) {
        var tokenToVerify = key;
    };

    var decoded = jwt.verify(tokenToVerify, 'example_key');
    console.log(decoded)

});

// Setting port
const port = 8081;

// Running the Server with port variable
app.listen(port, () => {
   console.log('server running on port: ' + port)
});