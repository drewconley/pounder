$(function() {
	$('#testA-btn').click(function() {
		$('.test-btn').attr('disabled', 'disabled');		
		var test = new TestA(
			{ 
				duration: 10,
				domain: 'http://ffapi-node.uc01.clc.af.cm'
			}
		);
	});

	$('#testB-btn').click(function() {
		$('.test-btn').attr('disabled', 'disabled');
		$('#stopB').css('display', 'block');	
		var test = new TestB({
			duration: 400
		});
	});
});


var series = [
	{
		name: "App Fog | Node",
		model: 'TestB',
		duration: 600,
		domain: 'http://ffapi-node.uc01.clc.af.cm'
	},
	{
		name: "App Fog | Node #2",
		model: 'TestB',
		duration: 600,
		domain: 'http://ffapi-node.uc01.clc.af.cm'
		//domain: 'http://ffapi.uc01.clc.af.cm'
	}
];
var camp = new Campaign(series, {});