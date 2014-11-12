var TestA = function(options) {
	var base = this;

	var options = options || {};
	var duration = options.duration || 10;	
	var domain = options.domain || 'http://stg.api.famousfootwear.com'; //default domain to hit

	var requestcount = 0;
	var seconds = 0;

	//use Link Helper
	lh = new LinkHelper();

	base.fireRequest = function() {

		var url = lh.getProduct(domain);
		console.log("hitting: ", url);

		$.get(url, function(d) {
			console.log(d);
			requestcount += 1;
			if (seconds <= options.duration) {						
				base.fireRequest()			
			} else {
				base.finished();
			}
		});
	};

	base.finished = function() {
		console.log("FINISH! Fired " + requestcount + " requests in " + duration + " seconds.");
	}

	base.init = function() {
		console.log("BEGIN! Will run for " + duration + " seconds");
		base.fireRequest();

			
			var countMs = function() {
				if (seconds < 30) { //capping at 30s
					seconds += 1;
					setTimeout( countMs, 1000 );
				} else {
					console.log("stopped tracking seconds")
				}		
			};
			countMs();
	};

	base.init();	
};


