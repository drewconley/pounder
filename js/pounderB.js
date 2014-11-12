var TestB = function(options) {

	var base = this;	
	var requestcount = 0;
	var stop = false;

	var options = options || {};
	var domain = options.domain || 'http://stg.api.famousfootwear.com'; //default domain to hit

	//use Link Helper
	lh = new LinkHelper();

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

		var url = lh.getProduct(domain);
		console.log("hitting: ", url);		
		$.get(url).then( success, fail );
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