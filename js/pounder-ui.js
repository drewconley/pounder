// $(function() {
// 	$('#testA-btn').click(function() {
// 		$('.test-btn').attr('disabled', 'disabled');		
// 		var test = new TestA(
// 			{ 
// 				duration: 10,
// 				domain: 'http://ffapi-node.uc01.clc.af.cm'
// 			}
// 		);
// 	});

// 	$('#testB-btn').click(function() {
// 		$('.test-btn').attr('disabled', 'disabled');
// 		$('#stopB').css('display', 'block');	
// 		var test = new TestB({
// 			duration: 400
// 		});
// 	});
// });


var series = [
	{
		name: "App Fog | Node",
		model: 'TestB',
		duration: 600,
		domain: 'http://ffapi-node.uc01.clc.af.cm'
	},
	{
		name: "App Fog | PHP",
		model: 'TestB',
		duration: 600,		
		domain: 'http://ffapi.uc01.clc.af.cm'
	}
	// {
	// 	name: "App Fog | Node",
	// 	model: 'TestA',
	// 	duration: 6,
	// 	domain: 'http://stg.api.famousfootwear.com'
	// },
	// {
	// 	name: "App Fog | PHP",
	// 	model: 'TestA',
	// 	duration: 6,
	// 	domain: 'http://stg.api.famousfootwear.com'
	// }



];
var camp = new Campaign(series, {});