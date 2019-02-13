<style scoped>

@import url("http://weloveiconfonts.com/api/?family=iconicstroke ");
[class*="iconicstroke-"]:before {
  font-family: "IconicStroke", sans-serif;
}


a {
  text-decoration: none;
}

.container {
  position: relative;
  width: 400px;
  margin: 0 auto;
  border-radius: 5px;
  background: white;
  padding: 0 !important;
}


.controls {
  padding: 20px 20px 15px;
  font-size: 1.1rem;
  border-bottom: 1px solid #dbdee0;
}
.controls:before, .controls:after {
  content: "";
  display: table;
}
.controls:after {
  clear: both;
}
.controls a {
  color: #a3adb2;
}
.controls a:hover {
  color: #f17a61;
}

.mail {
  text-align: center;
  width: 100%;
  font-weight: 700;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
  color: #a3adb2;
}
.mail a.current {
  color: #6d7b82;
}
.mail a.current:hover {
  cursor: default;
}

.more {
  float: right;
  width: 50%;
  text-align: right;
  font-size: 2rem;
  line-height: 1;
}
.more a {
  display: inline-block;
}

.content {
  padding: 0 20px 20px;
  height: 200px;
  overflow: scroll;
  overflow-x: auto;
}

.itemList {
  list-style: none;
  margin: 0;
  padding: 0;
}
.itemList li {
  padding: 10px 0;
  border-bottom: 1px solid #dbdee0;
}
.itemList a {
  display: block;
  min-height: 45px;
  padding: 10px 0;
  color: #a3adb2;
  transition: 0.25s;
}
.itemList a h5 {
  width: 83.3333333333%;
  margin: 5px 0 0 60px;
  font-size: 1.3rem;
  font-weight: 400;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.itemList a h5 strong {
  display: block;
  color: #4a5458;
}
.itemList a:hover {
  opacity: 0.5;
}
.itemList a:before {
  content: "";
  display: block;
  float: left;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.itemList .user1:before {
  background-image: url("http://onwardstate.com/wp-content/uploads/2013/03/2645293-bryan-cranston-stars-as-walter-white-in-breaking-bad_super.jpg");
}
.itemList .user2:before {
  background-image: url("http://www.magnetmagazine.com/wp-content/uploads/2009/03/elliott-smile5002.jpg");
}

div#FriendRequestsbox {
    padding: 0;
}
#FriendRequestsbox .content {
    margin-top: 0 !important;
}
.controls a {
    display: inline-block;
}
.shopping-cart:after {
    left: 71%;
	}
	i.flaticon-users {
    font-size: 20px;
}
span.btn__badge {
    padding: 1px 5px;
	}
	

a:focus, a:hover {
    text-decoration: none;
}
.itemList a h5[data-v-083d0954] {
    margin-left: 17% !important;
}
</style>
<template>
<div>
 
<div id="FriendRequestsbox" class="shopping-cart" style="display: none;">
   <div class="container">
	<div class="controls">
		<div class="mail">
			 <i class="flaticon-users"></i><span class="btn__badge-yellow btn__badge">3</span>
		</div>
		
	</div>
	<div class="content">
		<ul class="itemList">
			<li><a href="#" class="user1"><h5><strong>Rohan Sulaiman</strong>I am the one who knocks and this is just to show that i mean it.</h5></a></li>
			<li><a href="#" class="user2"><h5><strong>Rohan Sulaiman</strong>Do you miss me, Miss Misery, like you say you do?</h5></a></li>
			<li><a href="#" class="user1"><h5><strong>Rohan Sulaiman</strong>I am the one who knocks and this is just to show that i mean it.</h5></a></li>
			<li><a href="#" class="user2"><h5><strong>Rohan Sulaimanh</strong>Do you miss me, Miss Misery, like you say you do?</h5></a></li>
			<li><a href="#" class="user1"><h5><strong>Rohan Sulaiman</strong>I am the one who knocks and this is just to show that i mean it.</h5></a></li>
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

 $("#myfriendRequests").on("click", function() {
    $('#notificationbox').css({'display':'none'});
    $('#shoppingChartbox').css({'display':'none'});
    $('#BookMarksbox').css({'display':'none'});
	$('#Electionsbox').css({'display':'none'});
    $('#Donationbox').css({'display':'none'});
    $('#Postsbox').css({'display':'none'});
    $('#Messagesbox').css({'display':'none'});
    $("#FriendRequestsbox").fadeToggle( "fast");
  });
  
		});
		
  
    //edd
  },
  methods: {
  
  } 
};
</script>
