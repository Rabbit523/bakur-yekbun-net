<style>
.bd-example-modal-lg-main-3 .wrap {
  height: 100%;
}
select > option {
  color: #666;
}
select {
  height: 24px;
  font-size: 15px;
  font-weight: bold;
  color: #444;
  background: #fcfcfc;
  border: 1px solid #a6a6a6;
  border-radius: 3px;
  margin: 0;
  outline: none;
  cursor: pointer;
}
</style>

<template>


	<!-- Create Blog -->
	        	<!-- popup-content -->
	        	<div class="modal fade bd-example-modal-lg-main-3" style="display: none;">
	        	  <div class="modal-dialog modal-lg container" style="width:900px">
		        	    <div class="modal-content">
	      		        	<!-- Wizard container -->
		      		        <div class="wizard-container">
		      		            <div class="card wizard-card" data-color="red" id="wizard">
		      		                <form action="#" method="">
	      		                    	<div class="wizard-header">
	      		                    	  <h3 class="wizard-title">Create a Blog</h3>
	      		                    	  <p class="category">This information will let us know more about your blog.</p>
	      		                    	</div>
	      								<div class="wizard-navigation">
	      									<div class="progress-with-circle">
	      									    <div class="progress-bar" role="progressbar" aria-valuenow="1" aria-valuemin="1" aria-valuemax="4" style="width: 15%;"></div>
	      									</div>
                                                <Bdexample3One></Bdexample3One>
	      								</div>
	      		                        <div class="tab-content">
	      		                            <div class="tab-pane" id="blog_category">
	      		                            	<div class="row">
	      		                                	<div class="col-sm-12">
	      		                                    	<h5 class="info-text"></h5>
	      		                                    	<br>
	      		                            		</div>
	      		                                	<div class="col-sm-10 col-sm-offset-1">
	      		                                    	<div class="form-group">
	      		           									<label>Select Fanpage</label><br>
	      		                                            <select name="blog_category" class="form-control">
	      		                                                <option disabled="" selected="">- select category -</option>
	      		                                                <option value="1"> 1 </option>
	      		                                                <option value="2"> 2 </option>
	      		                                                <option value="3"> 3 </option>
	      		                                            </select>
	      		                                    	</div>
	      		                                	</div>
	      		                            	</div>
	      		                            </div>
	      		                            <div class="tab-pane" id="blog_desc">
	      		                                <div class="row">
	      		                                	<div class="col-sm-12">
	      		                                    	<h5 class="info-text"></h5>
	      		                                    	<br>
	      		                            		</div>
	      		                                	<div class="col-sm-10 col-sm-offset-1">
	      		                                    	<div class="form-group">
	      		           									<label>Title</label><br>
	      		                                            <input type="text" name="" class="form-control" placeholder="Title">
	      		                                    	</div>
	      		                                    	<div class="form-group">
	      		                                    		<label>Description</label>

	      		                                    		<div class="wrap">
															   <div class="toolbar">
															      <button id="bold" title="Bold (Ctrl+B)"><i class="fa fa-bold"></i></button>
															      <button id="italic" title="Italic (Ctrl+I)"><i class="fa fa-italic"></i></button>
															      <button id="underline" title="Underline (Ctrl+U)"><i class="fa fa-underline"></i></button>
															      <select name="fonts" id="fonts">
															         <option value="Arial" selected>Arial</option>
															         <option value="Georgia">Georgia</option>
															         <option value="Tahoma">Tahoma</option>
															         <option value="Times New Roman">Times New Roman</option>
															         <option value="Verdana">Verdana</option>
															         <option value="Impact">Impact</option>
															         <option value="Courier New">Courier New</option>
															      </select>
															      <select name="size" id="size">
															         <option value="8">8</option>
															         <option value="10">10</option>
															         <option value="12">12</option>
															         <option value="14">14</option>
															         <option value="16" selected>16</option>
															         <option value="18">18</option>
															         <option value="20">20</option>
															         <option value="22">22</option>
															         <option value="24">24</option>
															         <option value="26">26</option>
															      </select>
															      <input type="color" id="color" />
															      <button id="align-left" title="Left"><i class="fa fa-align-left"></i></button>
															      <button id="align-center" title="Center"><i class="fa fa-align-center"></i></button>
															      <button id="align-right" title="Right"><i class="fa fa-align-right"></i></button>
															      <button id="list-ul" title="Unordered List"><i class="fa fa-list-ul"></i></button>
															      <button id="list-ol" title="Ordered List"><i class="fa fa-list-ol"></i></button>
															   </div>
															   <div class="editor" contenteditable></div>
															</div>
	      		                                    	</div>
	      		                                	</div>
	      		                            	</div>
	      		                            </div>
	      		                            <div class="tab-pane" id="blog_details">
	      		                                <h5 class="info-text"></h5>
	      		                                <br>
	      		                                <div class="row">
	      		                                    <div class="col-sm-5 col-sm-offset-1">
	      		                                    	<div class="form-group">
	      		                                        	<label>Select User Type</label>
	      		                                        	<select class="form-control" name="user_type">
	      		                                        		<option>--Please Select--</option>
	      		                                        		<option>All user</option>
																<option>Follower only</option>
																<option>Memeber All</option>
	      		                                        	</select>
	      		                                    	</div>
	      		                                    </div>
	      		                                    <div class="col-sm-5">
	      		                                    	<div class="form-group">
	      		                                        	<label>Voice Comments</label>
	      		                                        	<select class="form-control" name="your_clan">
	      		                                        		<option>--Please Select--</option>
																<option>Yes</option>
																<option>No</option>
	      		                                        	</select>
	      		                                    	</div>
	      		                                    </div>

	      		                                    <div class="col-sm-5 col-sm-offset-1">
	      		                                    	<div class="form-group">
	      		                                        	<label>Start</label>
															<input type="date" class="form-control" name="" id="startdate" placeholder="mm/dd/yyyy" >
	      		                                    	</div>
	      		                                    </div>
	      		                                    <div class="col-sm-5">
	      		                                    	<div class="form-group">
	      		                                        	<label>Allow Comments</label>
	      		                                        	<select class="form-control" name="your_status">
	      		                                        		<option>--Please Select--</option>
																<option>Yes</option>
																<option>No</option>
	      		                                        	</select>
	      		                                    	</div>
	      		                                    </div>
	      		                                </div>
	      		                            </div>
	      		                            <div class="tab-pane" id="description">
	      		                                <div class="row">
	      		                                    <h5 class="info-text"></h5>
	      		                                    <div class="col-sm-10 col-sm-offset-1">
	      		                                        <div class="form-group">
	      		                                            <label>Tell us about you</label>
	      		                                            <textarea class="form-control" placeholder="" rows="9"></textarea>
    														<label class='checkbox'>
															    <input type='checkbox'>
															    <span class='indicator'></span>
															    Accept Policy and Terms
														  	</label>
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
	        	<!-- End Create Blog Pop Up -->

		


</template>
<script>
import Bdexample3One from "./forBdexample3/Bdexample3One.vue";

export default {
  components: {
    Bdexample3One
  }
};
</script>
