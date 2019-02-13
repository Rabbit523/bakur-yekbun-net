<style scoped>
	div#notificationbox {
    padding: 0;
    padding-top: 20px;
}
.activepanel-dialog {
    height: 350px;
    overflow: scroll;
    overflow-x: auto;
}
</style>
<template>
<div>
 
<div id="notificationbox" class="shopping-cart" style="display: none;">
    <div class="shopping-cart-header">
	 <i class="flaticon-alarm"></i>
     <span class="btn__badge--green btn__badge">3</span>
     
      <div class="shopping-cart-total">
        
      </div>
    </div> <!--end shopping-cart-header -->

    <div class="activepanel-dialog">
                       
                        <div class="notifaction-listing border-top">
                            <ul class="list-unstyled">
                              
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

 $("#mynotification").on("click", function() {
  $('#FriendRequestsbox').css({'display':'none'});
    $('#shoppingChartbox').css({'display':'none'});
    $('#BookMarksbox').css({'display':'none'});
    $('#Electionsbox').css({'display':'none'});
    $('#Donationbox').css({'display':'none'});
    $('#Postsbox').css({'display':'none'});
    $('#Messagesbox').css({'display':'none'});
    $("#notificationbox").fadeToggle( "fast");
  });
  
		});
		
  
    //edd
  },
  methods: {
  
  } 
};
</script>
