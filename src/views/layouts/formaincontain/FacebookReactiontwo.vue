<template> 
										
								
										<ul class="newpostfooter nav nav-tabs nav-justified">
												  <li>
													<a href="javascript:void(0)">
													  <!--<i class="fa fa-heart"></i>
													   <span>Like</span>-->
													   <div class="facebook-reaction"><!-- container div for reaction system --> 
														<span class="like-btn"> <!-- Default like button --> 
														<span class="fa like-btn-emo fa fa-heart"></span> <!-- Default like button emotion--> 
														<span class="like-btn-text">Like</span> <!-- Default like button text,(Like, wow, sad..) default:Like  -->
														<ul class="reactions-box">
														  <!-- Reaction buttons container-->
														  <li class="reaction reaction-hearts" data-reaction="hearts"><i class="em em-hearts"></i></li>
														  <li class="reaction" data-reaction="vistory"><i class="em em-v"></i></li>
														  <li class="reaction" data-reaction="lion_face"><i class="em em-lion_face"></i></li>
														  <li class="reaction" data-reaction="laughing"><i class="em em-rolling_on_the_floor_laughing"></i></li>
														  <li class="reaction" data-reaction="candy"><i class="em em-candy"></i></li>
														  <li class="reaction" data-reaction="rose"><i class="em em-rose"></i></li>
														</ul>
														</span>
													  </div>
													</a>
												  </li>
												  <li>
													<a href="javascript:void(0)" title="Leave a comment">
													  <!--<i class="fa fa-heartbeat"></i>-->
													  <div class="facebook-reaction"><!-- container div for reaction system --> 
														<span class="like-btn"> <!-- Default like button -->
													  <span class="like-btn-emo flaticon-broken-heart"></span>
													  <span class="like-btn-text">Sad</span>
													  <ul class="reactions-box">
														  <!-- Reaction buttons container-->
														  <li class="reaction reaction-hearts" data-reaction="hearts"><i class="em em-broken_heart"></i></li>
														  <li class="reaction" data-reaction="vistory"><i class="em em-scream"></i></li>
														  <li class="reaction" data-reaction="sob"><i class="em em-sob"></i></li>
														  <li class="reaction" data-reaction="rage"><i class="em em-rage"></i></li>
														  <li class="reaction" data-reaction="disappointed"><i class="em em-disappointed_relieved"></i></li>
														</ul>
														</span>
													  </div>
													</a>
												  </li>
												  <li>
													<a href="javascript:void(0)" title="Send this to friends or post it to your timeline">
													  <div class="facebook-reaction"><!-- container div for reaction system --> 
														<span class="like-btn"> <!-- Default like button -->
													  <span class="like-btn-emo flaticon-comments"></span>
													  <span class="like-btn-text">Comment</span>
													  <ul class="reactions-box">
														  <!-- Reaction buttons container-->
														  <li class="reaction" data-reaction="ab"><i class="em em-ab"></i></li>
														  <li class="reaction" data-reaction="sob"><i class="em em-video_camera"></i></li>
														  <li class="reaction" data-reaction="microphone"><i class="em em-studio_microphone"></i></li>
														</ul>
														</span>
													  </div>
													</a>
												  </li>
												  <li>
													<a href="javascript:void(0)" title="Send this to friends or post it to your timeline">
													  <span class="flaticon-sharing-interface"></span>
													  <span>Share</span>
													</a>
												  </li>
											</ul>
											

</template>

<script>
export default {
  components: {}
};
</script>
