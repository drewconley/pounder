var Campaign = function(series, options) {
	base = this;

	options = options || {};
	delay = options.delay || 1000; //delay before starting the next in series.

	var series_index = 0;

	base.fireNext = function() {
		
		setTimeout( function() {
			series_index+=1;		
			if (series_index < series.length) {
				fire();			
			}
		}, delay ) //wait before firing next in series
	};

	base.init = function() {
		fire();
	};
	base.init();


	// module helpers
	function fire() {
		var trial = series[series_index];	
		console.log( "########### Begin: " + trial.name )		
		eval( 'new '+trial.model+'(trial)');
	};
};
