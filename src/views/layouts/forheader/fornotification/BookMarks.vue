<style scoped>
div#BookMarksbox {
    padding: 0;
    padding-top: 20px;
}
.activepanel-dialog {
    height: 250px;
    overflow: scroll;
    overflow-x: hidden;;
}
</style>
<template>
<div>
 
<div id="BookMarksbox" class="shopping-cart" style="display: none;">
    <div class="shopping-cart-header">
      <i class="flaticon-shapes"></i>
      <span class="btn__badge-yellow btn__badge">2</span>
      <div class="shopping-cart-total">
       
      </div>
    </div> <!--end shopping-cart-header -->

     <div class="activepanel-dialog">
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
  </div> <!--end shopping-cart -->	


   
 
</div>
</template>
<script>


export default {
  components: {
   
  },
  data() {
    return {
	
	};
  },
  watch: {},
  mounted() {
  
$(document).ready(function () {

 $("#mybookMarks").on("click", function() {
 $('#notificationbox').css({'display':'none'});
    $('#shoppingChartbox').css({'display':'none'});
    $('#FriendRequestsbox').css({'display':'none'});
	$('#Electionsbox').css({'display':'none'});
    $('#Donationbox').css({'display':'none'});
    $('#Postsbox').css({'display':'none'});
    $('#Messagesbox').css({'display':'none'});
    $("#BookMarksbox").fadeToggle( "fast");
  });
  
		});
		
  
    //edd
  },
  methods: {
  
  } 
};
</script>
