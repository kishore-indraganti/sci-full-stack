const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://kishore:kishore@aws-us-east-1-portal.25.dblayer.com:20479/stg?ssl=true';

MongoClient.connect(url, function(err, client) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Connection established');
    const db = client.db('stg');
    const collection = db.collection('users');
    collection.insert({name:'dog'}, function(err, result) {
        console.log(err);
        console.log(result);
    });
   /*  collection.find({name: 'Suresh'}, {department: 0}).toArray(function(err, docs) {
        console.log("Found the following records");
        console.log(docs);
      }); */
});
