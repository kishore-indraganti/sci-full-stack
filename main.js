var fs = require('fs');
var async = require('async');

async.parallel({
    content1: function(cb) {
        fs.readFile('./hi.txt', function(err, content1) {
            cb(err, content1.toString());
        });        
    },
    content2: function(cb) {
        fs.readFile('./greet.tx', function(err, content2) {
            cb(null, err);
        })
    }
}, function(err, data) {
    console.log('inside finalcallback');
    if(err) {
        console.log(err);
        return;
    }
    console.log(data);
})


