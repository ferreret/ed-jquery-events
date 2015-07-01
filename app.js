$(document).ready(function () {
	/*$('#target').on('click', function () {
		alert("Hola");
	})*/
	
	var $target = $('#target');

	$('#botones').on('click', 'a', function (e) {
		e.preventDefault();
		$target.removeClass().addClass($(this).attr('id'));
		$(this).addClass('active').siblings().removeClass('active');
		//console.log($(this).attr('id'));
	});

	$('#off').on('click', function () {
		$('#botones').off('click');
	})

	$('#button').on('click', function (e) {
		$('#mensajes').append('<li>Click en el botón</li>');
		e.stopPropagation();
	});

	$('#container').on('click', function () {
		$('#mensajes').append('<li>Click en el contenedor</li>');
	});

	$('#link').on('click', function (e) {
		$('#container').css('background-color', 'steelblue');
		e.preventDefault();
	});

	/*$target.on('mouseenter mouseleave', function () {		
		$(this).toggleClass('yellow');
	});*/

	/*$('#blue').on('click', function () {
		$target.removeClass().addClass('blue');		
		$(this).addClass('active');
		$(this).siblings().removeClass();
	});

	$('#red').on('click', function () {
		$target.removeClass().addClass('red');		
		$(this).addClass('active');
		$(this).siblings().removeClass();
	});

	$('#green').on('click', function () {
		$target.removeClass().addClass('green');		
		$(this).addClass('active');
		$(this).siblings().removeClass();
	});*/

});