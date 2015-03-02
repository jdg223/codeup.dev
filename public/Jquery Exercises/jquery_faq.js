$('dt').click(function() {
$('dd').toggleClass('invisible');
});

$('ul').each(function() {
	$(this).children().first().css('font-weight','bold')
})

$('li').click(function() {
	$(this).parent().addClass('invisible')
})