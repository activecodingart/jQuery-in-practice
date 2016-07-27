$(document).ready(function() {
	
	var span = $('span');
	span.each(function(index, element) {
		if(index % 2 == 0) {
			console.log(index % 2);
			$(element).css('color', 'red');
		};
	});
	
	var paragraphs = $('p');
	paragraphs.each(function(index, element) {
		var button = '<button class="btn btn-info btn-xs" data-tmp="' + (index + 1) + '">Click me</button>';
		$(element).append(button);
	})
	
	$('button').click(function() {
		alert($(this).attr('data-tmp'));
	});
	
});