var async = require('async');
var fs = require('fs');
// parent()

var filePaths = ['1.txt', '2.txt', '3.txt'];

function readFle (path) {
	fs.readFile(path, 'utf-8', function(err, data) {
		if (err) {
			console.log(err);
		} else {
			result[index] = data.toString();
		}
	})
}

console.log(readFle('./files/1.txt'));






/* async.parallel({
	one: function (cb) {
		fs.readFile('./test.txt', function (err, data) {
			if (err)
				return console.log(err);
			cb(err, data.toString());
		})
	},
	two: function (cb) {
		fs.readFile('./test2.txt', function (err, data) {
			if (err)
				return console.error(err);
			cb(err, data.toString());
		})
	},
	three: function (cb) {
		fs.readFile('./test3.txt', function (err, data) {
			if (err)
				return console.error(err);
			cb(err, data.toString());
		})
	},
	four: function (cb) {
		fs.readFile('./test4.txt', function (err, data) {
			if (err)
				return console.error(err);
			cb(err, data.toString());
		})
	}
}, function (err, data) {
	data = data.one + data.two + data.three + data.four;
	fs.writeFile('./text5.txt', data, function () {
		console.log(data);
	})
});
 */
