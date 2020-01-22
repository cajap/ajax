var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:9999/";

//TODO: solution to get data from the login box in EASY id program
const dataFromProgram = '{"name":"A"}'


//find dataFromProgram name in database
var findDoc = function(db, callback){
    //database
    const dbo = db.db("SKAT");
    //find data
    try {
        var user = JSON.parse(dataFromProgram);
    } catch (err) { console.log(err); }
    //make query
    const query = { "name": user.name };

    //find data in collection
    dbo.collection("TaxPayer").find(query).toArray(function (err, docs) {
        if (err) throw err;
        console.log("found record: ");
        callback(docs);
    });
}

MongoClient.connect(url, {  useNewUrlParser: true, useUnifiedTopology: true }, function (err, db) {
    if (err) throw err;
    console.log("database connected");
    findDoc(db, function(docs){
        console.log(docs);
        exports.getUserDataByName = function() {
            return docs;
        }
        db.close();
    })
});
