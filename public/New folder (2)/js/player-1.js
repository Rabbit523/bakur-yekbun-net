//$("main").addClass("pre-enter").removeClass("with-hover");
//setTimeout(function(){$("main").addClass("on-enter");}, 500);
//setTimeout(function(){$("main").removeClass("pre-enter on-enter");setTimeout(function(){$("main").addClass("with-hover");}, 50);}, 2000);

//$(".flip, .back a").click(function(){$(".player").toggleClass("playlist");});

$(".flip.playlist_btn, .back_1 a").click(function(){$(".player").toggleClass("playlist_1");});
$(".flip.song_btn, .back_2 a").click(function(){$(".player").toggleClass("playlist_2");});

$(".bottom a").not(".flip").click(function(){$(this).toggleClass("active");});

/*
$('#np-volume').on('input propertychange', function() {
		var val = ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'));

		$('#volume-progressbar').css('background',
			'-webkit-gradient(linear, left top, right top, '
			+ 'color-stop(' + 0 + ', #D57D67), '
			+ 'color-stop(' + val + ', #EDB472), '
			+ 'color-stop(' + val + ', #CCC)'
			+ ')'
		);
	});
*/
