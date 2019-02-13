<template>


<!-- popup-content -->
	        	<div class="modal fade bd-example-modal-lg-main-1" style="display: none;">
	        	  <div class="modal-dialog modal-lg container" style="width: 900px">
		        	    <div class="modal-content">
	      		        	<!-- Wizard container -->
		      		        <div class="wizard-container">
		      		            <div class="card wizard-card" data-color="red" id="wizard">
		      		                <form action="#" method="">
	      		                    	<div class="wizard-header">
	      		                    	  <h3 class="wizard-title">Add Advertisment</h3>
	      		                    	  <p class="category"></p>
	      		                    	</div>
	      								<div class="wizard-navigation">
	      									<div class="progress-with-circle">
	      									    <div class="progress-bar" role="progressbar" aria-valuenow="1" aria-valuemin="1" aria-valuemax="4" style="width: 15%;"></div>
	      									</div>
                                                 <Bdexample1One></Bdexample1One>
	      								</div>
											      		                        <div class="tab-content">
	      		                            <div class="tab-pane" id="item-1">
	      		                            	<div class="row">
	      		                                	<div class="col-sm-12">
	      		                                    	<h5 class="info-text"></h5>
	      		                                    	<br>
	      		                                    	<br>
	      		                            		</div>
	      		                                

	      		                                	<div class="col-sm-6 col-sm-offset-3">
	      		                                		<br>
	      		                                    	<div class="form-group">
	      		                                        	<label>Category</label>
	      		                                        	<select class="form-control" name="your_date">
	      		                                        		<option>--Please Select Category--</option>
																<option>1</option>
																<option>2</option>
	      		                                        	</select>
	      		                                    	</div>
	      		                                    </div>
	      		                                  
	      		                              	</div>
	      		                            </div>
	      		                            <div class="tab-pane" id="desc-1">
	      		                                <h5 class="info-text"></h5>
		      		                                <br>
	  		                                    	<br>
	      		                                <div class="row">
	      		                                	<div class="col-sm-10 col-sm-offset-1">
	      		                                		<div class="form-group">
	      		                                        	<label>Title</label>
															<input type="text" class="form-control" name="title" placeholder="Title" >
	      		                                		</div>
	      		                                	</div>
	      		                                	<div class="col-sm-10 col-sm-offset-1">
	      		                                		<div class="form-group">
	      		                                        	<label>Description</label>
															<textarea class="form-control" rows="8" placeholder="Description"></textarea>
	      		                                		</div>
	      		                                	</div>
	      		                                </div>
	      		                            </div>
	      		                            <div class="tab-pane" id="images-1">
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
	      		                            <div class="tab-pane" id="price-1">
	      		                                <h5 class="info-text"></h5>
	      		                                <br>
	      		                                <br>
	      		                                <div class="row">
	      		                                    <div class="col-sm-5 col-sm-offset-1">
	      		                                    	<div class="form-group">
	      		                                        	<label>Condition</label>
	      		                                        	<select class="form-control" name="condition">
	      		                                        		<option>--Please Select--</option>
																<option>New</option>
																<option>Like New</option>
																<option>Broken</option>
																<option>None</option>
	      		                                        	</select>
	      		                                    	</div>
	      		                                    </div>
	      		                                    <div class="col-sm-5">
	      		                                    	<div class="form-group">
	      		                                        	<label>Warrant</label>
	      		                                        	<select class="form-control" name="warranty">
	      		                                        		<option>--Please Select--</option>
	      		                                        		<option>Yes</option>
																<option>No</option>
																<option>None</option>
															</select>
	      		                                    	</div>
	      		                                    </div>
	      		                                    <div class="col-sm-5 col-sm-offset-1">
	      		                                    	<div class="form-group">
	      		                                        	<label>Invoice</label>
	      		                                        	<select class="form-control" name="invoice">
	      		                                        		<option>--Please Select--</option>
																<option>Yes</option>
																<option>No</option>
																<option>None</option>
	      		                                        	</select>
	      		                                    	</div>
	      		                                    </div>
	      		                                    <div class="col-sm-5">
	      		                                    	<div class="form-group">
	      		                                        	<label>Price Type</label>
	      		                                        	<select class="form-control" name="price_type">
	      		                                        		<option>--Please Select--</option>
																<option>Fix</option>
																<option>Agreement</option>
	      		                                        	</select>
	      		                                    	</div>
	      		                                    </div>

	      		                                    <div class="col-sm-5 col-sm-offset-1">
	      		                                    	<div class="form-group">
	      		                                        	<label>Currency</label>
	      		                                        	<select class="form-control" name="currenct">
	      		                                        		<option>--Please Select--</option>
																<option>$</option>
																<option>€</option>
	      		                                        	</select>
															
	      		                                    	</div>
	      		                                    </div>
	      		                                    <div class="col-sm-5">
	      		                                    	<div class="form-group">
	      		                                        	<label>Price</label>
	      		                                        	<input type="text" class="form-control" name="price" id="price" placeholder="0.00" >
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
	        	<!-- End Item Bazzar Modal -->
	


</template>
<script>
import Bdexample1One from "./forBdexample1/Bdexample1One.vue";

export default {
  components: {
    Bdexample1One
  }
};
</script>
