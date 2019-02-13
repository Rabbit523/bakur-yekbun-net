<template>
<ul id="pills-tab">

		<li>
											<a href="#" data-toggle="tab" onclick="toggleNavPanel('sections_panel')"><i class="flaticon-smile active"></i></a>
										</li>
										
										
										<li class="active">
											<a href="#menu" onclick="MyfunctionMenu()" data-toggle="tab">
											<i class="fa fa-edit"></i>
											</a>
										</li>
										
										<li>
											<a onclick="functionColorBox()" data-toggle="tab" href="#menu1">
												<i class="flaticon-voice-recorder-microphone"></i>
											</a>
										</li>
										<li>
											<a onclick="functionColorBox()" data-toggle="tab" href="#menu2"><i class="flaticon-landscape-representing-photo-archive"></i></a>
										</li>
										<li>
											<a onclick="functionColorBox()" data-toggle="tab" href="#menu3"><i class="flaticon-youtube"></i></a>
										</li>
										
										<li>
											<a onclick="functionColorBox()"  data-toggle="tab" href="#menu4"><i class="fa fa-upload"></i></a>
										</li>

</ul>
</template>
<script>
export default {
  components: {}
};
</script>
