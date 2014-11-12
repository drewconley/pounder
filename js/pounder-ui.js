$(function() {
	$('#testA-btn').click(function() {
		$('.test-btn').attr('disabled', 'disabled');		
		var test = new TestA({ duration: 3 });
	});

	$('#testB-btn').click(function() {
		$('.test-btn').attr('disabled', 'disabled');
		$('#stopB').css('display', 'block');	
		var test = new TestB();
	});
})