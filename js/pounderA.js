var TestA = function(options) {
	var base = this;
	var duration = options.duration || 10;
	var requestcount = 0;
	var seconds = 0;

	base.fireRequest = function() {
		$.get('/test.json', function(d) {
			console.log(d);
			requestcount += 1;
			if (seconds <= options.duration)	 {		
				setTimeout( base.fireRequest, 200 ) //artificial delay
				//base.fireRequest()				
			} else {
				base.finished();
			}
		});
	};

	base.finished = function() {
		console.log("FINISH! Fired " + requestcount + " requests.");
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


