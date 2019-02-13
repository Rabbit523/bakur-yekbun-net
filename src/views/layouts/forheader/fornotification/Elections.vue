<style scoped>
* {
  -webkit-box-sizing: border-box;
  /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box;
  /* Firefox, other Gecko */
  box-sizing: border-box;
  /* Opera/IE 8+ */
}


#tabs {
  margin: 1em auto;
  width: 350px;
}
#tabs ul {
  margin: 0;
  padding: 0;
  height: 80px;
  -webkit-column-count: 3;
  -moz-column-count: 3;
  column-count: 3;
  -webkit-column-gap: 0;
  -moz-column-gap: 0;
  column-gap: 0;
}
#tabs ul::after {
  clear: both;
  content: "";
  display: table;
}
#tabs ul li {
  display: block;
  width: 100%;
  height: 100%;
  background: #f4f4f3;
  border-bottom: 1px solid #e5e5e2;
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 400;
  font-size: 1.2em;
  letter-spacing: 1px;
  text-align: center;
}
#tabs ul li:first-child {
  -webkit-border-top-left-radius: 3px;
  -moz-border-radius-topleft: 3px;
  border-top-left-radius: 3px;
  border-right: 1px solid #e5e5e2;
}
#tabs ul li:last-child {
  -webkit-border-top-right-radius: 3px;
  -moz-border-radius-topright: 3px;
  border-top-right-radius: 3px;
  border-left: 1px solid #e5e5e2;
}
#tabs ul li a {
  display: block;
  padding: 1em;
  cursor: pointer;
  outline: 0;
  border: none;
  font-size: 0.85em;
  color: #6a6a6a;
  text-decoration: none;
  text-transform: uppercase;
}
#tabs ul li span {
  display: block;
  margin-bottom: 0.75em;
}
#tabs ul .ui-tabs-active {
  background: #fff;
  border-bottom: none;
}
#tabs ul .ui-tabs-active a {
  color: #000;
}
#tabs ul .ui-tabs-active span {
  color: #609c09;
}
#tabs h3, #tabs h4 {
  font-family: 'Josefin Sans', sans-serif;
  text-transform: uppercase;
}
#tabs h3 {
  margin: 0.5em 0;
  border-bottom: 1px solid rgba(126, 149, 180, 0.5);
  padding-bottom: 0.05em;
  font-size: 2em;
  color: #f38500;
  font-weight: 300;
}
#tabs h4 {
  margin: 0.25em 0;
  font-size: 1em;
  color: #000;
  font-weight: 700;
}
#tabs .tagline {
  display: block;
  margin-top: .5em;
  font-family: 'Josefin Sans', sans-serif;
  font-size: 1.2em;
  color: #aa7786;
  text-transform: lowercase;
}

.tabs-content {
  background: #fff;
}

.tabs-content article p {
  font-family: 'Open Sans', sans-serif;
  line-height: 24px;
}
.tabs-content article .readmore {
  display: block;
  margin-top: 1.5em;
  padding-top: 0.25em;
  border-top: 1px solid rgba(126, 149, 180, 0.5);
  font-family: 'Josefin Sans', sans-serif;
  font-size: 1.2em;
}
.tabs-content article .readmore::after {
  clear: both;
  content: "";
  display: table;
}
.tabs-content article .readmore a {
  display: block;
  
  float: right;
  color: #aa7786;
  text-decoration: none;
}
.tabs-content article .readmore a:hover {
  color: #925c6c;
}
.tabs-content article .readmore span {
  padding-left: 1em;
  vertical-align: middle;
}
.tabs-content article img {
  max-width: 100%;
  height: auto;
  vertical-align: bottom;
}
.shopping-cart:after {
    left: 73%;
	}
</style>
<template>
<div>
 
<div id="Electionsbox" class="shopping-cart" style="display: none;">
     <div id='tabs'>
  
  <section class='tabs-content'>
    <article id='tabs-1'>
      <h3>Hot Deals</h3>
      <span class='tagline'>Upcoming Sales</span>
      <h4>Building a Winter Wardrobe</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, facere aliquam accusantium, explicabo natus harum incidunt omnis, nemo quidem blanditiis voluptatibus placeat! Iure nulla obcaecati necessitatibus neque recusandae excepturi aliquid.</p>
      <!-- Image by Ian Muttoo [CC-BY-SA-2.0 (http://creativecommons.org/licenses/by-sa/2.0)], via Wikimedia Commons, http://commons.wikimedia.org/wiki/File%3AShoppers_on_Dundas%2C_near_Yonge.jpg -->
      <img alt='Shopping' src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/203277/shopping.png'>
      <div class='readmore'>
        <a href='#'>Read more<span class='fa fa-chevron-right'></span></a>
      </div>
    </article>
   
   
  </section>
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

 $("#myElections").on("click", function() {
    $('#notificationbox').css({'display':'none'});
    $('#shoppingChartbox').css({'display':'none'});
    $('#BookMarksbox').css({'display':'none'});
	$('#FriendRequestsbox').css({'display':'none'});
    $('#Donationbox').css({'display':'none'});
    $('#Postsbox').css({'display':'none'});
    $('#Messagesbox').css({'display':'none'});
    $("#Electionsbox").fadeToggle( "fast");
  });
  
		});
		
   $(function() {
    $( "#tabs" ).tabs();
});
    //edd
  },
  methods: {
  
  } 
};
</script>
