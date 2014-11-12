var TestB = function(options) {
	var base = this;	
	var requestcount = 0;
	var stop = false;

	function success(d) {		
		console.log(d);
		if (!stop) {
			setTimeout( base.fireRequest, 10 );
		} else {
			console.log("STOP B");
		}
	};
	function fail(d) {
		console.log('fail');
	};

	base.fireRequest = function() {
		$.get('/test.json').then( success, fail );
	};

	base.init = function() {

		$('#stopB').click(function() {
			stop = true;			
		});

		console.log("BEGIN! Will fire every 10ms");
		base.fireRequest();
	};

	base.init();	
}