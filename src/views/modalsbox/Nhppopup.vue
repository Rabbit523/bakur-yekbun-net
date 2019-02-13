<template>


		
<!-- Start Nhp Modal -->
	<div class="modal fade" id="nhp-popup" role="dialog" style="display: none;">
		<div class="modal-dialog modal-lg">
			<div class="modal-content">
				<div class="modal-body" style="padding: 0">
					<div class="share_area">
						<div class="row">
							<div class="col-md-12">
								<div class="share_top">
									<div class="share_left">
										<button type="button" class="close" data-dismiss="modal"></button>
										<img src="nhp-popup/images/girl.jpg" alt="" />
										<h4>Share something in the Community</h4>
									</div>
								</div>
								<div class="share_input_box">
									
									<div id="textbox_EditMenu">
										<textarea name="" id="bigBox" placeholder="Type Something..." cols="70" rows="10"></textarea>		
									</div>
									
									
									
									<!-- Start Colorbox panel-->							
											<div id="multiBoxes">
													<a href="#"><div class="box_bit_angle"><i class="fa fa-angle-left"></i></div></a>
													
											           <NhppopupOne></NhppopupOne>
													   
												<a href="#"><div class="box_bit_angle"><i class="fa fa-angle-right"></i></div></a>
											</div>
										<!-- End Colorbox panel-->
									
									
									
									<!-- Start Bootstrap Toggleable Tabs-->	
									<div class="tab-content">
									
										<div id="menu" class="tab-pane fade">
																										
											<div id="textbox_EditMenu2">
												<textarea name=""  placeholder="Type Something..." cols="70" rows="10"></textarea>
											</div>	
											
										</div>
									
									
										<div id="menu1" class="tab-pane fade">
											
											<textarea name="" id="" placeholder="Type Something..." cols="70" rows="5"></textarea>
											
											<!-- Start Music Area -->
											<div class="alert_notification">
												<div class="wrap">

												  <div class="nhp-player nhp-paused">
												  
													<div class="progress-bar">
													  <div class="runner"></div>
													</div>
													<div class="album-art">
													  <div class="cover"></div>
													</div>
													
													<div class="description">
													  <div class="title">Something from nothing  </div>
													  <div class="sub-title">by Foo Fighters, Sonic highways</div>
													</div>
													  
													<div class="play-button">
													  <div class="lp-background"></div>
													  <i class="mdi mdi-play" style="color: red"></i>
													  <i class="mdi mdi-pause"></i>
													</div>
													
													<div class="time-indicator">
													  <i class="mdi mdi-clock"></i>
													  <span class="time">03:39</span>
													</div>
													
													
												  </div>
												  
												</div>
											</div>
											<!-- End Music Area -->
										</div>
										
										
										<div id="menu2" class="tab-pane fade">
											<textarea name="" id="" placeholder="Type Something..." cols="70" rows="5"></textarea>
											<div class="main_group">
												<div class='group'>
													<div id='groupcrop'>
														<div class='VPcrop'>
															<input class='VPcropint' id='VPcropint' onchange="previewFileimg('VPcropint')" name='input'type='file' accept="image/x-png, image/gif, image/jpeg"/>
														</div>
													</div>
												</div>
												<div class="group2">
													<img src="nhp-popup/images/img1.png" alt="" />
													<a class="times-one" href="#"><span class="cross-btn"></span></a>
													<img src="nhp-popup/images/img2.png" alt="" />
													<a class="times-two" href="#"><span class="cross-btn"></span></a>
													<img src="nhp-popup/images/img3.png" alt="" />
													<a class="times-three" href="#"><span class="cross-btn"></span></a>
												</div>
											</div>
										</div>
										
										<div id="menu3" class="tab-pane fade">
											<textarea name="" id="" placeholder="Type Something..." cols="70" rows="5"></textarea>
											<div class="main_group">
												<div class='group'>
													<div id='groupcrop'>
														<div class='VPcrop'>
															<input class='VPcropint' id='VPcropint' onchange="previewFileimg('VPcropint')" name='input'type='file' accept="image/x-png, image/gif, image/jpeg"/>
														</div>
													</div>
												</div>
												<div class="group2">
													<img src="nhp-popup/images/nature.jpg" alt="" />
													<a class="times-one" href="#"><span class="cross-btn"></span></a>
													<img src="nhp-popup/images/nature2.jpg" alt="" />
													<a class="times-two" href="#"><span class="cross-btn"></span></a>
													<img src="nhp-popup/images/nature3.jpg" alt="" />
													<a class="times-three" href="#"><span class="cross-btn"></span></a>
												</div>
											</div>
										</div>
										
										<div id="menu4" class="tab-pane fade">
											<textarea name="" id="" placeholder="Type Something..." cols="70" rows="5"></textarea>
											
											<div class='group main_group'>
												<div id='groupcrop'>
													<div class='VPcrop'>
														<input class='VPcropint' id='VPcropint' onchange="previewFileimg('VPcropint')" name='input'type='file' accept="image/x-png, image/gif, image/jpeg"/>
													</div>
												</div>
											</div>
				
										</div>
										
										
										
										<div class="font-icon-area-right">
								
									<!--Start Smile Icon -->
											<div class="MainSmileys">
											
												<div class="dropdown show">
													   
													<div id="sections_panel"> 
													 
												      <NhppopupTwo></NhppopupTwo>
													
												       <NhppopupThree></NhppopupThree>
														
											           <NhppopupForth></NhppopupForth>
														
										               <NhppopupFive></NhppopupFive>
														
														<div id="IconMenu9">
														
														</div>
														
														
														<!--Start Smiles Bottom -->
														
														<div class="smiles_bottom">
															
																<NhppopupSix></NhppopupSix>
															
														</div>
														
														<!--End Smiles Bottom -->
														
													</div>
												</div>
											</div>				
										
										<!--End Smile Icon -->
								
								
									
									
								      <NhppopupSeven></NhppopupSeven>
										
									
								</div>	
										
										
									</div>
									<!-- End Bootstrap Toggleable Tabs-->
								</div>
								
									
								
								<div class="font-icon-area-bottom">
									
							               
										   <NhppopupEight></NhppopupEight>
										
										
								</div>
							</div>
						</div>
					</div>
					
					<div class="modal-footer">
					  <button type="button" class="btn btn-default " data-dismiss="modal" style="border-radius: 5px">Share Now</button>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- End nhp Modal -->		
	
	


</template>
<script>
import NhppopupOne from "./fornhppopup/NhppopupOne.vue";
import NhppopupTwo from "./fornhppopup/NhppopupTwo.vue";
import NhppopupThree from "./fornhppopup/NhppopupThree.vue";
import NhppopupForth from "./fornhppopup/NhppopupForth.vue";
import NhppopupFive from "./fornhppopup/NhppopupFive.vue";
import NhppopupSix from "./fornhppopup/NhppopupSix.vue";
import NhppopupSeven from "./fornhppopup/NhppopupSeven.vue";
import NhppopupEight from "./fornhppopup/NhppopupEight.vue";

export default {
  components: {
    NhppopupOne,
    NhppopupTwo,
    NhppopupThree,
    NhppopupForth,
    NhppopupFive,
    NhppopupSix,
    NhppopupSeven,
    NhppopupEight
  }
};
</script>
