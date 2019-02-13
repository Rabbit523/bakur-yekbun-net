<template>
<div class="music-likes-area">
	<ul>
	  <li>
		<a href="javascript:void(0)">
		   <div class="facebook-reaction">
			<span class="like-btn"> 
			<span class="fa like-btn-emo fa fa-thumbs-up"></span> 
			<span class="like-btn-text">2123</span> 
			</span>
		  </div>
		</a>
	  </li>
	  
	<li>
		<a href="javascript:void(0)" title="Send this to friends or post it to your timeline">
		  <span class="fa fa-indent"></span>
		  <span>112222</span>
		</a>
				
	  </li>
	  <li>
		<a href="javascript:void(0)" title="Send this to friends or post it to your timeline">
		  <span class="fa fa-headphones"></span>
		  <span>112222</span>
		</a>
	  </li>
	  <li>
		<a href="javascript:void(0)" title="Send this to friends or post it to your timeline">
		  <span class="fa fa-share-alt"></span>
		  <span>1231</span>
		</a>
	  </li>
	  
	  
		<a class="dotdropdown" id="dropdownMenu2" data-toggle="dropdown" title="Send this to friends or post it to your timeline">
		  <span class="fa fa-ellipsis-h"></span>
		</a>		
	
<div class="dropdown-menu" aria-labelledby="dropdownMenu2" style="z-index: auto!important ;border-radius: 0; box-shadow:none; top: 170px; width: 220px;right: 50px;border: 1px solid #c7c7c7;left: inherit">
	<ul class="fb-post-dropdown music-menu-popup">
		<li data-toggle="modal" data-target=".bd-example-modal-lg-12-2">
		<i class="fa fa-share" style="top: 4px"></i>
		<a href="#">Share</a>
			<span>Add this to your saved items</span>
		</li>
		
		<li>
		<i class="fa fa-sign-in" style="top: 4px"></i>
		<a href="#">Send to friend</a>
			<span>See fewer posts like this</span>
		</li>
		
		<li data-toggle="modal" data-target=".bd-example-modal-lg-10-1">
		<i class="fa fa-indent" style="top: 4px"></i>
		<a href="#">Add to playlist</a>
			<span>Temporarily stop seeing posts</span>
		</li>

	</ul>
</div>
	
	</ul>
</div>


</template>

<script>
export default {
  components: {}
};
</script>
