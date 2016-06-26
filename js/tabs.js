'use strict';

$(document).ready(function () {

	var tabsContent = $('.tabs__item').data('content');

	var tabs = $('.tabs');
	tabs.on('click', '.tabs__item', function () {
		
		$('#tabs .tabs__item').removeClass('tabs__item_active');
		$(this).addClass('tabs__item_active');
		
	});
	
});

