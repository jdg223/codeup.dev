$('dt').click(function() {
$('dd').fadeToggle('invisible');
});

$('ul').each(function() {
	$(this).children().first().css('font-weight','bold')
})

$('#amis').click(function() {
	$('#amistead').fadeToggle()
})

$('#guad').click(function() {
	$('#guadaulupe').fadeToggle()
})

$('#big').click(function() {
	$('#big_bend').fadeToggle()
})