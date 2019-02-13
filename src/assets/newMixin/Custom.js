export default {
  mounted() {
$(function(){

  //emoji activation
  // $("#smileEmo").emojiPicker("toggle");
  // $("#smileEmo").click(function(e) {
  //   e.preventDefault();
  //   $(".emojiActivate").emojiPicker("toggle");
  // });
//  $(".emojiActivate").emojiPicker({ height: "300px", width: "450px" });


              //video popup

              $(document).on(
                "click",
                ".signle-thumb-click-event", 
                function() {
                  var imgSrc = $(this)
                    .children("img")
                    .attr("src");
                  //alert(imgSrc);
                  $("#video_thumb")
                    .children("img")
                    .attr("src", imgSrc);
                }
              );

              // Show  chat
              $("#post-chat").click(function() {
                $("#post_like, #post_share,.modal-info_post").hide();
                $("#post_modal_chat, #post_back, #post_back1").fadeIn();
                $(this).addClass("model-active-tab");
                 $("#open-emo").show();
                $("#post_popup_video_upload").css("display", "none");
                $("#video_upload_show_open").attr("id", "video_upload_show");
                $("#post_popup_audio_upload").css("display", "none");
                $("#audio_upload_show_open").attr("id", "audio_upload_show");
                $("#emoji_choose_show,#video_upload_show,#audio_upload_show").css("display", "block");
              });
              $(document).on(
                "focus",
                "#post_comment_input",
                function() {
                  $("#post_like, #post_share,.modal-info_post").hide();
                  $("#post_modal_chat, #post_back, #post_back1").fadeIn();
                  $(this).addClass("model-active-tab");
                   $("#open-emo").show();
                  $('#emoji_choose_show,#video_upload_show,#audio_upload_show').css('display','block');
                   $("#post_popup_video_upload").css("display", "none");
                   $("#video_upload_show_open").attr("id", "video_upload_show");
                   $("#post_popup_audio_upload").css("display", "none");
                   $("#audio_upload_show_open").attr("id", "audio_upload_show");
                  $("#post_popup_emoji_chose").css("display", "none");
                  $("#emoji_choose_show_open").attr("id", "emoji_choose_show");
                  
                }
              );

              $("#post_back").click(function() {
                $("#post_like, #post_share,.modal-info_post").show();
                $("#post_back, #post_back1,#post_modal_chat").hide();
                $("#post-chat").removeClass("model-active-tab");
                $(".social_div").css("display", "none");
                 $("#open-emo").hide();
                 $("#post_popup_video_upload").css("display", "none");
                 $("#video_upload_show_open").attr("id", "video_upload_show");
                 $("#post_popup_audio_upload").css("display", "none");
                 $("#audio_upload_show_open").attr("id", "audio_upload_show");
                $("#post_popup_emoji_chose").css("display", "none");
                $("#emoji_choose_show_open").attr("id", "emoji_choose_show");
                $('#emoji_choose_show,#video_upload_show,#audio_upload_show').css('display','none');
              });


              //news modal
              $("#post-chat_news").click(function() {
                $("#post_like_news, #post_share_news,.modal-info_news").hide();
                $("#post_back_news, #post_back1_news,#post_modal_chat_news").fadeIn();
                $("#emoji_choose_show_news,#video_upload_show_news,#audio_upload_show_news").css("display", "block");
                $(this).addClass("model-active-tab");
              });

              $(document).on("focus","#news_modal_input", function() {
                  $(".modal-info_news").hide();
                  $("#post_like_news, #post_share_news").hide();
                  $("#emoji_choose_show_news,#video_upload_show_news,#audio_upload_show_news").css("display", "block");
                  $("#post_modal_chat_news, #post_back_news, #post_back1_news").fadeIn();
                  $(this).addClass("model-active-tab");
                }
              );

              $("#post_back_news").click(function() {
                $(".modal-info_news").fadeIn();
                $("#post_like_news, #post_share_news").show();
                $("#post_modal_chat_news, #post_back1_news,#post_back_news").hide();
                $("#post-chat_news").removeClass("model-active-tab");
                $('#emoji_choose_show_news,#video_upload_show_news,#audio_upload_show_news').css('display','none')
              });

              // $("#post-chat_blog").click(function() {
              //   $(".modal-info_blog").hide();
              //   $("#post_like_blog, #post_share_blog").hide();
              //   $(".media_boxes, #post_back_blog, #post_back1_blog").fadeIn();
              //   $(this).addClass("model-active-tab");
              // });

              $("#post_back_blog").click(function() {
                $(".modal-info_blog").fadeIn();
                $("#post_like_blog, #post_share_blog").show();
                $(".modal-info_blog").fadeOut();
                $("#post_back_blog, #post_back1_blog").hide();
                $("#post-chat_blog").removeClass("model-active-tab");
                $('#emoji_choose_show_blog,#video_upload_show_blog,#audio_upload_show_blog').css('display', 'none');
              });
              $(document).on(
                "focus",
                "#blog_modal_input",
                function() {
                  $(".modal-info_blog").hide();
                  $("#post_like_blog, #post_share_blog").hide();
                  $(".modal-info_blog, #post_back_blog, #post_back1_blog").fadeIn();
                  $(this).addClass("model-active-tab");
                }
              );

              $("#post-chat_video").click(function() {
                $(".modal-info_video").hide();
                $("#post_like_video, #post_share_video").hide();
                $("#video_modal_chat, #post_back_video, #post_back1_video,#post_modal_chat_video").fadeIn();
                $(this).addClass("model-active-tab");
                 $("#emoji_choose_show_video,#video_upload_show_video,#audio_upload_show_video").css("display", "block");
              });
              $(document).on("focus","#video-modal-input", function() {
                  $(".modal-info_video").hide();
                  $("#post_like_video, #post_share_video,#video_modal_chat").hide();
                  $(".modal-info_video, #post_back_video, #post_back1_video").fadeIn();
                  $(this).addClass("model-active-tab");
                }
              );

              $("#post_back_video").click(function() {
                $(".modal-info_video").fadeIn();
                $("#post_like_video, #post_share_video").show();
                $("#post_back_video, #post_back1_video,#video_modal_chat,#post_modal_chat_video").hide();
                $("#post-chat_video").removeClass("model-active-tab");
                $('#emoji_choose_show_video,#video_upload_show_video,#audio_upload_show_video').css('display', 'none');
              });

              // $("#post-chat_image").click(function() {
              //   $(".modal-info_image").hide();
              //   $("#post_like_image, #post_share_image").hide();
              //   $(".media_boxes, #post_back_image, #post_back1_image").fadeIn();
              //   $(this).addClass("model-active-tab");
              // });
              // $(document).on(
              //   "focus",
              //   "#image-modal-input",
              //   function() {
              //     $(".modal-info_image").hide();
              //     $("#post_like_image, #post_share_image").hide();
              //     $(
              //       ".media_boxes, #post_back_image, #post_back1_image"
              //     ).fadeIn();
              //     $(this).addClass("model-active-tab");
              //   }
              // );

              // $("#post_back_image").click(function() {
              //   $(".modal-info_image").fadeIn();
              //   $("#post_like_image, #post_share_image").show();
              //   $(".media_boxes").fadeOut();
              //   $("#post_back_image, #post_back1_image").hide();
              //   $("#post-chat_image").removeClass("model-active-tab");
              //   $('#emoji_choose_show_image,#video_upload_show_image,#audio_upload_show_image').css('display', 'none');
                
              // });
              //history popup
              $("#post-chat_history").click(function() {
                $(".modal-info_history").hide();
                $("#post_like_history, #post_share_history").hide();
                $("#post_back_history, #post_back1_history,#post_modal_chat_history").fadeIn();
                $(this).addClass("model-active-tab");
                 $("#emoji_choose_show_history,#video_upload_show_history,#audio_upload_show_history").css("display", "block");
              });
              $(document).on(
                "focus",
                "#history-modal-input",
                function() {
                  $(".modal-info_history").hide();
                  $(
                    "#post_like_history, #post_share_history"
                  ).hide();
                  $(".modal-info_history, #post_back_history, #post_back1_history,#post_modal_chat_history").fadeIn();
                  $(this).addClass("model-active-tab");
                  $("#open-emo").css("display",'block');
                }
              );

              $("#post_back_history").click(function() {
                $(".modal-info_history").fadeIn();
                $("#post_like_history, #post_share_history").show();
                $("#post_back_history, #post_back1_history,#post_modal_chat_history").hide();
                $("#post-chat_history").removeClass("model-active-tab");
                $('#emoji_choose_show_history,#video_upload_show_history,#audio_upload_show_history').css('display','none');
              });
              //School popup
              $("#post-chat_school").click(function() {
                $(".modal-info_school").hide();
                $("#post_like_school, #post_share_school").hide();
                $("#post_back_school, #post_back1_school,#post_modal_chat_school").fadeIn();
                $(this).addClass("model-active-tab");
                 $("#emoji_choose_show_school,#video_upload_show_school,#audio_upload_show_school").css("display", "block");
              });
              $(document).on(
                "focus",
                "#school-modal-input",
                function() {
                  $(".modal-info_school").hide();
                  $("#post_like_school, #post_share_school").hide();
                  $(".modal-info_school, #post_back_school, #post_back1_school").fadeIn();
                  $(this).addClass("model-active-tab");
                }
              );

              $("#post_back_school").click(function() {
                $(".modal-info_school").fadeIn();
                $("#post_like_school, #post_share_school").show();
                $("#post_back_school, #post_back1_school,#post_modal_chat_school").hide();
                $("#post-chat_school").removeClass("model-active-tab");
                $('#emoji_choose_show_school,#video_upload_show_school,#audio_upload_show_school').css('display', 'none');
              });
              //artist popup
              $("#post-chat_artist").click(function() {
                $(".modal-info_artist").hide();
                $("#post_like_artist, #post_share_artist").hide();
                $(".modal-info_artist, #post_back_artist, #post_back1_artist").fadeIn();
                $(this).addClass("model-active-tab");
              });
              $(document).on(
                "focus",
                "#artist-modal-input",
                function() {
                  $(".modal-info_artist").hide();
                  $("#post_like_artist, #post_share_artist").hide();
                  $(".modal-info_artist, #post_back_artist, #post_back1_artist").fadeIn();
                  $('#open-emo').css('display','block !important')
                  $(this).addClass("model-active-tab");
                }
              );

              $("#post_back_artist").click(function() {
                $(".modal-info_artist").fadeIn();
                $("#post_like_artist, #post_share_artist").show();
                $(".modal-info_artist").fadeOut();
                $("#post_back_artist, #post_back1_artist").hide();
                $("#post-chat_artist").removeClass("model-active-tab");
                $('#emoji_choose_show_artist,#video_upload_show_artist,#audio_upload_show_artist').css('display','none');
              });

              //open imo
              $(document).on("click", "#open-emo", function() {
                $(".social_div").css("display", "block");
                $(this).attr("id", "open-emo_on");
                $("#video_upload_show_open").css("display", "none");
              });
              $(document).on("click", "#open-emo_on", function() {
                $(".social_div").css("display", "none");
                $(this).attr("id", "open-emo");
                $("#video_upload_show_open").css("display", "none");
              });

              //comment input
              $(document).on(
                "click",
                "#first_modal_emo",
                function() {
                  $("#first_comment_input").css("display", "block");
                  $(this).attr("id", "first_modal_emo_on");
                }
              );
              $(document).on(
                "click",
                "#first_modal_emo_on",
                function() {
                  $("#first_comment_input").css("display", "none");
                  $(this).attr("id", "first_modal_emo");
                }
              );
              //second modal
              $(document).on(
                "click",
                "#second_modal_emo",
                function() {
                  $("#first_comment_input_2").css(
                    "display",
                    "block"
                  );
                  $(this).attr("id", "second_modal_emo_on");
                }
              );
              $(document).on(
                "click",
                "#second_modal_emo_on",
                function() {
                  $("#first_comment_input_2").css(
                    "display",
                    "none"
                  );
                  $(this).attr("id", "second_modal_emo");
                }
              );

              //news comment one
              $(document).on(
                "click",
                "#first_modal_emo_news",
                function() {
                  $("#first_comment_input_news").css(
                    "display",
                    "block"
                  );
                  $(this).attr("id", "first_modal_emo_on_news");
                }
              );
              $(document).on(
                "click",
                "#first_modal_emo_on_news",
                function() {
                  $("#first_comment_input_news").css(
                    "display",
                    "none"
                  );
                  $(this).attr("id", "first_modal_emo_news");
                }
              );
              //news comment two
              $(document).on(
                "click",
                "#second_modal_emo_news",
                function() {
                  $("#first_comment_input_2_news").css(
                    "display",
                    "block"
                  );
                  $(this).attr("id", "second_modal_emo_on_news");
                }
              );
              $(document).on(
                "click",
                "#second_modal_emo_on_news",
                function() {
                  $("#first_comment_input_2_news").css(
                    "display",
                    "none"
                  );
                  $(this).attr("id", "second_modal_emo_news");
                }
              );

              //news comment one
              $(document).on(
                "click",
                "#first_modal_emo_news",
                function() {
                  $("#first_comment_input_news").css(
                    "display",
                    "block"
                  );
                  $(this).attr("id", "first_modal_emo_on_news");
                }
              );
              $(document).on(
                "click",
                "#first_modal_emo_on_news",
                function() {
                  $("#first_comment_input_news").css(
                    "display",
                    "none"
                  );
                  $(this).attr("id", "first_modal_emo_news");
                }
              );
              //blog comment area
              $(document).on(
                "click",
                "#first_modal_emo_blog",
                function() {
                  $("#first_comment_input_blog").css(
                    "display",
                    "block"
                  );
                  $(this).attr("id", "first_modal_emo_on_blog");
                }
              );
              $(document).on(
                "click",
                "#first_modal_emo_on_blog",
                function() {
                  $("#first_comment_input_blog").css(
                    "display",
                    "none"
                  );
                  $(this).attr("id", "first_modal_emo_blog");
                }
			  );	  

      //show post modal video upload  
      
$(document).on("click", "#video_upload_show", function() {
  $("#post_popup_video_upload").css("display", "block");
  $(this).attr("id", "video_upload_show_open");
  $("#post_popup_audio_upload").css("display", "none");
  $("#audio_upload_show_open").attr("id", "audio_upload_show");
  $("#post_popup_emoji_chose").css("display", "none");
  $("#emoji_choose_show_open").attr("id", "emoji_choose_show");
});
$(document).on("click", "#video_upload_show_open", function() {
  $("#post_popup_video_upload").css("display", "none");
  $(this).attr("id", "video_upload_show");
});


// show post modal audio popup

$(document).on("click", "#audio_upload_show", function() {
  $("#post_popup_audio_upload").css("display", "block");
  $(this).attr("id", "audio_upload_show_open");
  $("#post_popup_video_upload").css("display", "none");
  $("#video_upload_show_open").attr("id", "video_upload_show");
  $("#post_popup_emoji_chose").css("display", "none");
  $("#emoji_choose_show_open").attr("id", "emoji_choose_show");
});
$(document).on("click", "#audio_upload_show_open", function() {
  $("#post_popup_audio_upload").css("display", "none");
  $(this).attr("id", "audio_upload_show");
});
// show post modal emoji popup

  $(document).on("click", "#emoji_choose_show", function() {
  $("#post_popup_emoji_chose").css("display", "block");
    $(this).attr("id", "emoji_choose_show_open");
    $("#post_popup_audio_upload").css("display", "none");
  $("#post_popup_video_upload").css("display", "none");
  $("#video_upload_show_open").attr("id", "video_upload_show");
});
  $(document).on("click", "#emoji_choose_show_open", function() {
  $("#post_popup_emoji_chose").css("display", "none");
    $(this).attr("id", "emoji_choose_show");
});


//comment reaply system

  $(document).on('click','.comment_replay_icon',function(){
    var value = $(this).parent().siblings('.comment_author_name').text();
    $('#post_comment_input,#post_comment_input_news,#post_comment_input_blog,#post_comment_input_school,#post_comment_input_artist,#post_comment_input_video,#post_comment_input_image,#post_comment_input_history').val('@'+value);
    // console.log(value);
  });


// news modal popup comment input focus event
  $(document).on('focus','#post_comment_input_news',function(){
    $("#post_like_news, #post_share_news,.modal-info_news").hide();
    $("#post_back_news, #post_back1_news,#post_modal_chat_news").fadeIn();
    $(this).addClass("model-active-tab");
    $("#post_popup_audio_upload_news").css("display", "none");
    $("#audio_upload_show_open_news").attr("id", "audio_upload_show_news");
    $("#post_popup_emoji_chose_news").css("display", "none");
    $("#emoji_choose_show_open_news").attr("id", "emoji_choose_show_news");
    $("#post_popup_video_upload_news").css("display", "none");
    $("#video_upload_show_open_news").attr("id", "video_upload_show_news");
    $('#emoji_choose_show_news,#video_upload_show_news,#audio_upload_show_news').css('display','block');
  });


  //show video upload for news modal

  $(document).on("click", "#video_upload_show_news", function () {
    // alert('event fired working')
    $("#post_popup_video_upload_news").css("display", "block");
    $(this).attr("id", "video_upload_show_open_news");
    $("#post_popup_audio_upload_news").css("display", "none");
    $("#audio_upload_show_open_news").attr("id", "audio_upload_show_news");
    $("#post_popup_emoji_chose_news").css("display", "none");
    $("#emoji_choose_show_open_news").attr("id", "emoji_choose_show_news");
  });

  $(document).on("click", "#video_upload_show_open_news", function () {
    $("#post_popup_video_upload_news").css("display", "none");
    $(this).attr("id", "video_upload_show_news");
  });
  // show post modal audio popup for news modal

  $(document).on("click", "#audio_upload_show_news", function () {
    $("#post_popup_audio_upload_news").css("display", "block");
    $(this).attr("id", "audio_upload_show_open_news");
    $("#post_popup_video_upload_news").css("display", "none");
    $("#video_upload_show_open_news").attr("id", "video_upload_show_news");
    $("#post_popup_emoji_chose_news").css("display", "none");
    $("#emoji_choose_show_open_news").attr("id", "emoji_choose_show_news");
  });
  $(document).on("click", "#audio_upload_show_open_news", function () {
    $("#post_popup_audio_upload_news").css("display", "none");
    $(this).attr("id", "audio_upload_show_news");
  });
//show emoji in news modal 

  $(document).on("click", "#emoji_choose_show_news", function () {
    $("#post_popup_emoji_chose_news").css("display", "block");
    $(this).attr("id", "emoji_choose_show_open_news");
    $("#post_popup_audio_upload_news").css("display", "none"); 
    $("#post_popup_video_upload_news").css("display", "none");
    $("#video_upload_show_open_news").attr("id", "video_upload_show_news");
  });
  $(document).on("click", "#emoji_choose_show_open_news", function () {
    $("#post_popup_emoji_chose_news").css("display", "none");
    $(this).attr("id", "emoji_choose_show_news");
  });



  // blog modal popup comment input focus event
  // $(document).on('focus', '#post_comment_input_blog', function () {
  //   $(".modal-info,.modal-info_blog").hide();
  //   $("#post_like_news, #post_share_blog,#post_like_blog").hide();
  //   $(".media_boxes, #post_back_blog, #post_back1_blog").fadeIn();
  //   $(this).addClass("model-active-tab");
  //   $("#post_popup_audio_upload_blog").css("display", "none");
  //   $("#audio_upload_show_open_blog").attr("id", "audio_upload_show_blog");
  //   $("#post_popup_emoji_chose_blog").css("display", "none");
  //   $("#emoji_choose_show_open_blog").attr("id", "emoji_choose_show_blog");
  //   $("#post_popup_video_upload_blog").css("display", "none");
  //   $("#video_upload_show_open_blog").attr("id", "video_upload_show_blog");
  //   $('#emoji_choose_show_blog,#video_upload_show_blog,#audio_upload_show_blog').css('display', 'block');
  // });


  //show video upload for blog modal

  $(document).on("click", "#video_upload_show_blog", function () {
    // alert('event fired working')
    $("#post_popup_video_upload_blog").css("display", "block");
    $(this).attr("id", "video_upload_show_open_blog");
    $("#post_popup_audio_upload_blog").css("display", "none");
    $("#audio_upload_show_open_blog").attr("id", "audio_upload_show_blog");
    $("#post_popup_emoji_chose_blog").css("display", "none");
    $("#emoji_choose_show_open_blog").attr("id", "emoji_choose_show_blog");
  });

  $(document).on("click", "#video_upload_show_open_blog", function () {
    $("#post_popup_video_upload_blog").css("display", "none");
    $(this).attr("id", "video_upload_show_blog");
  });
  // show post modal audio popup for news modal

  $(document).on("click", "#audio_upload_show_blog", function () {
    $("#post_popup_audio_upload_blog").css("display", "block");
    $(this).attr("id", "audio_upload_show_open_blog");
    $("#post_popup_video_upload_blog").css("display", "none");
    $("#video_upload_show_open_blog").attr("id", "video_upload_show_blog");
    $("#post_popup_emoji_chose_blog").css("display", "none");
    $("#emoji_choose_show_open_blog").attr("id", "emoji_choose_show_blog");
  });
  $(document).on("click", "#audio_upload_show_open_blog", function () {
    $("#post_popup_audio_upload_blog").css("display", "none");
    $(this).attr("id", "audio_upload_show_blog");
  });
  //show emoji in news modal 

  $(document).on("click", "#emoji_choose_show_blog", function () {
    $("#post_popup_emoji_chose_blog").css("display", "block");
    $(this).attr("id", "emoji_choose_show_open_blog");
    $("#post_popup_audio_upload_blog").css("display", "none");
    $("#post_popup_video_upload_blog").css("display", "none");
    $("#video_upload_show_open_blog").attr("id", "video_upload_show_blog");
  });
  $(document).on("click", "#emoji_choose_show_open_blog", function () {
    $("#post_popup_emoji_chose_blog").css("display", "none");
    $(this).attr("id", "emoji_choose_show_blog");
  });




  // video modal popup comment input focus event
  $(document).on('focus', '#post_comment_input_video', function () {
    $(".modal-info,.modal-info_video").hide();
    $("#post_like_video, #post_share_video").hide();
    $(".media_boxes, #post_back_video, #post_back1_video").fadeIn();
    $(this).addClass("model-active-tab");
    $("#post_popup_audio_upload_video").css("display", "none");
    $("#audio_upload_show_open_video").attr("id", "audio_upload_show_video");
    $("#post_popup_emoji_chose_video").css("display", "none");
    $("#emoji_choose_show_open_video").attr("id", "emoji_choose_show_video");
    $("#post_popup_video_upload_video").css("display", "none");
    $("#video_upload_show_open_video").attr("id", "video_upload_show_video");
    $('#emoji_choose_show_video,#video_upload_show_video,#audio_upload_show_video').css('display', 'block');
  });


  //show video upload for video modal

  $(document).on("click", "#video_upload_show_video", function () {
    // alert('event fired working')
    $("#post_popup_video_upload_video").css("display", "block");
    $(this).attr("id", "video_upload_show_open_video");
    $("#post_popup_audio_upload_video").css("display", "none");
    $("#audio_upload_show_open_video").attr("id", "audio_upload_show_video");
    $("#post_popup_emoji_chose_video").css("display", "none");
    $("#emoji_choose_show_open_video").attr("id", "emoji_choose_show_video");
  });

  $(document).on("click", "#video_upload_show_open_video", function () {
    $("#post_popup_video_upload_video").css("display", "none");
    $(this).attr("id", "video_upload_show_video");
  });
  // show post modal audio popup for news modal

  $(document).on("click", "#audio_upload_show_video", function () {
    $("#post_popup_audio_upload_video").css("display", "block");
    $(this).attr("id", "audio_upload_show_open_video");
    $("#post_popup_video_upload_video").css("display", "none");
    $("#video_upload_show_open_video").attr("id", "video_upload_show_video");
    $("#post_popup_emoji_chose_video").css("display", "none");
    $("#emoji_choose_show_open_video").attr("id", "emoji_choose_show_video");
  });
  $(document).on("click", "#audio_upload_show_open_video", function () {
    $("#post_popup_audio_upload_video").css("display", "none");
    $(this).attr("id", "audio_upload_show_video");
  });
  //show emoji in news modal 

  $(document).on("click", "#emoji_choose_show_video", function () {
    $("#post_popup_emoji_chose_video").css("display", "block");
    $(this).attr("id", "emoji_choose_show_open_video");
    $("#post_popup_audio_upload_video").css("display", "none");
    $("#post_popup_video_upload_video").css("display", "none");
    $("#video_upload_show_open_video").attr("id", "video_upload_show_video");
  });
  $(document).on("click", "#emoji_choose_show_open_video", function () {
    $("#post_popup_emoji_chose_video").css("display", "none");
    $(this).attr("id", "emoji_choose_show_video");
  });


  // video modal popup comment input focus event
  $(document).on('focus', '#post_comment_input_image', function () {
    $(".modal-info_image").hide();
    $("#post_like_video, #post_share_image,#post_like_image,.modal-info_image").hide();
    $(".modal-info_image, #post_back_image, #post_back1_image").fadeIn();
    $(this).addClass("model-active-tab");
    $("#post_popup_audio_upload_image").css("display", "none");
    $("#audio_upload_show_open_image").attr("id", "audio_upload_show_image");
    $("#post_popup_emoji_chose_image").css("display", "none");
    $("#emoji_choose_show_open_image").attr("id", "emoji_choose_show_image");
    $("#post_popup_video_upload_image").css("display", "none");
    $("#video_upload_show_open_image").attr("id", "video_upload_show_image");
    $('#emoji_choose_show_image,#video_upload_show_image,#audio_upload_show_image').css('display', 'block');
  });


  //show video upload for video modal

  $(document).on("click", "#video_upload_show_image", function () {
    // alert('event fired working')
    $("#post_popup_video_upload_image").css("display", "block");
    $(this).attr("id", "video_upload_show_open_image");
    $("#post_popup_audio_upload_image").css("display", "none");
    $("#audio_upload_show_open_image").attr("id", "audio_upload_show_image");
    $("#post_popup_emoji_chose_image").css("display", "none");
    $("#emoji_choose_show_open_image").attr("id", "emoji_choose_show_image");
  });

  $(document).on("click", "#video_upload_show_open_image", function () {
    $("#post_popup_video_upload_image").css("display", "none");
    $(this).attr("id", "video_upload_show_image");
  });
  // show post modal audio popup for news modal

  $(document).on("click", "#audio_upload_show_image", function () {
    $("#post_popup_audio_upload_image").css("display", "block");
    $(this).attr("id", "audio_upload_show_open_image");
    $("#post_popup_video_upload_image").css("display", "none");
    $("#video_upload_show_open_image").attr("id", "video_upload_show_image");
    $("#post_popup_emoji_chose_image").css("display", "none");
    $("#emoji_choose_show_open_image").attr("id", "emoji_choose_show_image");
  });
  $(document).on("click", "#audio_upload_show_open_image", function () {
    $("#post_popup_audio_upload_image").css("display", "none");
    $(this).attr("id", "audio_upload_show_image");
  });
  //show emoji in news modal 

  $(document).on("click", "#emoji_choose_show_image", function () {
    $("#post_popup_emoji_chose_image").css("display", "block");
    $(this).attr("id", "emoji_choose_show_open_image");
    $("#post_popup_audio_upload_image").css("display", "none");
    $("#post_popup_video_upload_image").css("display", "none");
    $("#video_upload_show_open_image").attr("id", "video_upload_show_image");
  });
  $(document).on("click", "#emoji_choose_show_open_image", function () {
    $("#post_popup_emoji_chose_image").css("display", "none");
    $(this).attr("id", "emoji_choose_show_image");
  });


 // hisotory modal popup comment input focus event
  $(document).on('focus', '#post_comment_input_history', function () {
    $(".modal-info_post_history").hide();
    $("#post_like_video, #post_share_history,#post_like_history,.modal-info_history").hide();
    $(".modal-info_post_history, #post_back_history, #post_back1_history").fadeIn();
    $(this).addClass("model-active-tab");
    $("#post_popup_audio_upload_history").css("display", "none");
    $("#audio_upload_show_open_history").attr("id", "audio_upload_show_history");
    $("#post_popup_emoji_chose_history").css("display", "none");
    $("#emoji_choose_show_open_history").attr("id", "emoji_choose_show_history");
    $("#post_popup_video_upload_history").css("display", "none");
    $("#video_upload_show_open_history").attr("id", "video_upload_show_history");
    $('#emoji_choose_show_history,#video_upload_show_history,#audio_upload_show_history').css('display', 'block');
  });


  //show video upload for video modal

  $(document).on("click", "#video_upload_show_history", function () {
    // alert('event fired working')
    $("#post_popup_video_upload_history").css("display", "block");
    $(this).attr("id", "video_upload_show_open_history");
    $("#post_popup_audio_upload_history").css("display", "none");
    $("#audio_upload_show_open_history").attr("id", "audio_upload_show_history");
    $("#post_popup_emoji_chose_history").css("display", "none");
    $("#emoji_choose_show_open_history").attr("id", "emoji_choose_show_history");
  });

  $(document).on("click", "#video_upload_show_open_history", function () {
    $("#post_popup_video_upload_history").css("display", "none");
    $(this).attr("id", "video_upload_show_history");
  });
  // show post modal audio popup for news modal

  $(document).on("click", "#audio_upload_show_history", function () {
    $("#post_popup_audio_upload_history").css("display", "block");
    $(this).attr("id", "audio_upload_show_open_history");
    $("#post_popup_video_upload_history").css("display", "none");
    $("#video_upload_show_open_history").attr("id", "video_upload_show_history");
    $("#post_popup_emoji_chose_history").css("display", "none");
    $("#emoji_choose_show_open_history").attr("id", "emoji_choose_show_history");
  });
  $(document).on("click", "#audio_upload_show_open_history", function () {
    $("#post_popup_audio_upload_history").css("display", "none");
    $(this).attr("id", "audio_upload_show_history");
  });
  //show emoji in news modal 

  $(document).on("click", "#emoji_choose_show_history", function () {
    $("#post_popup_emoji_chose_history").css("display", "block");
    $(this).attr("id", "emoji_choose_show_open_history");
    $("#post_popup_audio_upload_history").css("display", "none");
    $("#post_popup_video_upload_history").css("display", "none");
    $("#video_upload_show_open_history").attr("id", "video_upload_show_history");
  });
  $(document).on("click", "#emoji_choose_show_open_history", function () {
    $("#post_popup_emoji_chose_history").css("display", "none");
    $(this).attr("id", "emoji_choose_show_history");
  });



  // school modal popup comment input focus event
  $(document).on('focus', '#post_comment_input_school', function () {
    $(".modal-info_school").hide();
    $("#post_like_school, #post_share_school,#post_like_school").hide();
    $("#post_back_school, #post_back1_school,#post_modal_chat_school").fadeIn();
    $(this).addClass("model-active-tab");
    $("#post_popup_audio_upload_school").css("display", "none");
    $("#audio_upload_show_open_school").attr("id", "audio_upload_show_school");
    $("#post_popup_emoji_chose_school").css("display", "none");
    $("#emoji_choose_show_open_school").attr("id", "emoji_choose_show_school");
    $("#post_popup_video_upload_school").css("display", "none");
    $("#video_upload_show_open_school").attr("id", "video_upload_show_school");
    $('#emoji_choose_show_school,#video_upload_show_school,#audio_upload_show_school').css('display', 'block');
  });


  //show video upload for video modal

  $(document).on("click", "#video_upload_show_school", function () {
    // alert('event fired working')
    $("#post_popup_video_upload_school").css("display", "block");
    $(this).attr("id", "video_upload_show_open_school");
    $("#post_popup_audio_upload_school").css("display", "none");
    $("#audio_upload_show_open_school").attr("id", "audio_upload_show_school");
    $("#post_popup_emoji_chose_school").css("display", "none");
    $("#emoji_choose_show_open_school").attr("id", "emoji_choose_show_school");
  });

  $(document).on("click", "#video_upload_show_open_school", function () {
    $("#post_popup_video_upload_school").css("display", "none");
    $(this).attr("id", "video_upload_show_school");
  });
  // show post modal audio popup for news modal

  $(document).on("click", "#audio_upload_show_school", function () {
    $("#post_popup_audio_upload_school").css("display", "block");
    $(this).attr("id", "audio_upload_show_open_school");
    $("#post_popup_video_upload_school").css("display", "none");
    $("#video_upload_show_open_school").attr("id", "video_upload_show_school");
    $("#post_popup_emoji_chose_school").css("display", "none");
    $("#emoji_choose_show_open_school").attr("id", "emoji_choose_show_school");
  });
  $(document).on("click", "#audio_upload_show_open_school", function () {
    $("#post_popup_audio_upload_school").css("display", "none");
    $(this).attr("id", "audio_upload_show_school");
  });
  //show emoji in news modal 

  $(document).on("click", "#emoji_choose_show_school", function () {
    $("#post_popup_emoji_chose_school").css("display", "block");
    $(this).attr("id", "emoji_choose_show_open_school");
    $("#post_popup_audio_upload_school").css("display", "none");
    $("#post_popup_video_upload_school").css("display", "none");
    $("#video_upload_show_open_school").attr("id", "video_upload_show_school");
  });
  $(document).on("click", "#emoji_choose_show_open_school", function () {
    $("#post_popup_emoji_chose_school").css("display", "none");
    $(this).attr("id", "emoji_choose_show_school");
  });




  // artist modal popup comment input focus event
  $(document).on('focus', '#post_comment_input_artist', function () {
    $(".modal-info_artist").hide();
    $("#post_like_artist, #post_share_artist").hide();
    $(".media_boxes, #post_back_artist, #post_back1_artist").fadeIn();
    $(this).addClass("model-active-tab");
    $("#post_popup_audio_upload_artist").css("display", "none");
    $("#audio_upload_show_open_artist").attr("id", "audio_upload_show_artist");
    $("#post_popup_emoji_chose_artist").css("display", "none");
    $("#emoji_choose_show_open_artist").attr("id", "emoji_choose_show_artist");
    $("#post_popup_video_upload_artist").css("display", "none");
    $("#video_upload_show_open_artist").attr("id", "video_upload_show_artist");
    $('#emoji_choose_show_artist,#video_upload_show_artist,#audio_upload_show_artist').css('display', 'block');
  });


  //show video upload for video modal

  $(document).on("click", "#video_upload_show_artist", function () {
    // alert('event fired working')
    $("#post_popup_video_upload_artist").css("display", "block");
    $(this).attr("id", "video_upload_show_open_artist");
    $("#post_popup_audio_upload_artist").css("display", "none");
    $("#audio_upload_show_open_artist").attr("id", "audio_upload_show_artist");
    $("#post_popup_emoji_chose_artist").css("display", "none");
    $("#emoji_choose_show_open_artist").attr("id", "emoji_choose_show_artist");
  });

  $(document).on("click", "#video_upload_show_open_artist", function () {
    $("#post_popup_video_upload_artist").css("display", "none");
    $(this).attr("id", "video_upload_show_artist");
  });
  // show post modal audio popup for news modal

  $(document).on("click", "#audio_upload_show_artist", function () {
    $("#post_popup_audio_upload_artist").css("display", "block");
    $(this).attr("id", "audio_upload_show_open_artist");
    $("#post_popup_video_upload_artist").css("display", "none");
    $("#video_upload_show_open_artist").attr("id", "video_upload_show_artist");
    $("#post_popup_emoji_chose_artist").css("display", "none");
    $("#emoji_choose_show_open_artist").attr("id", "emoji_choose_show_artist");
  });
  $(document).on("click", "#audio_upload_show_open_artist", function () {
    $("#post_popup_audio_upload_artist").css("display", "none");
    $(this).attr("id", "audio_upload_show_artist");
  });
  //show emoji in news modal 

  $(document).on("click", "#emoji_choose_show_artist", function () {
    $("#post_popup_emoji_chose_artist").css("display", "block");
    $(this).attr("id", "emoji_choose_show_open_artist");
    $("#post_popup_audio_upload_school").css("display", "none");
    $("#post_popup_video_upload_artist").css("display", "none");
    $("#video_upload_show_open_artist").attr("id", "video_upload_show_artist");
  });
  $(document).on("click", "#emoji_choose_show_open_artist", function () {
    $("#post_popup_emoji_chose_artist").css("display", "none");
    $(this).attr("id", "emoji_choose_show_artist");
  });


//video modal js

  var figure = $(".video").hover(hoverVideo, hideVideo);

  function hoverVideo(e) {
    $('video', this).get(0).play();
  }

  function hideVideo(e) {
    $('video', this).get(0).pause();
    $('video', this).css({
      // 'height': '150px'
    });
  
  }
//video upload modal on/off

$(document).on("click", ".video-ok-btn",function(){
    $(this).parent().parent().parent().parent().css('display','none');
});
$(document).on("click", ".emoji-tab-close-btn", function() {
  $(this)
    .parent()
    .parent()
    .css("display", "none");
});

$(document).on("click", ".liked-post-comments",function(){
  $(this).parent().parent().siblings('.comment-count-area').css('display','block');
});


              //Chat reply
              $(".chat-action .fa-c omments").click(function() {
                console.log("ddd");
                $(this).closest(".media-body").append(`
		<div class="chat-reply form_div">
												<div class="media">
												  <div class="media-left">
													<a href="popup.html#" >
													  <img class="media-object" src="images/profile.jpg" >
													</a>
												  </div>
												  <div class="media-body t-padding">
													<input type="text" class="form-control" placeholder="a">
													<i class="fa fa-plus-square txt-act"></i>
												  </div>
												</div>
											</div>
											
    `);
    


//handle center video play
 











                //$('.media_boxes').css({'max-height': heightjk+62 + 'px'})
              });

              $(window).load(function() {
                $("#open-emo,#social_div,.modal-info_artist,#post_share_artist,#post_like_artist,#post_share_school,#post_like_school,.modal-info_school,.modal-info_image,.modal-info_history,#post_share_history,#post_like_history,.modal-info_blog,.modal-info_image,#post_share_image,#post_like_image,.modal-info,#post_like_video,#post_share_video,.modal-info_video,.modal-chat_post,#post_modal_chat_news,#post_back1_news,#post_back_news,.post_modal_chat").hide();
                $('#blog-modal-chat').show();
                $(".pro_div.scroll").css("height", "655px");
              });

              // // Show social icon div in chat
              // $(".txt-act").click(function(e){
              // 	console.log("ddd");
              // 	$(".social_div").fadeIn();
              // })

              // // Hide social icon div in chat if user click outside div
              // $(document).mouseup(function(e)
              // {
              // 	var container = $(".social_div");

              // 	// if the target of the click isn't the container nor a descendant of the container
              // 	if (!container.is(e.target) && container.has(e.target).length === 0)
              // 	{
              // 		container.hide();
              // 	}
              // });
            });
			
	}
};
