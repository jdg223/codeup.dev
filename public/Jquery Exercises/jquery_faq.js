$('dt').click(function() {
$('dd').slideToggle('invisible');
});

$('ul').each(function() {
	$(this).children().first().css('font-weight','bold')
})

$('#amis').click(function() {
	$('#amistead').slideToggle()
})

$('#guad').click(function() {
	$('#guadaulupe').slideToggle()
})

$('#big').click(function() {
	$('#big_bend').slideToggle()
})