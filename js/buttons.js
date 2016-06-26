'use strict';

document.getElementById('send').onclick = function () {
	var inputName = document.getElementById('name').value;
	var inputMessage = document.getElementById('message').value;
	
		if (inputName.length < 2) {
			alert('Введите ваше имя');
			return;
		}
		if (inputMessage.length < 10) {
			alert('Введите сообщение не менее десяти символов');
			return;
		}
	

	document.getElementById('inputFrame').style.display = 'none';
	document.getElementById('messageSend').style.display = 'block';
	document.getElementById('send').remove('btn');
};


$(document).ready(function () {							// Popup open/close
	var buttons = $('button');
	var popup = $('.popup-wrapper');
	var closePopup = $('.popup-block__close');

	buttons.click(function () {

		popup.addClass('popup-wrapper_active');
		$('body').css({'overflow': 'hidden'});
	});
	
		closePopup.click(function() {
		popup.removeClass('popup-wrapper_active');
		$('body').css({'overflow': 'auto'});
	});
});

/*
$(document).ready(function () {
		var buttons = $('button');
		buttons.on('click', function () {
			var popup = $('.popup-wrapper');
			if ($(this) !== $('#send')) {
			popup.toggleClass('popup-wrapper_active');
			return;
			}
		});
});
console.log();

*/

