const app = require('express')();
const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://kishore:kishore@aws-us-east-1-portal.25.dblayer.com:20479/stg?ssl=true';


app.get('/employees', function (req, res) {
    MongoClient.connect(url, function (err, client) {
        if (err) {
            console.log(err);
            return;
        }
        console.log('Connection established');
        const db = client.db('stg');
        const collection = db.collection('users');
        const sort = {
            sort: req.query.sort || 'name',
            direction: req.query.sortdirection || 'desc',
        };
        delete req.query.sort;
        delete req.query.sortdirection;

        console.log(req.query);
        collection.find(req.query).toArray(function (err, docs) {
            docs = docs.map(function(item) {
                delete item._id;
                return item;
            });
            res.send(docs);
        });
    });
});

app.listen(3333);
