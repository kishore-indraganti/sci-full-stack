const {
    readFile
} = require('fs');

function customReadFile(path, cb) {
    return new Promise(function(resolve, reject) {
        /* readFile(path, function (err, data) {
            if (err) {
                console.log(`Error on reading file ${err} from ${path} at ${new Date()}`);
                reject(err);
            } else {
                resolve(data.toString());
            }
        }); */
        setTimeout(function() {
            resolve('Hello');
        }, 2000);
    });
}

customReadFile('./greet.txt').then(
    function(data) {
        console.log('Inside successs');
        console.log(data);
    },
    function(err) {
        console.log('Inside error');
        console.log(err);
    }
);



