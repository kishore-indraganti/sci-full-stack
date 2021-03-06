let counter = 0;
function tick(sec) {
	console.log('Execution count', counter++);
	var fn = function (resolve, reject) {
		setTimeout(function () {
			if (sec % 2 !== 0) {
				return reject('Expected even number, but recieved odd');
			}
			return resolve(sec + 500)
		}, sec)
	};
	return new Promise(fn);
}

Promise.all([tick(1000), tick(2000)]).then(
	function(data) {
		console.log(data);
	}
)

/* tick(1000)
	.then(
		function (data) {
			return tick(data)
		}
	)
	.then(
		function (data) {
			console.log('Inside resolve', data);
			return tick(data + 1)
		}
	)
	.then(
		function (data) {
			console.log('Inside resolve', data);
			return tick(data)
		}
	)
	.then(
		function (data) {
			console.log('Inside resolve', data);
			return tick(data)
		}
	)
	.then(
		function (data) {
			console.log('Inside resolve', data);
			return tick(data)
		}
	)
	.catch(
		function (err) {
			console.log('Inisde catch', err);
		}
	);


	var promise1 = new Promise(function(resolve, reject) {
		setTimeout(resolve, 100, 'foo');
	}); */
