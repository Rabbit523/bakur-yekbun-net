 <style lang="css" >
    @import "css/sharepopup/paper-wizard.css";
	@import "nhp-popup/nhp-bootstrap.css"; 
     
    @import "nhp-popup/nhp-color-style.css"; 
    @import "nhp-popup/css/nhp-music-style.css"; 
    @import "nhp-popup/nhp-style.css"; 
    @import "nhp-popup/nhp-responsive.css"; 
    
	
   
    @import "css/style-en3.css";
    @import "css/side2.css";
    @import "css/style2.css";
    @import "css/style.responsive.css";
    @import "css/footer-music.css";
    @import "css/player-18.css";
    @import "css/volum-1.css";
    @import "css/emoji.css";
    
	
	.items-bazzar .bazz {
    margin: 0;
}

.items-bazzar .bazz a img {
    height: auto !IMPORTANT;
}
.clearfix:after {
  content: "";
  display: table;
  clear: both;
}
.search-panel {
    float: right !important;
}
.search-bar {
    margin-top: 5px;
    margin-bottom: 5px;
}

ul.notifaction {
    margin-top: 10px;
}
	
	
/********** animation */	
	.pinkBg {
    background-color: #ed184f!important;
    background-image: linear-gradient(90deg, #fd5581, #fd8b55);
}
.intro-banner-vdo-play-btn{
    height:25px;
    width:25px;
    position:absolute;
    top:50%;
    left:50%;
    text-align:center;
    margin:-30px 0 0 -30px;
    border-radius:100px;
    z-index:1
}
.intro-banner-vdo-play-btn i{
    line-height:56px;
    font-size:30px
}
.intro-banner-vdo-play-btn .ripple{
    position:absolute;
    width:60px;
    height:60px;
    z-index:-1;
    left:50%;
    top:50%;
    opacity:0;
    margin: -30px 0 0 -30px;
    border-radius:100px;
    -webkit-animation:ripple 1.8s infinite;
    animation:ripple 1.8s infinite
}

@-webkit-keyframes ripple{
    0%{
        opacity:1;
        -webkit-transform:scale(0);
        transform:scale(0)
    }
    100%{
        opacity:0;
        -webkit-transform:scale(1);
        transform:scale(1)
    }
}
@keyframes ripple{
    0%{
        opacity:1;
        -webkit-transform:scale(0);
        transform:scale(0)
    }
    100%{
        opacity:0;
        -webkit-transform:scale(1);
        transform:scale(1)
    }
}
.intro-banner-vdo-play-btn .ripple:nth-child(2){
    animation-delay:.3s;
    -webkit-animation-delay:.3s
}
.intro-banner-vdo-play-btn .ripple:nth-child(3){
    animation-delay:.6s;
    -webkit-animation-delay:.6s
}

span.headerNumber {
    color: #fff;
    margin-top: -6px;
    margin-left: -4px;
    position: absolute;
}	
	
	.label {
    display: inline;
    padding: .2em .6em .3em;
    font-size: 75%;
    font-weight: 700;
    line-height: 1;
    color: #fff;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: .25em;
}
.rounded {
    -moz-border-radius: 50% !important;
    -webkit-border-radius: 50%;
    border-radius: 50% !important;
}
.label-danger {
    background-color: #E9573F;
}
.navbar-toolbar .navbar-right .dropdown > a .count {
    position: absolute;
    top: 9px;
    right: 6px;
    padding: 0.4em 0.6em;
}

ul.notifaction li span {
    position: absolute;
    padding: 4px 7px;
    /* background: red; */
    border-radius: 100%;
    color: #FFF;
    font-size: 14px;
    right: -17px;
    top: -14px;
}

.forprofile{
position: absolute;
    padding: 4px 7px !important;
    border-radius: 100%;
    color: #FFF !important;
    font-size: 14px !important;
    right: -17px !important;
    top: -14px !important;
}
span.rounded.count.label.label-danger.for.profile {
    background: red !important;
    padding: 2px 5px !important;
    font-size: 12px;
    right: -9px;
}

/* End Animation ******************/	
	</style>
	<style lang="css" scoped>
	
	nav ol, ul {
    margin-top: 0;
    margin-bottom: -5px;
}



	
	.logo h1 img {
    margin-top: 0px;
}


</style>
<template>


        <!-- Header -->
        <header>
            <section>
                <div class="container-fluid" style="margin-bottom:5px">
                    <div class="row">                    
                        <!-- logo -->
                        <div class="col-xs-6 col-md-2">
                            <div class="logo">
                                <h1> <a href="">  <img src="images/mainlogo.png"></a> </h1>
                            </div>

                        </div>

                        <!-- search -->
                        

                        <div class="col-xs-12 col-md-7">
      <HeaderSecOne></HeaderSecOne>  

                        </div>
						
						  <div class="col-xs-12 col-md-2">
      <nav>
<ul class="list-inline list-unstyle">
                                     
										
                                     
										
                                        <li><a href="#" class="intro-banner-vdo-play-btn pinkBg" target="_blank" style="    margin-top: -4px;">
<span class="headerNumber">4</span>
<span class="ripple pinkBg"></span>
<span class="ripple pinkBg"></span>
<span class="ripple pinkBg"></span>
</a></li>


<li><a href="#" class="" target="_blank" style=" margin-top: -7px; margin-left: 100px;">
<div class="heart_img"><img src="images/images_heart.png" alt="heaert"></div>

</a></li>
									
										</ul>  
                            </nav> 
							
                        </div>
						
						<div class="col-xs-6 col-md-1">
						  <ul class="notifaction">
						    <li class="profile">
                                    <a class="showside" href="javascript:;">
                                        <h5>
                                            <img src="images/news/rohan.png" alt=""> 
                                        </h5>  
										<span class="rounded count label label-danger for profile">4</span>
                                    </a>
                                </li>
								
                            </ul>
						
						</div>
						
						
                    </div>
                </div>
            </section>

            <!-- Menubar -->
            <section id="menubar">
                <div class="container-fluid">
                    <div class="text-center">
                        <div class="row">                    
                            <!-- logo -->

                            <div class="col-xs-12  col-md-12">
        <HeaderSecTwo></HeaderSecTwo>
                              
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </header>



</template>

<script>
import HeaderSecOne from "./forheader/HeaderSecOne.vue";
import HeaderSecTwo from "./forheader/HeaderSecTwo.vue";

export default {
  components: {
    HeaderSecOne,
    HeaderSecTwo
  }
};
</script>
