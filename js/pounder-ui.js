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
	//ffapi.brownshoeinc.netdna-cdn.com
	{
		name: "Amazon Web A",
		model: 'TestA',
		duration: 10, //seconds
		domain: 'http://ffapi.brownshoeinc.netdna-cdn.com',
		DOMNode: '#zone2-testA'
	},
	{
		name: "Amazon Web B",
		model: 'TestB',
		duration: 60000,		
		domain: 'http://ffapi.brownshoeinc.netdna-cdn.com',
		DOMNode: '#zone2-testB'
	}
	// {
	// 	name: "App Fog | Node",
	// 	model: 'TestA',
	// 	duration: 60, //seconds
	// 	domain: 'http://ffapi-node.uc01.clc.af.cm',
	// 	DOMNode: '#zone1-testA'
	// },
	// {
	// 	name: "App Fog | Node",
	// 	model: 'TestB',
	// 	duration: 10000,
	// 	domain: 'http://ffapi-node.uc01.clc.af.cm',
	// 	DOMNode: '#zone1-testB'
	// }	
];
var camp = new Campaign(series, {});