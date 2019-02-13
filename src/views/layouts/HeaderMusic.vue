 <style lang="css" >
  
   @import "nhp-popup/nhp-bootstrap.css";
    @import "css/style-en3.css";
    
	
    @import "css/side2.css";
    @import "css/style2.css";
    @import "css/style.responsive.css";
    @import "css/footer-music.css";
    @import "css/player-18.css";
    @import "css/volum-1.css";
    @import "css/emoji.css";
    
	
	</style>
	<style lang="css" scoped>	
.nav-tabs>li {
    float: none;
    display: inline-block;
}
.nav-tabs>li.active>a, .nav-tabs>li.active>a:focus, .nav-tabs>li.active>a:hover {
    color: #0c992d;
}
.nav-tabs>li>a {
    font-size: 14px;
    font-weight: 500;
    color: #49494b;
    transition: all ease-in-out .5s;
    padding: 10px 45px;
    margin-right: 0;
    border-radius: 0;
}
    .container-fluid {
    padding-right: 30px;
    padding-left: 30px;
    margin-right: auto;
    margin-left: auto;
}
.h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {
    margin: 0;
}
nav ol, ul {
    margin-top: 0;
    margin-bottom: -5px;
}
.nav-tabs>li>a {
    padding: 10px 25px !important;
}
ul.nav.nav-tabs {
    background-color: unset;
}
.nav-tabs {
    border-bottom: unset;
}


</style>
<template>
<div>

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
                                	<div class="col-xs-12  col-md-9" style="padding-bottom: 7px;">
				
				<ul class="nav nav-tabs">
				  <li class="active"><a data-toggle="tab" href="#Musicupload">Newst Upload</a></li>
				  <li><a data-toggle="tab" href="#newartist">Artist</a></li>
				  <li v-for="categori, index in categories"><a data-toggle="tab" :href="'#musicCat' +categori.id" @click="showMusicResCat(categori.id)">{{ categori.name }}</a></li>
				</ul>
	
			</div>
                                							                       
                                    
									    <div class="col-sm-6 col-xs-6 col-md-3 search-panel">
                            <input @keyup="showAllMusicSearch()" class="form-control search-bar col-xs-6" type="text" name="searchMusic"  v-model="searchMusic" placeholder="Search...">
                        </div>
                                                      
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
			
						
	<!-- Start Newst Upload Tab pills-->		
		
			
			
        </header>


</div>
</template>

<script>
import HeaderSecOne from "./forheader/HeaderSecOne.vue";
import HeaderSecTwo from "./forheader/HeaderSecTwo.vue";
import { serverBus } from '../../main'; 

export default {
  components: {
    HeaderSecOne,
    HeaderSecTwo
  },
  data() {
    return {
	 categories:[],
	 allmusics:[],
	 musics:[],
	 searchMusic:''
	
	};
  },
  watch: {},
  mounted() {
    //edd
	
	this.showAllMusicCatbukr();
  },
  methods: {
  showAllMusicCatbukr()
           {
                var vm = this
                 axios.get('/musicCategoriesBukar')
          .then(response => {
             vm.categories = response.data.data
            console.log(response.data.data)
           
          })
          .catch(error => {
            console.log(error)
          })
           },///End,
   showMusicResCat(id){
  console.log(id);
   var vm = this
                 axios.get(`/showAllMusicResCat/${id}`)
          .then(response => {
             vm.musics = response.data
			 console.log(response)
            console.log(response.data)
           serverBus.$emit('serverSelectedmusics', response.data);
          })
          .catch(error => {
            console.log(error)
          })
  
  },///End
  
  showAllMusicSearch(){
  if(this.searchMusic.length > 0){
   $('.nav-tabs li:nth-child(3) a').tab('show');
      var vm = this
                 axios.get(`/showAllMusicSearch?searchMusic=${this.searchMusic}`)
          .then(response => {
             vm.allmusics = response.data.data
           
			
			 console.log(response.data.data.data)
			  serverBus.$emit('serverSelectedmusics', response.data.data.data);
			
           
          })
          .catch(error => {
            console.log(error)
          })
		  
		  }else{
			 $('#forVotingupload').tab('show');
			}
  },//////////	  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  },
  mixins: []
};
</script>
