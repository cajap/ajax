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

    jwt.verify(tokenToVerify, 'example_key', function(err) {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        } else {
            fs.readFile('./json/users.json', (err, data) => {
                if (err) console.log(err)
                let user_id = JSON.parse(data);
                //console.log(tokenToVerify)
                console.log(user_id);
                res.status(200).send(user_id);
            })
        }
    });
    var decoded = jwt.verify(tokenToVerify, 'example_key');
    console.log(decoded.email);
    console.log(decoded.name);
    console.log(decoded.iat);
});

// Setting port
const port = 8081;

// Running the Server with port variable
app.listen(port, () => {
   console.log('server running on port: ' + port)
});