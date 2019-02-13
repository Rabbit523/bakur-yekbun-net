export default {
  mounted() {
	  
	 $(".colorPickBox").click(function(){
		$("#bigBox").css("background-image",$(this).css("background-image"));
	});
	
	$(".colorPickBox").click(function(){
		$("#bigBox").css("background-color",$(this).css("background-color"));
	});

function ColorBox(){
		if(document.getElementById('bigBox').value == 0){
		document.getElementById('bigBox').className = 'textarea';
		document.getElementById('bigBox').style.padding = '80px 0px';
		document.getElementById('bigBox').style.textAlign = 'center';
		document.getElementById('bigBox').style.fontSize = '25px';
		document.getElementById('bigBox').style.color = 'rgb(255, 255, 255)';
		document.getElementById('bigBox').style.fontWeight = '700';
		document.getElementById('bigBox').style.fontWeight = '700';
		document.getElementById('bigBox').style.transition  = 'all 0.28s ease-in-out 0s';
	}
	
}

function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
		x.style.display = "none";
    } else {
       x.style.display = "block";
    }    
	
	var x = document.getElementById("myDIV2");
    if (x.style.display === "none") {
		x.style.display = "none";
    } else {
       x.style.display = "block";
    }
	
	var x = document.getElementById("textbox");
    if (x.style.display === "none") {
		x.style.display = "block";
    } else {
       x.style.display = "none";
    }
}

function previewFileimg(x){
       var file = document.getElementById(x).files[0];
       var reader  = new FileReader();
       reader.onloadend = function () {
       	VPcropremove = document.getElementById(x).parentNode;
       	groupcrop = VPcropremove.parentNode;
		//
		var t='t';
		VPcrimg = document.createElement('img');
		VPcrimg.className ='VPcimg';
		VPcrimg.src = "";
		VPcrimg.id ='VPcrimg'+t;
		VPcropremove.appendChild(VPcrimg);
		VPcrimg.src = reader.result;
		//
		VPcropremove.id = 'VPcropremove'+t;
		VPcropsw = document.createElement("input");
		VPcropsw.id= document.getElementById(x).id;
		VPcropsw.className = document.getElementById(x).className;
		VPcropsw.value = file.name;
		VPcropsw.name =document.getElementById(x).name;
		VPcropremove.appendChild(VPcropsw);
		//
		VPcropspan = document.createElement('span');
		VPcropspan.className ='VPcropspan';
		VPcropspan.id = "VPcropspan"+t;
		VPcropspan.innerHTML = 'x';
		VPcropspan.setAttribute('onclick',''+VPcropremove.id+'.remove()');
		VPcropremove.appendChild(VPcropspan);
		//
		VPcorpKt = document.createElement('div');
		VPcorpKt.className = 'VPcrop';
		VPcorpKt.id = 'VPcorpKt'+t;
		groupcrop.appendChild(VPcorpKt);
		//
		VPcropint = document.createElement('input');
		VPcropint.className ='VPcropint';
		VPcropint.name = '';
		VPcropint.type ='file';
		VPcropint.value='';
		VPcropint.id='VPcropint'+t;
		VPcropint.accept =document.getElementById(x).accept;
		VPcropint.setAttribute('onchange','previewFileimg("'+VPcropint.id+'")');
		VPcorpKt.appendChild(VPcropint);
		document.getElementById(x).remove();
       }
   	 if (file) {
           reader.readAsDataURL(file); //reads the data as a URL
       } else {
           PoundNote('Thông Báo','Bạn chưa chọn hình ảnh',1);
       }
  }


 // Cross Btn
  
  
  $(function() {
// OPACITY OF BUTTON SET TO 0%
$(".cross-btn").css("opacity","0");
 
// ON MOUSE OVER
$(".cross-btn").hover(function () {
 
// SET OPACITY TO 70%
$(this).stop().animate({
opacity: .9
}, "fast");
},
              
 
// ON MOUSE OUT
function () {
 
// SET OPACITY BACK TO 50%
$(this).stop().animate({
opacity: 0
}, "slow");
});
});


/* Clicks within the dropdown won't make
   it past the dropdown itself */
$(".menudemo").click(function(e){
  e.stopPropagation();
});



	function MyfunctionMenu(){
		document.getElementById('textbox_EditMenu').style.display = 'block';
		document.getElementById('textbox_EditMenu2').style.display = 'none';
		document.getElementById('multiBoxes').style.display = 'block';
	}
	
	function functionColorBox(){
		document.getElementById('textbox_EditMenu').style.display = 'none';
		document.getElementById('multiBoxes').style.display = 'none';
	}
	
	
	function myFunction1(){
		document.getElementById('IconMenu1').style.display = 'block';
		document.getElementById('IconMenu3').style.display = 'none';
		document.getElementById('IconMenu4').style.display = 'none';
		document.getElementById('IconMenu5').style.display = 'none';
		document.getElementById('IconMenu6').style.display = 'none';
		document.getElementById('IconMenu7').style.display = 'none';
		document.getElementById('IconMenu8').style.display = 'none';
		document.getElementById('IconMenu9').style.display = 'none';
		document.getElementById('IconMenu1').style.height = "307px";
	}
	
	function myFunction2(){
		document.getElementById('IconMenu1').style.display = 'block';
		document.getElementById('IconMenu3').style.display = 'none';
		document.getElementById('IconMenu4').style.display = 'none';
		document.getElementById('IconMenu5').style.display = 'none';
		document.getElementById('IconMenu6').style.display = 'none';
		document.getElementById('IconMenu7').style.display = 'none';
		document.getElementById('IconMenu8').style.display = 'none';
		document.getElementById('IconMenu9').style.display = 'none';
		document.getElementById('IconMenu1').style.height = "307px";
	}
	
	function myFunction3(){
		document.getElementById('IconMenu3').style.display = 'block';
		document.getElementById('IconMenu1').style.display = 'none';
		document.getElementById('IconMenu4').style.display = 'none';
		document.getElementById('IconMenu5').style.display = 'none';
		document.getElementById('IconMenu7').style.display = 'none';
		document.getElementById('IconMenu8').style.display = 'none';
		document.getElementById('IconMenu9').style.display = 'none';
		document.getElementById('IconMenu3').style.height = "307px";
	}	
	
	function myFunction4(){
		document.getElementById('IconMenu4').style.display = 'block';
		document.getElementById('IconMenu3').style.display = 'none';
		document.getElementById('IconMenu1').style.display = 'none';
		document.getElementById('IconMenu5').style.display = 'none';
		document.getElementById('IconMenu6').style.display = 'none';
		document.getElementById('IconMenu7').style.display = 'none';
		document.getElementById('IconMenu8').style.display = 'none';
		document.getElementById('IconMenu9').style.display = 'none';
		document.getElementById('IconMenu4').style.height = "307px";
	}	
	
	function myFunction5(){
		document.getElementById('IconMenu5').style.display = 'block';
		document.getElementById('IconMenu6').style.display = 'none';
		document.getElementById('IconMenu4').style.display = 'none';
		document.getElementById('IconMenu3').style.display = 'none';
		document.getElementById('IconMenu1').style.display = 'none';
		document.getElementById('IconMenu7').style.display = 'none';
		document.getElementById('IconMenu8').style.display = 'none';
		document.getElementById('IconMenu9').style.display = 'none';
		document.getElementById('IconMenu5').style.height = "307px";
	}
	
	function myFunction9(){
		document.getElementById('IconMenu9').style.display = 'block';
		document.getElementById('IconMenu8').style.display = 'none';
		document.getElementById('IconMenu7').style.display = 'none';
		document.getElementById('IconMenu6').style.display = 'none';
		document.getElementById('IconMenu5').style.display = 'none';
		document.getElementById('IconMenu4').style.display = 'none';
		document.getElementById('IconMenu3').style.display = 'none';
		document.getElementById('IconMenu1').style.display = 'none';
		document.getElementById('IconMenu9').style.height = "307px";
	}


function myFunctionIcon(){
		document.getElementById("myDropdown").classList.toggle("hide");
		
		if(document.getElementById('IconMenu2').value == 0){
		document.getElementById('bigBox').style.display = 'none';
		}
	}


	function toggleNavPanel(x){
			var panel = document.getElementById(x), navarrow = document.getElementById("navarrow"), maxH="340px";
			if(panel.style.height == maxH){
				panel.style.height = "0px";
				navarrow.innerHTML = "&#9662;";
			} else {
				panel.style.height = maxH;
				navarrow.innerHTML = "&#9652;";
			}
			
		}

		function toggleNavPanel(x){
			var panel = document.getElementById(x), navarrow = document.getElementById("navarrow"), maxH="340px";
			if(panel.style.height == maxH){
				panel.style.height = "0px";
				navarrow.innerHTML = "&#9662;";
			} else {
				panel.style.height = maxH;
				navarrow.innerHTML = "&#9652;";
			}
			
		}
		
		
		
			/*
			   $('#marketcar').owlCarousel({
            loop:false,
            margin:10,
            nav:true,
            navText: ["<img src='images/slid.png'>","<img src='images/slid.png'>"],
			   }
        });
			 */


const $VIDEO = document.querySelector('.new_video'),
      $VIDEO_CONTROLS = document.querySelector('.video-controls'),
      $BUTTON_PAUSE_AND_PLAY = document.querySelector('.play-and-pause-video'),
      $PROGRESS_VIDEO = document.querySelector('.progress-video'),
      $CHANGE_VOLUME = document.querySelector('.slide-volume-video'),
      $FULLSCREEN = document.querySelector('.fullscreen-video');

function durationVideo() {
    let durationMidia = $VIDEO.duration,
        $durationTime = document.querySelector('.duration-time');
    $durationTime.innerHTML = transformVideoDuration(durationMidia);
    animationVolume($VIDEO.volume);
};

function progressVideo() {
    var autoProgress = $VIDEO.currentTime,
        $progressBar = document.querySelector('.progress-video'),
        $progressTime = document.querySelector('.progress-time');
    $progressBar.value = autoProgress.toFixed(0);
    $progressBar.setAttribute('max', $VIDEO.duration);

    $progressTime.innerHTML = transformVideoDuration(autoProgress);
    animationProgress();
};

function ChangeProgressVideo() {
    $changeProgress = document.querySelector('.progress-video');
    $VIDEO.currentTime = $changeProgress.value;
};

function animationProgress() {
    let percentageProgress = (($PROGRESS_VIDEO.value - $PROGRESS_VIDEO.min) * 100) / ($PROGRESS_VIDEO.max - $PROGRESS_VIDEO.min);
    $PROGRESS_VIDEO.style.backgroundSize = `${percentageProgress}% 100%`;
    console.log('progress: ' + percentageProgress)
};

function animationVolume(volume) {
    let animationVolume = volume;
    animationVolume = volume * 100;
    if (animationVolume === 100) {
        animationVolume = 100;        
    }
    $CHANGE_VOLUME.style.backgroundSize = `${animationVolume}% 100%`;
};

function transformVideoDuration(timeVideo) {
    let hours, mins, secds, time;
    hours = Math.floor(timeVideo / 3600);
    mins = Math.floor(timeVideo / 60);
    secds = Math.floor(timeVideo - mins * 60)
    return time = formartTimeVideo(hours, mins, secds);
};

function formartTimeVideo(hours, mins, secds) {
    let time;
    if (hours < 1) {
        hours = '';
    };
    if (hours < 10 && hours != '') {
        hours = '0' + hours + ':';
    };
    if (mins < 10) {
        mins = '0' + mins;
    }
    if (secds < 10) {
        secds = '0' + secds;
    }
    return time = `${hours}${mins}:${secds}`;
};

function playAndPause() {
    let $playButton = document.querySelector('.play-and-pause-video');
    if ($VIDEO.paused == true) {
        playVideo();
        $playButton.classList.remove('fa-play');
        $playButton.classList.add('fa-pause');
    } else {
        pauseVideo();
        $playButton.classList.remove('fa-pause');
        $playButton.classList.add('fa-play');
    }
};

function pauseVideo(){
    $VIDEO.pause();
};

function playVideo(){
    $VIDEO.play();
};

function volume() {
    let $changeVolume = document.querySelector('.slide-volume-video').value;
    $VIDEO.volume = $changeVolume;
    let $buttonVolume = document.querySelector('.volume-video');
    if ($VIDEO.volume === 0) {
        $buttonVolume.classList.remove('fa-volume-up');
        $buttonVolume.classList.add('fa-volume-off');
    } else {
        $buttonVolume.classList.remove('fa-volume-off');
        $buttonVolume.classList.add('fa-volume-up');
    };
    animationVolume($changeVolume);
};

function endVideo(){
    let $playButtonEnd = document.querySelector('.play-and-pause-video');
    $VIDEO_CONTROLS.classList.remove('video-controls-visibility--hidden');
    $playButtonEnd.classList.remove('fa-pause');
    $playButtonEnd.classList.add('fa-play');

}

function videoFullScreen() {
    if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {
        if ($VIDEO.requestFullscreen) {
            $VIDEO.requestFullscreen();
        } else if ($VIDEO.msRequestFullscreen) {
            $VIDEO.msRequestFullscreen();
        } else if ($VIDEO.mozRequestFullScreen) {
            $VIDEO.mozRequestFullScreen();
        } else if ($VIDEO.webkitRequestFullscreen) {
            $VIDEO.webkitRequestFullscreen();
        }
        $FULLSCREEN.classList.remove('fa-expand');
        $FULLSCREEN.classList.add('fa-compress'); 
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            }
            $FULLSCREEN.classList.remove('fa-compress');
            $FULLSCREEN.classList.add('fa-expand'); 
        };
};

function controlVisibility(){
    setTimeout(function(){
        $VIDEO_CONTROLS.classList.remove('video-controls-visibility--visible');
        $VIDEO_CONTROLS.classList.add('video-controls-visibility--hidden');
    }, 10000)
    console.log('play')
};


//               EVENTS PLAYER

// EVENTS VIDEO
$VIDEO.addEventListener('loadeddata', durationVideo);

$VIDEO.addEventListener('timeupdate', progressVideo);

$VIDEO.addEventListener('play', controlVisibility);

$VIDEO.addEventListener('click', playAndPause);

$VIDEO.addEventListener('ended', endVideo);

// EVENTS VIDEO CONTROLS

$PROGRESS_VIDEO.addEventListener('change', ChangeProgressVideo)

$BUTTON_PAUSE_AND_PLAY.addEventListener('click', playAndPause);

$CHANGE_VOLUME.addEventListener('change', volume);

$FULLSCREEN.addEventListener('click', videoFullScreen);

	$(document).ready(function () {

			// setTimeout(() => {
			// 	$('.popup_1,.popup_blog,.popup_news,.popup_blog,.popup_bazar,.popup_event,.popup_video,.popup_image,.popup_history,.popup_school,.popup_artist').removeClass('show');
			// }, 1000);
			
			var x = $(window).height();
			var winWidth = $(window).width();
			$('.main_id > .container > .row >div').css({ 'height': x + 'px' })
			var y = $('.pro_div').height();

			$('.main_id > .container > .row >div').css({ 'height': x + 'px' })
			console.log("winWidth " + winWidth);
			var z = x - 41;
			$('.pro_div').addClass('scroll');
			$('.pro_div').css({ 'height': z + 'px' })
			if (y > x) {
				$('.pro_div').addClass('scroll');
				$('.pro_div').css({ 'height': z + 'px' })
			}
			else {}

			if (winWidth <= 768) {
				$('.pro_div').css({ 'height': 'auto' })
			}

			$('.fbphotobox').click(function () {
				$('.popup_1').addClass('show').children('#main').css('display', 'block');;
				$('body').addClass('hide_over');
			});
			$('.fbphotobox_news').click(function () {
				$('.popup_news').addClass('show').children('#main').css('display','block');
				$('body').addClass('hide_over');
			});
			$('.fbphotobox_blog').click(function(){
				$('.popup_blog').addClass('show').children('#main').css('display', 'block');;
				$('body').addClass('hide_over');
			});
			$('.fbphotobox_bazar').click(function(){
				$('.popup_bazar').addClass('show').children('#main').css('display', 'block');;
				$('body').addClass('hide_over');
			});
			$('.fbphotobox_enent').click(function () {
				$('.popup_event').addClass('show').children('#main').css('display', 'block');;
				$('body').addClass('hide_over');
			});
			$('.fbphotobox_video').click(function () {
				$('.popup_video').addClass('show').children('#main').css('display', 'block');;
				$('body').addClass('hide_over');
			});
			$('.fbphotobox_image').click(function () {
				$('.popup_image').addClass('show').children('#main').css('display', 'block');;
				$('body').addClass('hide_over');
			});
			$('.fbphotobox_history').click(function () {
				$('.popup_history').addClass('show').children('#main').css('display', 'block');;
				$('body').addClass('hide_over');
			});
			$('.fbphotobox_school').click(function () {
				$('.popup_school').addClass('show').children('#main').css('display', 'block');;
				$('body').addClass('hide_over');
			});
			$('.fbphotobox_artist').click(function () {
				$('.popup_artist').addClass('show').children('#main').css('display', 'block');;
				$('body').addClass('hide_over');
			});

			$('.close_icon').click(function () {
				$('.cf').removeClass('show')
				$('body').removeClass('hide_over');
			});

			var headerpopup = $('.pro_div').height();
			console.log(headerpopup);
			var discriptionp = $('.pro_div.scroll > p').height();
			var heightjk = x - (headerpopup - 50);
			console.log(heightjk);
			var heightjs = x - 110;

			console.log(heightjk);
			$('.media_boxes').css({ 'max-height': heightjk + 50 + 'px' })
			$('.side_bx').css({ 'max-height': headerpopup + 'px' })


		});
		$(document).ready(function () {
			// $(document).on('click', '#expand_window',function(){
			// 	$('#post_popup_window').parent().width($(window).width()).height($(window).height());
			// });
		});
		
		
					 
	  
	  
	  
}
};
