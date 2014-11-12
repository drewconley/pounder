var TestB = function(options) {

	var base = this;	
	var requestcount = 0;
	var stop = false;

	var options = options || {};
	var domain = options.domain || 'http://stg.api.famousfootwear.com'; //default domain to hit
	var duration = options.duration || 3000; //ms


	//use Link Helper
	lh = new LinkHelper();

	function success(d) {				
		console.log('success!');
	};

	function fail(d) {
		console.log('fail', d);
	};

	base.fireRequest = function() {

		//get fresh URL
		var url = lh.getProduct(domain);

		//if not been told to stop, fire the request
		if (!stop) {

			$.get(url).then(success, fail);
				console.log("pounding");

			//queue up the next fire
			setTimeout(base.fireRequest, 10 );

		} else {
			base.finished();
		}
	};

	base.finished = function() {		
		camp.fireNext();
	};

	base.init = function() {
		
		$('#stopB').click(function() {
			stop = true;			
		});
		setTimeout(function() {
			stop = true;
			console.log('reached time limit');
		}, duration);

		base.fireRequest();
	};

	base.init();	
}