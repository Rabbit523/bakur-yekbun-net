export default {
  mounted() {
$(".mobileMnu").click(function() {
    $('#menubar nav').toggleClass('open');
})

$('#dropdownMenu1').click(function () {
    $('.dropdown-menu').toggleClass('show');
})

// Star Rating

var $star_rating = $('.star-rating .fa');

var SetRatingStar = function() {
    return $star_rating.each(function() {
        if (parseInt($star_rating.siblings('input.rating-value').val()) >= parseInt($(this).data('rating'))) {
            return $(this).removeClass('fa-star-o').addClass('fa-star');
        } else {
            return $(this).removeClass('fa-star').addClass('fa-star-o');
        }
    });
};

$star_rating.on('click', function() {
    $star_rating.siblings('input.rating-value').val($(this).data('rating'));
    return SetRatingStar();
});

SetRatingStar();
$(document).ready(function() {

});



$('#buyTicket').click(function(e) {
    e.preventDefault();

    $('#myModal').modal('hide');
    $('#stepOne').modal('show');
})

$('#createPlaylistButton').click(function(e) {
    e.preventDefault();

    $('#artists').modal('hide');
    $('#createPlaylist').modal('show');
})

$('#next1').click(function(e){
    $('.one').removeClass('active');
    $('.two').addClass('active');
});

$('#next2').click(function(e){
    $('.two').removeClass('active');
    $('.three').addClass('active');
});

$('#next3').click(function(e){
    $('.three').removeClass('active');
    $('.four').addClass('active');
});

$('.selectedStatus').click(function(){
    if ($('.userStatus').hasClass('hidden')) {
        $('.userStatus').addClass('show');
        $('.userStatus').removeClass('hidden');
    }
    else if($('.userStatus').hasClass('show')){
        $('.userStatus').addClass('hidden');
        $('.userStatus').removeClass('show');
    }
    else {
        $('.userStatus').addClass('show');
    }
});
$('#addClass-browser').click(function(){
    $('.video-record').addClass('hidden');
    $('.video-record-browser-error').removeClass('hidden');
    $('.video-record').removeClass('reset-show');
});
$('#tryagain').click(function(){
    $('.video-record-browser-error').addClass('hidden');
    $('.video-record-speaknow').removeClass('hidden');
});
$('#reset').click(function(){
    $('.video-record').addClass('show');
    $('.video-record').addClass('reset-show');
    $('.video-record-speaknow').removeClass('reset-showhidden');
    $('.video-record-browser-error').addClass('hidden');
    $('.video-record-speaknow').addClass('hidden');
});


$('.userStatus >li:first-of-type').click(function(){
    $('.selectedStatus >div').removeClass('active');
    $('.selectedStatus .onlineStatus').addClass('active');
    $('.userStatus').addClass('hidden');
});
$('.userStatus >li:nth-of-type(2)').click(function(){
    $('.selectedStatus >div').removeClass('active');
    $('.selectedStatus .offlineStatus').addClass('active');
    $('.userStatus').addClass('hidden');
});
$('.userStatus >li:nth-of-type(3)').click(function(){
    $('.selectedStatus >div').removeClass('active');
    $('.selectedStatus .busyStatus').addClass('active');
    $('.userStatus').addClass('hidden');
});
$('.userStatus >li:nth-of-type(4)').click(function(){
    $('.selectedStatus >div').removeClass('active');
    $('.selectedStatus .awayStatus').addClass('active');
    $('.userStatus').addClass('hidden');
});

// $('#next').click(function () {
//
//     $('#myModal').removeClass('in');
//     $('#myModal').addClass('in');
// });

//set button id on click to hide first modal
//            $('#next').on( 'click', function() {
//                $('#myModal').modal('hide');
//            });
//            //trigger next modal
//            $('#next1').on( 'click', function() {
//                $('#stepOne').modal('hide');
//            });
//            //trigger next modal
//            $('#next2').on( 'click', function() {
//                $('#stepTwo').modal('hide');
//            });
//            //trigger next modal
//            $('#next3').on( 'click', function() {
//                $('#stepThree').modal('hide');
//            });
}
};
