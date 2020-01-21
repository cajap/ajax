// setting required packages:
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

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
    var token = req.body;
    var tokenString = JSON.stringify(token);
    const base64Url = tokenString.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    let buff = new Buffer.from(base64, 'base64');
    const payloadinit = buff.toString('ascii');
    const payload = JSON.parse(payloadinit);
    console.log(payload);
    res.sendStatus(200);
});

// Setting port
const port = 8081;

// Running the Server with port variable
app.listen(port, () => {
   console.log('server running on port: ' + port)
});