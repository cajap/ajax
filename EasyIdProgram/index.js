var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var util = require('util');


// Create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('public'));
app.use( bodyParser.json());

app.get('/index', function (req, res) {
    res.sendFile( __dirname + "/index.html" );
   
})

app.post('/test', function(req,res){
    var token = req.param('token');
    //console.log(require('util').inspect( req.query ));
    
    res.send(token);
    
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})