<style scoped>
.chat-search-box .fa {
    font-size: 17px;
    line-height: 32px !important;
}
</style>
<template>



		<!-- Start rightside user popup -->
		<div class="side">
            <div class="side-close hideside" onclick="SideClose()">X</div>
          
			
				<SideOne></SideOne>			

			
            <div class="tab-content" id="side-tab-content">
                <div role="tabpanel" class="tab-pane active" id="tab_1">
                    <div class="activepanel-dialog">
                        <div class="row">
                            <div class="col-md-12">
                                <h4 class="panel-dialog-title">Friend Request</h4>
                            </div>
                        </div>
                        <div class="friend-listing border-top">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="friend-list margin-top-20">
                                       <SideTwo></SideTwo>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="friend-list">
                                         <SideThree></SideThree>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="friend-list">
                                         <SideTwo></SideTwo>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="friend-list">
                                        <SideThree></SideThree>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="friend-list">
                                        <div class="media" data-toggle="modal" data-target=".friend_options-more">
                                            <a class="media-left" href="#">
                                                <i class="flaticon-users bg-danger"></i>
                                            </a>
                                            <div class="media-body">
                                                <h4 class="media-heading">Rohan Sulaiman 
                                                    <i class="flaticon-star" style="color:#e59305;"></i>
                                                </h4>
                                                <small> <i>14 hours ago</i></small>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="friend-list">
                                   <SideThree></SideThree>
                                    </div>
                                </div>
                            </div>
							
                        </div>

                    </div>
                </div>
                <div role="tabpanel" class="tab-pane" id="tab_2">
                    <div class="activepanel-dialog">
                        <div class="row">
                            <div class="col-md-12">
                                <h4 class="panel-dialog-title">Coming Soon</h4>
                            </div>
                        </div>

                    </div>
                </div>

                <div role="tabpanel" class="tab-pane" id="tab_3">
                    <div class="activepanel-dialog">
                        <div class="row">
                            <div class="col-md-12">
                                <h4 class="panel-dialog-title">Information</h4>
                            </div>
                        </div>
                        <div class="notifaction-listing border-top">
                            <ul class="list-unstyled">
                                <li>
                                    <div class="NotificationHeaderTop">
                                        <a href="javascript:;">Notifications</a>
                                        <div class="notificationSetting">
                                            <a href="javascript:;" class="text-primary">Mark All As Read</a>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="notifaction1">
                                        <a href="javascript:;">
                                            <span class="flaticon-tick-inside-circle text-success"></span>
                                        </a>
                                        <div class="notifactionInfo">
                                            <div class="notifactionUI">
                                                <a href="javascript:;">Rohan Sulaiman</a> Lorem ipsum  <a href="javascript:;">dummy text</a>
                                            </div>
                                            <p>comments on your Post </p>
                                            <p class="margin-bottom-zero"><span><i class="fa fa-star text-success"></i> 14 hours ago</span></p>
                                            <span class="remove-opt-btn">
                                                <i class="fa fa-trash-o fa-1x pull-right text-info"></i>
                                            </span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="notifaction1">
                                        <a href="javascript:;">
                                            <span class="flaticon-round-delete-button text-danger "></span> 
                                        </a>
                                        <div class="notifactionInfo">
                                            <div class="notifactionUI">
                                                <a href="javascript:;">Rohan Sulaiman</a> Lorem ipsum  <a href="javascript:;">dummy text</a>
                                            </div>
                                            <p>comments on your Post </p>
                                            <p class="margin-bottom-zero"><span><i class="fa fa-flag text-warning"></i> 14 hours ago</span></p>
                                            <span class="remove-opt-btn">
                                                <i class="fa fa-trash-o fa-1x pull-right text-info"></i>
                                            </span>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <div class="notifaction1">
                                        <a href="javascript:;">
                                            <span class="flaticon-information text-warning"></span>
                                        </a>
                                        <div class="notifactionInfo">
                                            <div class="notifactionUI">
                                                <a href="javascript:;">Rohan Sulaiman</a> Lorem ipsum  <a href="javascript:;">dummy text</a>
                                            </div>
                                            <p>comments on your Post </p>
                                            <p class="margin-bottom-zero"><span><i class="fa fa-thumbs-up text-info"></i> 14 hours ago</span></p>
                                            <span class="remove-opt-btn">
                                                <i class="fa fa-trash-o fa-1x pull-right text-info"></i>
                                            </span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="notifaction1">
                                        <a href="javascript:;">
                                            <img src="images/news/rohan.png" class="border-color-green" alt="">
                                        </a>
                                        <div class="notifactionInfo">
                                            <div class="notifactionUI">
                                                <a href="javascript:;">Rohan Sulaiman</a> Lorem ipsum  <a href="javascript:;">dummy text</a>
                                            </div>
                                            <p>comments on your Post </p>
                                            <p class="margin-bottom-zero"><span><i class="fa fa-flag text-warning"></i> 14 hours ago</span></p>
                                            <span class="remove-opt-btn">
                                                <i class="fa fa-trash-o fa-1x pull-right text-info"></i>
                                            </span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="notifaction1">
                                        <a href="javascript:;">
                                            <img src="images/news/rohan.png" class="border-color-green" alt="">
                                        </a>
                                        <div class="notifactionInfo">
                                            <div class="notifactionUI">
                                                <a href="javascript:;">Rohan Sulaiman</a> Lorem ipsum
                                            </div>
                                            <p>comments on your Post </p>
                                            <p class="margin-bottom-zero"><span><i class="fa fa-thumbs-up text-info"></i> 14 hours ago</span></p>
                                            <span class="remove-opt-btn">
                                                <i class="fa fa-trash-o fa-1x pull-right text-info"></i>
                                            </span>
                                        </div>
                                    </div>
                                </li>

                            </ul> 

                        </div>
                    </div>
                </div>
                <div role="tabpanel" class="tab-pane" id="tab_4">
                    <div class="activepanel-dialog">
                        <div class="row">
                            <div class="col-md-12">
                                <h4 class="panel-dialog-title text-muted">View Later</h4>
                            </div>
                        </div>
                        <div class="view-later-tab border-top">
                            <div class="view-later-row border-bottom">
                                <div class="row margin-top-20">
                                    <div class="col-sm-5">
                                        <img src="images/events/new-year.png" class="img-responsive" alt="">
                                    </div>
                                    <div class="col-sm-7 padding-left-zero video-view-later">
                                        <h4>T-Fest Molodosti 97</h4>
                                        <p>
                                            <a href="javascript:;"><span class="text-muted">an hours ago</span>
                                            </a><a href="javascript:;"><i class="fa fa-eye text-warning"></i></a>
                                            <a href="javascript:;"><span class="text-muted">900</span></a>
                                        </p>
                                    </div>
                                    <span class="remove-opt-btn">
                                        <i class="fa fa-trash-o fa-1x pull-right text-info"></i>
                                    </span>
                                </div>
                            </div>
                            <div class="view-later-row border-bottom">
                                <div class="row margin-top-20">
                                    <div class="col-sm-5">
                                        <img src="images/events/new-year.png" class="img-responsive" alt="">
                                    </div>
                                    <div class="col-sm-7 padding-left-zero video-view-later">
                                        <h4>T-Fest Molodosti 97</h4>
                                        <p>
                                            <a href="javascript:;"><span class="text-muted">an hours ago</span>
                                            </a><a href="javascript:;"><i class="fa fa-eye text-warning"></i></a>
                                            <a href="javascript:;"><span class="text-muted">900</span></a>
                                        </p>
                                    </div>
                                    <span class="remove-opt-btn">
                                        <i class="fa fa-trash-o fa-1x pull-right text-info"></i>
                                    </span>
                                </div>
                            </div>
                            <div class="view-later-row border-bottom">
                                <div class="row margin-top-20">
                                    <div class="col-sm-5">
                                        <img src="images/events/new-year.png" class="img-responsive" alt="">
                                    </div>
                                    <div class="col-sm-7 padding-left-zero video-view-later">
                                        <h4>T-Fest Molodosti 97</h4>
                                        <p>
                                            <a href="javascript:;"><span class="text-muted">an hours ago</span>
                                            </a><a href="javascript:;"><i class="fa fa-eye text-warning"></i></a>
                                            <a href="javascript:;"><span class="text-muted">900</span></a>
                                        </p>
                                    </div>
                                    <span class="remove-opt-btn">
                                        <i class="fa fa-trash-o fa-1x pull-right text-info"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                 </div>
                </div>
                
				<!--<div role="tabpanel" class="tab-pane active" id="side_chat_list">
                    <div class="chat-dialog">
                        <div class="row" style="">
                            <div class="col-md-12">
                                <h4 class="panel-dialog-title" style="display:none;">Search</h4>
                            </div>
                        </div>
                        <div class="border-top">
                            <div class="chat_dialog" style="display: none">
                                <div class="side-title border-top2">
                                    <span class="pull-left text-gray back_chat"><a href="javascript:;"><i class="fa fa-angle-left"></i></a></span>
                                    <span class="pull-right"><span class="user_status">
                                        <div class="ima pull-right"><img src="images/news/r.png"></div>
                                        <i class="fa fa-circle"></i></span> Alaa Samir</span>
                                </div>
						

						
						
							<div class="tab-content">
								<div id="side-img-1" class="tab-pane fade in active">
									<div class="chat_dialog_content">
										<div class="chat-box-single-line">
											<abbr class="timestamp">Today</abbr>
											<div class="dialog_text_block my_message">
												<div class="ima">
													<img src="images/news/r.png">
												</div>
												<p>test test test test test test test test test test test test test test</p> 
												<small class="pull-right text-muted">
													<span class="fa fa-clock-o"></span>
													30 mins ago
												</small>
											</div>
											<div class="dialog_text_block his_message">
												<div class="ima">
													<img src="images/news/r.png">
												</div>
												<p>test test test test test test test test test test test test test test </p>
												<small class="pull-left text-muted">
													<span class="fa fa-clock-o"></span>
													25 mins ago
												</small>
											</div>
											<div class="dialog_text_block his_message">
												<div class="ima">
													<img src="images/news/r.png">
												</div>
												<div class="chat_voice">
													
													<div class="firePlayer">
														<div class="controls">
															<audio src="http://www.bensound.org/bensound-music/bensound-dubstep.mp3"></audio>
															
															<div class="button-wrap">
																<button class="audio-play"></button>
															</div>
															<div class="progress-wrap">
																<div class="audio-current-time">0:00</div>
																<div class="audio-seekbar" value="0" max="1">
																	<div class="audio-slide"></div>
																</div>
																<div class="audio-length">0:00</div>
															</div>
														</div>
													</div>
													
												</div>
												<small class="pull-left text-muted">
													<span class="fa fa-clock-o"></span>
													22 mins ago
												</small>
											</div>
											<div class="dialog_text_block my_message">
												<div class="ima">
													<img src="images/news/r.png">
												</div>
												<div class="chat_voice">
													
													<div class="firePlayer">
														<div class="controls">
															<audio src="http://www.bensound.org/bensound-music/bensound-dubstep.mp3"></audio>
															
															<div class="button-wrap">
																<button class="audio-play"></button>
															</div>
															<div class="progress-wrap">
																<div class="audio-current-time">0:00</div>
																<div class="audio-seekbar" value="0" max="1">
																	<div class="audio-slide"></div>
																</div>
																<div class="audio-length">0:00</div>
															</div>
														</div>
													</div>
													
												</div>
												<small class="pull-right text-muted">
													<span class="fa fa-clock-o"></span>
													20 mins ago
												</small>
											</div>
											<div class="dialog_text_block his_message">
												<div class="ima">
													<img src="images/news/r.png" alt="image">
												</div>
												<a href="#" class="attached_file"><img src="images/pdf.png"/> Ui Design.pdf   <span class="text-gray">2 MB</span></a>
												<small class="pull-left text-muted">
													<span class="fa fa-clock-o"></span>
													18 mins ago
												</small>
											</div>
											<div class="dialog_text_block his_message">
												<div class="ima">
													<img src="images/news/r.png">
												</div>
												<a class="shared_link" href="#">
													<img src="images/userdashboard/home/middle-section/bazz2.png" class="img-responsive"  alt="image"/>
													<span class="text-black">User interface design - darory</span>
													<span class="text-gray">we are a company specializing in IT for individuals and companies.<br>https://www.darory.com</span>
												</a>
												<small class="pull-left text-muted">
													<span class="fa fa-clock-o"></span>
													16 mins ago
												</small>
											</div>
											<div class="dialog_text_block his_message photo_share">
												<div class="ima">
													<img src="images/news/r.png">
												</div>
												<p class="shared_link" href="#">
													<img src="images/events/new-year.png" class="img-responsive" alt="">
													<img src="images/events/new-year.png" class="img-responsive" alt="">
												</p>
												<small class="pull-left text-muted">
													<span class="fa fa-clock-o"></span>
													15 mins ago
												</small>
											</div>
										</div>
									</div>
                                </div>
								
								<div id="side-img-2" class="tab-pane fade">
									<div class="chat_dialog_content">
										<div class="chat-box-single-line">
											<abbr class="timestamp">Today</abbr>
											<div class="dialog_text_block my_message">
												<div class="ima">
													<img src="images/news/r.png">
												</div>
												<p>test test test test test test test test test test test test test test</p> 
												<small class="pull-right text-muted">
													<span class="fa fa-clock-o"></span>
													30 mins ago
												</small>
											</div>
										</div>
									</div>
                                </div>
								
							</div>	
								
								

                                <div class="video_option_tabs" style="display: none">
                                    <div class="emoji_option_tabs_content" >
                                        <div class="inner-height-area">
                                            <ul class="nav nav-tabs">
                                                <li>
                                                    <a data-toggle="tab" href="#emojjiv">
                                                        <img src="images/chat/smile-1.png"  style="height: 28px" alt="smile">
                                                    </a>
                                                </li>
                                                <li class="active">
                                                    <a data-toggle="tab" href="#video_optionv">
                                                        <img src="images/chat/youtube-2.png" style="height: 28px" alt="youtube" >
                                                    </a>
                                                </li>
                                            </ul>

                                            <div class="tab-content">
                                                <div id="emojjiv" class="tab-pane fade">
                                                    
                                                        <SideForth></SideForth>
                                                    
                                                </div>

                                                <div id="video_optionv" class="tab-pane fade in active">
                                                    <div class="row margin-zero">
                                                             <SideFive></SideFive>

                                                             <SideFive></SideFive>

                                                     <SideFive></SideFive>

                                                      <SideFive></SideFive>
														
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="chat-bottom-button">
                                            <div class="row">
                                                <div class="col-xs-6 text-center">
                                                    <button class="btn btn-sm btn-outline-success">Add</button>
                                                </div>
                                                <div class="col-xs-6 text-center">
                                                    <button class="btn btn-sm btn-outline-danger">Cancel</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="emoji_option_tabs" style="display: none">
                                    <div class="emoji_option_tabs_content" >
                                        <div class="inner-height-area">
                                            <ul class="nav nav-tabs">
                                                <li class="active">
                                                    <a data-toggle="tab" href="#emojji">
                                                        <img src="images/chat/smile-1.png"  style="height: 28px" alt="smile">
                                                    </a>
                                                </li>
                                                <li>
                                                    <a data-toggle="tab" href="#video_option">
                                                        <img src="images/chat/youtube-2.png" style="height: 28px" alt="youtube" >
                                                    </a>
                                                </li>
                                            </ul>
                                            <div class="tab-content">
                                                <div id="emojji" class="tab-pane fade in active">
                                                    
                                                              <SideSix></SideSix>
                                                    
                                                </div>
                                                <div id="video_option" class="tab-pane fade">
                                                    <div class="row margin-zero">
                                                        <SideFive></SideFive>

                                                       <SideFive></SideFive>

                                                        <SideFive></SideFive>

                                                       <SideFive></SideFive>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="chat-bottom-button">
                                            <div class="row">
                                                <div class="col-xs-6 text-center">
                                                    <button class="btn btn-sm btn-outline-success">Add</button>
                                                </div>
                                                <div class="col-xs-6 text-center">
                                                    <button class="btn btn-sm btn-outline-danger">Cancel</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="chat_footer">
                                    <span class="pull-left chat_footer_btn add" id="div">
                                       
                                        <a href="#"><img src="images/chat/add.png" style="height:24px; width:24px;" alt="add_icon"></a>
                                    </span>
                                    <input type="text" placeholder="Type a message" id="submit_message" name="submit_message" class="md-input pull-left">
                                    <span class="pull-right chat_footer_btn chat_footer_btn_send"><i class="fa fa-send fa-1x" aria-hidden="true"></i></span>
                                </div>

                                <div class="side_small">
								
	<SideSeven></SideSeven>
	</div>
								
								
								
                                <div class="chat_option" style="display:none;">
                                    <div class="chat_ima" style="width: auto; margin-left: 0">
									
										<ul class="nav nav-tabs" style="border-bottom: none;">
										<li class="">
                                        <a data-toggle="modal" data-target="#companyPositionModal" href="javascript:;">
                                            <img src="images/chat/microphone-1.png" alt="microphone">
                                        </a>
										</li>
										</ul>
                                    </div>
									
                                    <div class="chat_ima" style="width: auto; margin-left: 0">
										<ul class="nav nav-tabs" style="border-bottom: none;">
										<li class="">
									
                                        <a data-toggle="tab" href="javascript:;" class="video_option" id="video_option">
                                            <img src="images/chat/youtube-2.png" alt="youtube">
                                        </a>
										</li>
										</ul>
										
                                    </div>
									
									
                                    <div class="chat_ima" style="width: auto; margin-left: 0">
										<ul class="nav nav-tabs" style="border-bottom: none;">
										<li class="">
                                        <a href="javascript:;" id="emoji-option">
                                            <img src="images/chat/smile-1.png" alt="smile">
                                        </a>
										</li>
										</ul>
                                    </div>

                                    <div class="chat_ima" style="width: auto; margin-left: 0">
									
									<ul class="nav nav-tabs" style="border-bottom: none;">
										<li class="">
                                        <a href="javascript:;" class="docimg-downlad">
                                            <div class="myLabel">
                                                <input type="file"/>
                                                <img src="images/chat/arrows.png" alt="arrows">
                                            </div>
                                        </a>
									</li>	
									</ul>	
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="chat_list">
                        <div class="side-title border-top2" style="display:"><i class="fa fa-comments text-green"></i> 
                            Chat <span class="user_status pull-right"><i class="fa fa-circle"></i> Avaiable</span>
                        </div>
                        <div class="chat-search-box" style="">
                            <form>
                                <div class="form-group has-feedback">
                                    <input type="text" class="form-control" id="inputSuccess">
                                    <span class="fa fa-search form-control-feedback text-gray"></span>
                                </div>
                            </form>
                        </div>
                        <div class="item">
                            <div class="friendlist" style="top:35px">
                                <div class="ne">
                                    <div class="ima">
                                        <img src="images/news/r.png">
                                        <span class="small-circle">2</span>
                                        <span class="small-circle friend_status bg-green">&nbsp;</span>
                                    </div>
                                    <h5><span>Rohan Sulaiman</span> <i class="fa fa-ellipsis-v fa-2x pull-right text-gray" data-toggle="modal" data-target=".friend_options"></i></h5>
                                    <p>hi nice to talk with you</p>
                                </div>
                                <div class="ne">
                                    <div class="ima">
                                        <img src="images/news/r.png">
                                        <span class="small-circle">2</span>
                                        <span class="small-circle friend_status bg-gray">&nbsp;</span>
                                    </div>
                                    <h5><span>Rohan Sulaiman</span> <i class="fa fa-ellipsis-v fa-2x pull-right text-gray" data-toggle="modal" data-target=".friend_options"></i></h5>
                                    <p>hi nice to talk with you</p>
                                </div>
                                <div class="ne">
                                    <div class="ima">
                                        <img src="images/news/r.png">
                                        <span class="small-circle">2</span>
                                        <span class="small-circle friend_status bg-green">&nbsp;</span>
                                    </div>
                                    <h5><span>Rohan Sulaiman</span> <i class="fa fa-ellipsis-v fa-2x pull-right text-gray" data-toggle="modal" data-target=".friend_options"></i></h5>
                                    <p>hi nice to talk with you</p>
                                </div>
                                <div class="ne">
                                    <div class="ima">
                                        <img src="images/news/r.png">
                                        <span class="small-circle">2</span>
                                        <span class="small-circle friend_status bg-green">&nbsp;</span>
                                    </div>
                                    <h5><span>Rohan Sulaiman</span> <i class="fa fa-ellipsis-v fa-2x pull-right text-gray" data-toggle="modal" data-target=".friend_options"></i></h5>
                                    <p>hi nice to talk with you</p>
                                </div>
                                <div class="ne">
                                    <div class="ima">
                                        <img src="images/news/r.png">
                                        <span class="small-circle">2</span>
                                        <span class="small-circle friend_status bg-green">&nbsp;</span>
                                    </div>
                                    <h5><span>Rohan Sulaiman</span> <i class="fa fa-ellipsis-v fa-2x pull-right text-gray" data-toggle="modal" data-target=".friend_options"></i></h5>
                                    <p>hi nice to talk with you test</p>
                                </div>
                                <div class="ne">
                                    <div class="ima">
                                        <img src="images/news/r.png">
                                        <span class="small-circle">2</span>
                                        <span class="small-circle friend_status bg-green">&nbsp;</span>
                                    </div>
                                    <h5><span>Rohan Sulaiman</span> <i class="fa fa-ellipsis-v fa-2x pull-right text-gray" data-toggle="modal" data-target=".friend_options"></i></h5>
                                    <p>hi nice to talk with you</p>
                                </div>
                                <div class="ne">
                                    <div class="ima">
                                        <img src="images/news/r.png">
                                        <span class="small-circle">2</span>
                                        <span class="small-circle friend_status bg-green">&nbsp;</span>
                                    </div>
                                    <h5><span>Rohan Sulaiman</span> <i class="fa fa-ellipsis-v fa-2x pull-right text-gray" data-toggle="modal" data-target=".friend_options"></i></h5>
                                    <p>hi nice to talk with you</p>
                                </div>
                                <div class="ne">
                                    <div class="ima">
                                        <img src="images/news/r.png">
                                        <span class="small-circle">2</span>
                                        <span class="small-circle friend_status bg-green">&nbsp;</span>
                                    </div>
                                    <h5><span>Rohan Sulaiman</span> <i class="fa fa-ellipsis-v fa-2x pull-right text-gray" data-toggle="modal" data-target=".friend_options"></i></h5>
                                    <p>hi nice to talk with you</p>
                                </div>
                                <div class="ne" style="margin-bottom: 60px">
                                    <div class="ima">
                                        <img src="images/news/r.png">
                                        <span class="small-circle">2</span>
                                        <span class="small-circle friend_status bg-green">&nbsp;</span>
                                    </div>
                                    <h5><span>Rohan Sulaiman</span> <i class="fa fa-ellipsis-v fa-2x pull-right text-gray" data-toggle="modal" data-target=".friend_options"></i></h5>
                                    <p>hi nice to talk with you</p>
                                </div>
                            </div>
	
							
							
                        </div>
	
                    </div>

                </div>-->
                <div role="tabpanel" class="tab-pane" id="tab_6">
                    <div  id="sidebar" class="sidebar sidebar-default activepanel-dialog" role="navigation">
                        <div class="setting-option">
                            <div class="row">
                                <div class="col-md-12">
                                    <h4 class="panel-dialog-title">Settings</h4>
                                </div>
                            </div>
                            <div class="sidebar-header header-cover" style="background-image: url(https://2.bp.blogspot.com/-2RewSLZUzRg/U-9o6SD4M6I/AAAAAAAADIE/voax99AbRx0/s1600/14%2B-%2B1%2B%281%29.jpg);">
                                <!-- Top bar -->

                                <!-- Sidebar brand image -->
                                <div class="sidebar-image">
                                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53474/atom_profile_01.jpg">
                                    <!-- Sidebar brand name -->
                                    <div class="setting_profile">
                                        <div class="row">
                                            <div class="col-xs-6">
                                                <div class="my-profile_setting">
												
													<a href="https://rojava.yekbun.net">
                                                    <i class="fa fa-user-circle"></i>
                                                    <span>My Profile</span></a>
                                                </div>
                                            </div>
                                            <div class="col-xs-6">
                                                <div class="dropdown">
                                                    <a href="javascript:;" class="sidebar-brand dropdown-toggle" data-toggle="dropdown">
                                                        <i class="fa fa-home"></i>
                                                        yakbun.net
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="setting-page-pop">
                                <div class="profile-setting">
                                    <div class="row border-tb">
                                        <div class="col-xs-6">
                                            <div class="setting-username">
                                                <h4>Username</h4>
                                            </div>
                                        </div>
                                        <div class="col-xs-6">
                                            <ul class="nav sidebar-nav dropdown-menu-custom list-unstyled unstyled">
                                                <li>
                                                    <div class="selectedStatus">
                                                        <div class="onlineStatus active"><span class="onlineColor"></span> Online</div>
                                                        <div class="offlineStatus"><span class="offlineColor"></span> Offline</div>
                                                        <div class="busyStatus"><span class="busyColor"></span>  Busy</div>
                                                        <div class="awayStatus"><span class="awayColor"></span>  Away</div>
                                                    </div>
                                                    <ul class="list-unstyled userStatus">
                                                        <li value="Online"> <span class="onlineColor"></span> Online</li>
                                                        <li value="Offline"> <span class="offlineColor"></span> Offline</li>
                                                        <li value="Busy"><span class="busyColor"></span>  Busy</li>
                                                        <li value="Away"> <span class="awayColor"></span> Away</li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
									
									
									<SideLoginRojava></SideLoginRojava>
                                   
                                    <ul class="nav sidebar-nav list-unstyled unstyled">
                                        <li>
                                            <a href="#" data-toggle="modal" data-target=".bd-example-modal-lg-main-2">
                                                <i class="fa fa-internet-explorer fa-hw"></i>
                                                Create FanPage
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" data-toggle="modal" data-target=".bd-example-modal-lg-main-1">
                                                <i class="fa fa-bullhorn fa-hw"></i>
                                                Add Advertising
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" data-toggle="modal" data-target=".bd-example-modal-lg-main-3">
                                                <i class="fa fa-stack-exchange fa-hw"></i>
                                                Add Blog
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" data-toggle="modal" data-target=".bd-example-modal-lg-main-1">
                                                <i class="fa fa-shopping-basket fa-hw"></i>
                                                Add item to bazar
                                            </a>
                                        </li>

                                    </ul>

                                </div>
                               
								
                            </div>	
                        </div>
                    </div>
                </div>
				
            </div>
			
			
			<div class="modelhelp" style="display: block;position: fixed;bottom: -17px; background: #Fff;color: #000;width: 345px;">
			
				
			

			
				<div class="modalfooter">
				
				<a href="#" data-toggle="modal" data-target="#language-popup" style="margin-left: 0;margin-right: 28px;" > <img src="images/flag.png" style="width: 18px;height: 15px;position: relative;bottom: 1px;"></a>
				
					<a href="#" title="Logout" style="    float: left; display: inline-block;position: relative;padding-left: 25px;" @click="logoutUserf" > <i class="fa fa-sign-out"></i></a>
					
					<a href="#tab_6" role="tab" data-toggle="tab" title="Settings" style="    float: left; display: inline-block;position: relative;"> <i class="fa fa-cogs" style="font-size: 15px !important;"></i></a>
					
									<a href="https://yekbun.net/help" style="    float: left; display: inline-block;position: relative;"> <i class="fa fa-question-circle"></i></a>
				</div>
			
			
			</div>
        </div>







</template>
<script>
import SideOne from "./forside/SideOne.vue";
import SideTwo from "./forside/SideTwo.vue";
import SideThree from "./forside/SideThree.vue";
import SideForth from "./forside/SideForth.vue";
import SideFive from "./forside/SideFive.vue";
import SideSix from "./forside/SideSix.vue";
import SideSeven from "./forside/SideSeven.vue";
import SideLoginRojava from "./forside/SideLoginRojava.vue";


export default {
  components: {
    SideOne,
    SideTwo,
    SideThree,
    SideForth,
    SideFive,
    SideSix,
    SideSeven,
    SideLoginRojava
  },
  data() {
    return {};
  },
  watch: {},
  mounted() {
    //edd
  },
  methods: {
     logoutUserf() {
      localStorage.removeItem("token");
      localStorage.removeItem("loginAccess");
      localStorage.removeItem("rememberValue");
      window.location = "https://yekbun.net/";
      
    }
  
  }
  
}; 
</script>
