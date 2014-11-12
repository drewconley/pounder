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
		var test = new TestB();
	});
})