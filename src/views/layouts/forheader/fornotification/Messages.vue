<style scoped>

</style>
<template>
<div>
 
<div id="Messagesbox" class="shopping-cart" style="display: none;">
    <div class="shopping-cart-header">
       
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

 $("#myMessages").on("click", function() {
    $('#notificationbox').css({'display':'none'});
    $('#shoppingChartbox').css({'display':'none'});
    $('#BookMarksbox').css({'display':'none'});
	$('#Electionsbox').css({'display':'none'});
    $('#Donationbox').css({'display':'none'});
    $('#Postsbox').css({'display':'none'});
    $('#FriendRequestsbox').css({'display':'none'});
    $("#Messagesbox").fadeToggle( "fast");
  });
  
		});
		
  
    //edd
  },
  methods: {
  
  } 
};
</script>
