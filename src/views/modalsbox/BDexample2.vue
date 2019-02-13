<template>


	<!-- CREATE FAN PAGE MODAL -->
	        	<div class="modal fade bd-example-modal-lg-main-2" style="display: none;">
	        	  <div class="modal-dialog modal-lg container" style="width: 900px">
		        	    <div class="modal-content">
	      		        	<!-- Wizard container -->
		      		        <div class="wizard-container">
		      		            <div class="card wizard-card" data-color="red" id="wizard">
		      		                <form action="#" method="">
	      		                    	<div class="wizard-header">
	      		                    	  <h3 class="wizard-title">Create Fan Page</h3>
	      		                    	  <p class="category"></p>
	      		                    	</div>
	      								<div class="wizard-navigation">
	      									<div class="progress-with-circle">
	      									    <div class="progress-bar" role="progressbar" aria-valuenow="1" aria-valuemin="1" aria-valuemax="4" style="width: 15%;"></div>
	      									</div>
	      									
	      			                          <BDexample2one></BDexample2one>
	      			                            
	      			                        
	      								</div>
	      		                        <div class="tab-content">
	      		                            <div class="tab-pane" id="fanpage-step-1">
	      		                            	<div class="row">
	      		                                	<div class="col-sm-12">
	      		                                    	<h5 class="info-text"></h5>
	      		                                    	<br>
	      		                                    	<br>
	      		                            		</div>

		      		                            	<!-- Group -->
		      		                            	<div class="col-sm-2 col-sm-offset-1">
						        	    		    	<div class="radio-tile-group">
						        	    		    		<!-- Group -->
						        	    		    		<div class="input-container">
																<input id="walk" class="radio-button" type="radio" name="radio" />
																<div class="radio-tile">
																	<div class="icon walk-icon">
							        	    					        <svg class="icon">
							        	    					          <use xlink:href="#group-1">
																		   
																		  </use>
																		  
							        	    					      	</svg>
				        	    									</div>
																	<label for="walk" class="radio-tile-label">Group</label>
																</div>
															</div>
														</div>
													</div>
													<!-- END Group-->

													<!-- Entertainment -->
													<div class="col-sm-2">
						        	    		    	<div class="radio-tile-group">
						        	    		    		<div class="input-container">
																<input id="walk" class="radio-button" type="radio" name="radio" />
																<div class="radio-tile">
																	<div class="icon walk-icon">
							        	    					        <svg class="icon">
								    	    					          <use xlink:href="#theater"></use>
								    	    					      	</svg>
				        	    									</div>
																	<label for="walk" class="radio-tile-label">Entertainment</label>
																</div>
															</div>
														</div>
													</div>
													<!-- END Entertainment-->

													<!-- Agency -->
													<div class="col-sm-2">
						        	    		    	<div class="radio-tile-group">
						        	    		    		<div class="input-container">
																<input id="walk" class="radio-button" type="radio" name="radio" />
																<div class="radio-tile">
																	<div class="icon walk-icon">
							        	    					        <svg class="icon">
								    	    					          <use xlink:href="#factory"></use>
								    	    					      	</svg>
				        	    									</div>
																	<label for="walk" class="radio-tile-label">Agency</label>
																</div>
															</div>
														</div>
													</div>
													<!-- END Agency-->

													<!-- Organisation -->
													<div class="col-sm-2">
						        	    		    	<div class="radio-tile-group">
						        	    		    		<div class="input-container">
																<input id="walk" class="radio-button" type="radio" name="radio" />
																<div class="radio-tile">
																	<div class="icon walk-icon">
							        	    					        <svg class="icon">
							        	    					          <use xlink:href="#share"></use>
							        	    					      	</svg>
				        	    									</div>
																	<label for="walk" class="radio-tile-label">Organisation</label>
																</div>
															</div>
														</div>
													</div>
													<!-- END Organisation-->

													<!-- Artist -->
													<div class="col-sm-2">
						        	    		    	<div class="radio-tile-group">
						        	    		    		<div class="input-container">
																<input id="walk" class="radio-button" type="radio" name="radio" />
																<div class="radio-tile">
																	<div class="icon walk-icon">
							        	    					        <svg class="icon">
								    	    					          <use xlink:href="#stars"></use>
								    	    					      	</svg>
				        	    									</div>
																	<label for="walk" class="radio-tile-label">Artist</label>
																</div>
															</div>
														</div>
													</div>
													<!-- END Artist-->
												</div>
	      		                            </div>
	      		                            <div class="tab-pane" id="fanpage-details-1">
	      		                                
	      		                                <div class="row">
						        	    		    <div class="popup-8">
						        	    		    	<br>
						        	    		    	<br>
							        	    				<div class="col-sm-4 col-sm-offset-1">
							        	    					<select class="form-control" name="your_status">
		      		                                        		<option>--Please Select Subcategory--</option>
																	<option>1</option>
																	<option>2</option>
		      		                                        	</select>
							        	    				</div>
							        	    				<div class="col-sm-2">
							        	    				    <a href="#">www.yekbun.com</a>
							        	    				</div>
							        	    				<div class="col-sm-4">
							        	    				    <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="type your fanpage name">
							        	    				</div>
							        	    				<div class="col-sm-1">
							        	    				    <a href="#"><i class="flaticon-tick-inside-circle"></i></a>
							        	    				</div>

							        	    				<div class="col-sm-10 col-sm-offset-1">
							        	    					<br>
			      		                                		<div class="form-group">
																	<textarea class="form-control" rows="8" placeholder="Description"></textarea>
			      		                                		</div>
			      		                                	</div>
							        	    		</div>
	      		                                </div>
	      		                            </div>
	      		                            <div class="tab-pane" id="image-1">
	      		                                <div class="row">
	      		                                    <h5 class="info-text">Upload your image </h5>
		      		                                <div class="row">
		      		                                	<div class="col-sm-8 col-sm-offset-2">
		      		                                		<div class="well">
		      		                                			<input type="file" name="myImage2">
		      		                                		</div>
		      		                                	</div>
		      		                                	
		      		                                </div>
	      		                                </div>
	      		                            </div>
	      		                            <div class="tab-pane" id="fanpage-date-1">
	      		                                <h5 class="info-text"></h5>
	      		                                <br>
	      		                                <div class="row">
	      		                                    <div class="col-sm-5 col-sm-offset-1">
	      		                                    	<div class="form-group">
	      		                                        	<label>Owner Name</label>
	      		                                        	<input type="text" name="" class="form-control">
	      		                                    	</div>
	      		                                    </div>
	      		                                    <div class="col-sm-5">
	      		                                    	<div class="form-group">
	      		                                        	<label>Owner Lastname</label>
	      		                                        	<input type="text" name="" class="form-control">
	      		                                    	</div>
	      		                                    </div>
	      		                                    <div class="col-sm-5 col-sm-offset-1">
	      		                                    	<div class="form-group">
	      		                                        	<label>Email</label>
	      		                                        	<input type="email" name="" class="form-control">
	      		                                    	</div>
	      		                                    </div>
	      		                                    <div class="col-sm-5">
	      		                                    	<div class="form-group">
	      		                                        	<label>Confirm Email</label>
	      		                                        	<input type="email" name="" class="form-control">
	      		                                    	</div>
	      		                                    </div>

	      		                                    <div class="col-sm-5 col-sm-offset-1">
	      		                                    	<div class="form-group">
	      		                                        	<label>Country</label>
															<select class="form-control" name="your_status">
	      		                                        		<option>--Please Select--</option>
																<option>Single</option>
																<option>Married</option>
	      		                                        	</select>
	      		                                    	</div>
	      		                                    </div>
	      		                                    <div class="col-sm-5">
	      		                                    	<div class="form-group">
	      		                                        	<label>City</label>
	      		                                        	<select class="form-control" name="your_status">
	      		                                        		<option>--Please Select--</option>
																<option>Single</option>
																<option>Married</option>
	      		                                        	</select>
	      		                                    	</div>
	      		                                    </div>
	      		                                    <div class="col-sm-5 col-sm-offset-1">
	      		                                    	<div class="form-group">
	      		                                        	<label>Street</label>
	      		                                        	<input type="text" name="" class="form-control">
	      		                                    	</div>
	      		                                    </div>
	      		                                    <div class="col-sm-5">
	      		                                    	<div class="form-group">
	      		                                        	<label>House No.</label>
	      		                                        	<input type="text" name="" class="form-control">
	      		                                    	</div>
	      		                                    </div>
	      		                                    <div class="col-sm-5 col-sm-offset-1">
	      		                                    	<div class="row">
	      		                                    		<div class="col-sm-12">
	      		                                    			<label>Phone No.</label>
	      		                                    		</div>
	      		                                    	</div>
	      		                                    	<div class="row">
	      		                                    		<div class="col-sm-5" style="padding-right: 0;">
	      		                                    			<div class="form-group">
		      		                                    			<select class="form-control" name="your_status" style="border-radius: unset;border-right: none;">
			      		                                        		<option>--Code--</option>
																		<option>+48</option>
																		<option>+98</option>
																		<option>+99</option>
			      		                                        	</select>
			      		                                        </div>
	      		                                    		</div>
															<div class="col-sm-7" style="padding-left: 0;">
	      		                                    			<div class="form-group">
	      		                                    				<input type="text" name="" class="form-control col-sm-6" style="border-radius: unset;border-left: none;">
	      		                                    			</div>
	      		                                    		</div>
	      		                                    	</div>
	      		                                    </div>
	      		                                    <div class="col-sm-5">
	      		                                    	<div class="row">
	      		                                    		<div class="col-sm-12">
	      		                                    			<label>Phone No.</label>
	      		                                    		</div>
	      		                                    	</div>
	      		                                    	<div class="row">
	      		                                    		<div class="col-sm-5" style="padding-right: 0;">
	      		                                    			<div class="form-group">
		      		                                    			<select class="form-control" name="your_status" style="border-radius: unset;border-right: none;">
			      		                                        		<option>--Code--</option>
																		<option>+48</option>
																		<option>+98</option>
																		<option>+99</option>
			      		                                        	</select>
			      		                                        </div>
	      		                                    		</div>
															<div class="col-sm-7" style="padding-left: 0;">
	      		                                    			<div class="form-group">
	      		                                    				<input type="text" name="" class="form-control col-sm-6" style="border-radius: unset;border-left: none;">
	      		                                    			</div>
	      		                                    		</div>
	      		                                    	</div>
	      		                                    </div>
	      		                                </div>
	      		                            </div>
	      		                            
	      		                        </div>
	      		                        <div class="wizard-footer">
	      	                            	<div class="pull-right">
	      	                                    <input type='button' class='btn btn-next btn-fill btn-danger btn-wd' name='next' value='Next' />
	      	                                    <input type='button' class='btn btn-finish btn-fill btn-danger btn-wd' name='finish' value='Finish' />
	      									</div>

	      	                                <div class="pull-left">
	      	                                    <input type='button' class='btn btn-previous btn-default btn-wd' name='previous' value='Previous' />
	      	                                </div>
	      	                                <div class="clearfix"></div>
	      		                        </div>
		      		                </form>
		      		            </div>
		      		        </div> <!-- wizard container -->
		        	    </div><!-- modal-content -->
	        	  </div><!--  -->
	        	</div>
	        	<!-- END CREATE FAN PAGE MODAL -->
	



</template>
<script>
import BDexample2one from "./forBDexample2/BDexample2one.vue";

export default {
  components: {
    BDexample2one
  }
};
</script>
