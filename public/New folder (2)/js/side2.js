$(".showside").click(function(){
    $(".js--overlay").show();
    $(".side").toggle('slide', { direction: 'right' }, 500);
    $('body').css('overflow', 'hidden');  //ADD THIS
    //$(".side").css("width", "280px");

});

$(".hideside").click(function(){
    $(".js--overlay").hide();
    $(".side").toggle('slide', { direction: 'right' }, 500);

});

$(".friendlist .ne > h5 > span,.friendlist .ne > p,.back_chat").click(function(){
    $(".chat_list").toggle('slide',{direction:'right'},500);
    $(".chat_dialog").toggle('slide',{direction:'right'},500);
});


$('#div').click(function() {
    $(".chat_option").toggleClass('chat_option_show');	
});

$('#emoji-option').click(function() {
    $(".emoji_option_tabs").toggleClass('emoji_option_tabs_show');	
});

$(".video_option").click(function() { 
    $(".video_option_tabs").toggleClass('video_option_tabs_show');
});
$(".docimg-downlad").click(function() { 
    $(".documents_option_tabs").toggleClass('documents_option_tabs_show');
});

$('.btn-outline-danger').click(function() {
    $(".emoji_option_tabs").removeClass('emoji_option_tabs_show');
});
$(".btn-outline-danger").click(function() { 
    $(".video_option_tabs").removeClass('video_option_tabs_show');
});

var figure = $(".video").hover( hoverVideo, hideVideo );

function hoverVideo(e) {  
    $('video', this).get(0).play(); 
}

function hideVideo(e) {
    $('video', this).get(0).pause(); 
}


// =====	Audio Player JS ===== //

$('audio').each(function() {

    $(this).on("ended", function() {
        this.play();
    }, false);

    // Audio Duration Timers

    $(this).on("canplay", function() {
        var s = parseInt(this.duration % 60);
        s = ('0' + s).slice(-2);
        var m = parseInt((this.duration / 60) % 60);
        $(this).siblings('.progress-wrap').find(".audio-length").text(m + ':' + s);
        console.log(this.duration);
    });

    $(this).on("timeupdate", function() {
        var s = parseInt(this.currentTime % 60);
        s = ('0' + s).slice(-2);
        var m = parseInt((this.currentTime / 60) % 60);
        $(this).siblings('.progress-wrap').find(".audio-current-time").text(m + ':' + s);
    });

    // Audio Progress Bar

    $(this).on('timeupdate', function() {
        var currentTime = this.currentTime;
        var duration = this.duration;
        $(this).siblings('.progress-wrap').find('.audio-seekbar .audio-slide').animate({
            'width': (currentTime) / duration * 100 + '%'
        }, 250, 'linear');
    });

    // Play/Pause Audio

    $(this).siblings('.button-wrap').find('.audio-play').on("click", function() {
        if (!$(this).parents().siblings('audio')[0].paused) {
            $(this).parents().siblings('audio')[0].pause();
            $(this).removeClass('playing');
        } else {
            $(this).parents().siblings('audio')[0].play();
            $(this).addClass('playing');
            $(this).parents().siblings('.progress-wrap').find('.audio-title').css('opacity', '0');
            $(this).parents().siblings('.progress-wrap').find('.audio-seekbar').css('opacity', '1.0');
        }
    });

});


