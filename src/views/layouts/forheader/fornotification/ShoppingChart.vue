<style scoped>
.lighter-text {
    color: #e6ecfb;
}
</style>
<template>
<div>
 
<div id="shoppingChartbox" class="shopping-cart" style="display: none;">
    <div class="shopping-cart-header" >
     <i class="flaticon-shopping-cart"></i>
     <span class="btn__badge--green btn__badge">4</span>
     
    </div> <!--end shopping-cart-header -->

    <ul class="shopping-cart-items">
      <li class="clearfix">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item1.jpg" alt="item1" />
        <span class="item-name">Sony DSC-RX100M III</span>
        <span class="item-price">$849.99</span>
        <span class="item-quantity">Quantity: 01</span>
      </li>

      <li class="clearfix">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item2.jpg" alt="item1" />
        <span class="item-name">KS Automatic Mechanic...</span>
        <span class="item-price">$1,249.99</span>
        <span class="item-quantity">Quantity: 01</span>
      </li>

      <li class="clearfix">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cart-item3.jpg" alt="item1" />
        <span class="item-name">Kindle, 6" Glare-Free To...</span>
        <span class="item-price">$129.99</span>
        <span class="item-quantity">Quantity: 01</span>
      </li>
    </ul>

    <a href="#" class="button"><span class="lighter-text">Total:</span>
        <span class="main-color-text">$2,229.97</span></a>
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

 $("#myshoppingChart").on("click", function() {
    $('#FriendRequestsbox').css({'display':'none'});
    $('#notificationbox').css({'display':'none'});
    $('#BookMarksbox').css({'display':'none'});
	$('#Electionsbox').css({'display':'none'});
    $('#Donationbox').css({'display':'none'});
    $('#Postsbox').css({'display':'none'});
    $('#Messagesbox').css({'display':'none'});
    $("#shoppingChartbox").fadeToggle( "fast");
  });
  
		});
		
  
    //edd
  },
  methods: {
  
  } 
};
</script>
