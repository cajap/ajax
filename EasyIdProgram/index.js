var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken')

// Create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('public'));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.sendFile( __dirname + "/index.html" );
})

app.post('/token', function(req,res){
    var token = req.body;
    //console.log(require('util').inspect( req.query ));
    var decode = jwt.decode(token, {complete: true});

    console.log(decode.header);
    console.log(decode.payload);

    res.sendStatus(200);
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})