var TestA = function(options) {
	var base = this;

	//Options
	var options = options || {};
	var duration = options.duration || 10;	
	var domain = options.domain || 'http://stg.api.famousfootwear.com'; //default domain to hit

	//Variables
	var requestcount = 0;
	var seconds = 0;
	var responseTimes = [];

	//use Link Helper
	lh = new LinkHelper();

	base.fireRequest = function() {

		var url = lh.getProduct(domain);
		console.log("hitting");

		startTime = new Date().getTime();

		$.get(url, function(d) {

			//get new Average
			responseTimes.push( new Date().getTime() - startTime );
			base.calcAverageResponse();
			
			//Update counter
			requestcount += 1;

			//Fire again unless time is up
			if (seconds <= options.duration) {				
				base.fireRequest()			
			} else {
				base.finished();
			}
		});
	};

	base.calcAverageResponse = function() {

		var total = 0;
		$.each(responseTimes,function() {
		    total += this;
		});		
		var average = Math.round(total / responseTimes.length);
		
		//update DOM
		$('#avgResponseTime').text(average);
	};

	base.finished = function() {
		console.log("FINISH! Fired " + requestcount + " requests in " + duration + " seconds.");
		camp.fireNext();	
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


