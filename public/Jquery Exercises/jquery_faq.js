$('dt').click(function() {
$('dd').toggle('invisible');
});

$('ul').each(function() {
	$(this).children().first().css('font-weight','bold')
})

$('li').click(function() {
	$(this).parent().hide('invisible')
})