<template>
<ul class="slides">
										<li style="overflow-y: hidden; margin-top: 10px; width: 100%; float: left; margin-right: -100%; position: relative; opacity: 1; display: block; z-index: 2;" class="flex-active-slide">
											<div class="thumb-post-modal" style="margin-top: -45px;">
												
	<video src="images/video/Zakaria%20-%20Kurdistan.mp4" class="new_video" width="100%"></video>
	<div class="video-controls video-controls-visibility--visible" style="position: absolute; bottom: 40px;background-color: rgba(0, 0, 0, 0.1);">
		<button class="control-item play-and-pause-video fa fa-play" title="Play or Pause" style="color: #000"></button>
		<div class="progress-video-container">
			<input type="range" class="control-item progress-video" min="0.0" value="0.00" step="any" max="100.00">
			<span class="progress-time time-video" style="    position: relative;
    left: 4px;">00:00</span>
			<span class="duration-time time-video">06:18</span>
		</div>
		<div class="audio-video-container" style="width: initial; padding-top: 0;padding-left: 0;height: initial">
			<button class="control-item volume-video fa fa-volume-up" title="Volume" style="position:relative; top:5px;left:5px"></button>
			<input type="range" class="control-item slide-volume-video" min="0" value="1" step="any" max="1" style="background-size: 100% 100%;">
		</div>
		<button class="control-item fullscreen-video fa fa-expand"></button>
	</div>
	
	<div class="media" id="model-right-head" style="    position: absolute;bottom: 0px;width: 100%">
										
		<div class="row no-gutter model-right-head-b" style="    background: #000!important; color: #fff; font-size: 12px!important">
			
			<div class="col-xs-2" style="font-size: 13px">
				<i class="fa fa-thumbs-up" style="font-size: 13px"></i> Like
			</div>
			
			
			<div class="col-xs-2" style="font-size: 13px">
				<i class="fa fa-comments" style="font-size: 13px"></i> Comment
			</div>
				
			<div class="col-xs-2" style="font-size: 13px">
				<i class="fa fa-share-alt" style="font-size: 13px"></i> Share
			</div>

			


		</div>
	</div>
												
												
											</div>
										</li>

</ul>
</template>
<script>
export default {
  components: {}
};
</script>
