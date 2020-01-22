
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const SKATServerdb = require('./SKATServerdb.js');

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));

//skal den kalde ajax 'POST' her?
app.get('/getUserData', function(req,res){
    res.json(SKATServerdb.getUserDataByName());
})

const PORT = 8082;
app.listen(PORT, () => {
    console.log("Server listening on port " + PORT);
});