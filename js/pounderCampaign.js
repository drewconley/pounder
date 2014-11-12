var Campaign = function(series, options) {
	base = this;

	options = options || {};
	options = options.delay || 500; //delay before starting the next in series.

	var series_index = 0;

	base.fireNext = function() {
		
		series_index+=1;		
		if (series_index < series.length) {
			fire();			
		}
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
