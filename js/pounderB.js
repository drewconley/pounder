var TestB = function(options) {

	var base = this;	
	lh = new LinkHelper();
	
	//Options
	var options = options || {};
	var domain = options.domain || 'http://stg.api.famousfootwear.com'; //default domain to hit
	var duration = options.duration || 3000; //ms

	//Variables
	var requestcount = 0;
	var stop = false;
	var responseTimes = [];


	base.fireRequest = function(start_time) {

		//get fresh URL
		var url = lh.getProduct(domain);

		//if not been told to stop, fire the request
		if (!stop) {

			console.log("pounding (B)", start_time);

			$.get(url, {}, function(data, status, xhr) {							
				xhr.done(function(d) {					
					var request_time = new Date().getTime() - start_time;
					
					//get new Average
					responseTimes.push( request_time );
					base.calcAverageResponse();
				})				
			});		

			//queue up the next fire
			setTimeout(function() {
				base.fireRequest( new Date().getTime() );
			}, 10 );

		} else {
			base.finished();
		}
	};

	base.calcAverageResponse = function() {

		var total = 0;
		$.each(responseTimes, function() {
		    total += this;		
		});		
		var average = Math.round(total / responseTimes.length);
		

		//update DOM	
		$(options.DOMNode).find('.delay').text(average);
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

		base.fireRequest( new Date().getTime() );
	};

	base.init();	
}