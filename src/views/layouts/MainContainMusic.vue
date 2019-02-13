<style scoped>

#artistdynamiknav{
display:block !important;
}

</style>
<template>
		
     <!-- center side -->
                    <div class="col-xs-12 col-md-6 maincontentscroll" style="background: #fff">
					
					<!-- Start Tab pills -->

						<div class="tab-content">
						  <div id="Musicupload" class="tab-pane fade in active">
							
							
							<div class="owl-carousel owl-theme" id="marketcar2">
								
								
									<div class="owlitem">
									<div class="new-title">
										<h2>Artist</h2>
									</div>
								
									<div class="col-xs-12" style="margin: 0;padding: 0;margin-top: 25px; margin-bottom: 15px;text-align: center">
										
											<div class="artist-new" data-toggle="modal" data-target="#myModal" v-for="artist, index in  artists" v-bind:key="artist.id">
												<a href="#"> <img :src="getArtistImg(artist.artist_imag)" > </a>
												<h5> <a href="#"> {{artist.first_name}} {{artist.last_name}}</a> </h5>
											</div>
										
									
										
											
									</div>
								</div>
								
                                  
								
							</div>	
							
							  <ul class="pagination">
 
 <li v-bind:class="{disabled:!pagination.prev_link}" class="page-item"><a href="#" @click="showAllArtist(pagination.prev_link)" class="page-link">&lt;</a></li>

 <li class="page-item"><a href="#" @click="showAllArtist(pagination.next_link)" class="page-link">&gt;</a></li>

									</ul>
							
							
							<div class="bg-color" style=" background: #EEEEEE;width: 105%;overflow: hidden; display: block;height: 25px;margin-left: -15px;"></div>
							
							
							<div class="col-xs-12">
								<div class="section-title">
									<h2>New Uploads</h2>
								</div>
							
								<div class="music-list-one">
									<div style="position: relative;top: 10px;" class="btn-round play both ripple"></div>
						
									<li><a href="#">Yama Greatu</a></li>
									<span>4.56</span>
									<br>
									<li><a href="#">Harihara Sudhan,</a></li> 
									<li><a href="#">Santhosh Narayanan,</a></li>
									<li><a href="#">Arunraja Kamaraj</a></li>	
								</div>
								
                  <MainContainMusicTwo></MainContainMusicTwo>		
					
								<div class="music-list-one">
									<div style="position: relative;top: 10px;" class="btn-round play both ripple"></div>
									<li><a href="#">Chittamma</a></li>
									<span>4.52</span>
									<br>
									<li><a href="#">Ananthu,</a></li> 
									<li><a href="#">Shweta Mohan</a></li>
									 
								</div>
								
                          <MainContainMusicTwo></MainContainMusicTwo>
								
								<div class="music-list-one">
									<div style="position: relative;top: 10px;" class="btn-round play both ripple"></div>
									<li><a href="#">Raaye Naa Range Leela</a></li>
									<span>4.36</span>
									<br>
									<li><a href="#">Shankar Mahadevan,</a></li> 
									<li><a href="#">Pradeep Kumar,</a></li>
									<li><a href="#">Ananthu</a></li>
									  
								</div>
								
                      <MainContainMusicTwo></MainContainMusicTwo>
								
								<div class="music-list-one">
									<div style="position: relative;top: 10px;" class="btn-round play both ripple"></div>
									<li><a href="#">Nikkal Nikkal</a></li>
									<span>2.45</span>
									<br>
									<li><a href="#">Pranav Chaganty,</a></li> 
									<li><a href="#">Dopeadelicz,</a></li>
									<li><a href="#">Arunraja Kamaraj</a></li>
									  
								</div>
								
                                  <MainContainMusicTwo></MainContainMusicTwo>
								
								<div class="music-list-one">
									<div style="position: relative;top: 10px;" class="btn-round play both ripple"></div>
									<li><a href="#">Poradathaam</a></li>
									<span>3.28</span>
									<br>
									<li><a href="#">Pranav Chaganty,</a></li> 
									<li><a href="#">Dopeadelicz</a></li>
									 
								</div>
								
                      <MainContainMusicTwo></MainContainMusicTwo>

								
								<div class="music-list-one">
									<div style="position: relative;top: 10px;" class="btn-round play both ripple"></div>
									<li><a href="#">Nele Maa Hakku</a></li>
									<span>6.43</span>
									<br>
									<li><a href="#">Vijay Prakash,</a></li> 
									<li><a href="#">Ananthu</a></li>
									 
								</div>
								
                                  <MainContainMusicTwo></MainContainMusicTwo>
								
								<div class="music-list-one">
									<div style="position: relative;top: 10px;" class="btn-round play both ripple"></div>
									<li><a href="#">Maa Veedhula</a></li>
									<span>2.38</span>
									<br>
									<li><a href="#">Vijaynarain,</a></li> 
									<li><a href="#">Pranav Chaganty,</a></li>
									<li><a href="#">Dopeadelicz</a></li>
									  
								</div>
                                  
								  <MainContainMusicTwo></MainContainMusicTwo>

					
								<div class="music-list-one">
									<div style="position: relative;top: 10px;" class="btn-round play both ripple"></div>
									<li><a href="#">Onti Thala Raavana</a></li>
									<span>3.47</span>
									<br>
									<li><a href="#">Roshan Jamrock,</a></li> 
									<li><a href="#">Arunraja Kamaraj,</a></li>
									<li><a href="#">Ganesh Ram PS</a></li>
									  
								</div>
								
						     <MainContainMusicTwo></MainContainMusicTwo>
							 
								<div class="music-list-one">
									<div style="position: relative;top: 10px;" class="btn-round play both ripple"></div>
									<li><a href="#">Kaala (Telugu) Teaser Theme</a></li>
									<span>1.08</span>
									<br>
									<li><a href="#">Ganesh Ram PS</a></li>
									
								</div>
								
                        <MainContainMusicTwo></MainContainMusicTwo>


							</div>
							
						  </div>
						  
  
						<div id="newartist" class="tab-pane fade">
							
							
							<div class="owl-carousel owl-theme" id="marketcar">
								<div class="owlitem">
									<div class="new-title">
										
										
										<span @click="showAllArtistSearch('a')">A </span>
										<span @click="showAllArtistSearch('b')">B </span>
										<span @click="showAllArtistSearch('c')">C </span>
										<span @click="showAllArtistSearch('d')">D </span>
										<span @click="showAllArtistSearch('e')">E </span>
										<span @click="showAllArtistSearch('f')">F </span>
										<span @click="showAllArtistSearch('g')">G </span>
										<span @click="showAllArtistSearch('h')">H </span>
										<span @click="showAllArtistSearch('i')">I </span>
										<span @click="showAllArtistSearch('j')">J </span>
										<span @click="showAllArtistSearch('k')">K </span>
										<span @click="showAllArtistSearch('l')">L </span>
									</div>
								
									<div class="col-xs-12" style="margin: 0;padding: 0; margin-top: 25px; margin-bottom:15px;text-align: center">
										
											
										<div class="artist-new" data-toggle="modal" data-target="#myModal" v-for="artist, index in  artistst" >
												<a href="#"> <img :src="getArtistImg(artist.artist_imag)" > </a>
												<h5> <a href="#"> {{artist.first_name}} {{artist.last_name}}</a> </h5>
											</div>
									
										
										
											
											
										
									</div>
								</div>
								
								
								
							</div>	
							
							  <ul class="pagination">
 
 <li v-bind:class="{disabled:!pagination.prev_link}" class="page-item"><a href="#" @click="showAllArtist(pagination.prev_link)" class="page-link">&lt;</a></li>

 <li class="page-item"><a href="#" @click="showAllArtist(pagination.next_link)" class="page-link">&gt;</a></li>

									</ul>

						  </div>
						  
						  
						  <div class="tab-pane fade" v-for="categori, index in categories" v-bind:id="'musicCat' +categori.id">
									<div class="col-xs-12">
								<div class="section-title">
									<h2>New Uploads</h2>
								</div>
							
							<div  v-for="music, index in server">
							
							{{index + 1}} 
							{{music.id}}
							<div v-for="musicfil, index in musicFiles" v-if="musicfil.music_id == music.id">
								<div class="music-list-one" >
									<div style="position: relative;top: 10px;" class="btn-round play both ripple"></div>
						
									<li><a href="#">Yama Greatu</a></li>
									<span>4.56</span>
									<br>
									<li><a href="#">Harihara Sudhan,</a></li> 
									<li><a href="#">Santhosh Narayanan,</a></li>
									<li><a href="#">Arunraja Kamaraj</a></li>	

									

								</div>
		 <div class="music-likes-area">
	<ul>
	  <li>
		<a href="javascript:void(0)">
		   <div class="facebook-reaction">
			<span class="like-btn"> 
			<span class="fa like-btn-emo fa fa-thumbs-up"></span> 
			<span class="like-btn-text">2123</span> 
			</span>
		  </div>
		</a>
	  </li>
	  
	<li>
		<a href="javascript:void(0)" title="Send this to friends or post it to your timeline">
		  <span class="fa fa-indent"></span>
		  <span>112222</span>
		</a>
	  </li>
	  <li>
		<a href="javascript:void(0)" title="Send this to friends or post it to your timeline">
		  <span class="fa fa-headphones"></span>
		  <span>112222</span>
		</a>
	  </li>
	  <li>
		<a href="javascript:void(0)" title="Send this to friends or post it to your timeline">
		  <span class="fa fa-share-alt"></span>
		  <span>1231</span>
		</a>
	  </li>
	 <li>
		<a href="javascript:void(0)" title="Send this to friends or post it to your timeline">
		  <span class="fa fa-ellipsis-h"></span>
		</a>
	</li>
	</ul>
</div>		
</div>				
	</div>							
								
								
								<!--<div class="music-list-one">
									<div style="position: relative;top: 10px;" class="btn-round play both ripple"></div>
									<li><a href="#">Chittamma</a></li>
									<span>4.52</span>
									<br>
									<li><a href="#">Ananthu,</a></li> 
									<li><a href="#">Shweta Mohan</a></li>
									 
								</div>
							<MainContainMusicThree></MainContainMusicThree>
								
								
								<div class="music-list-one">
									<div style="position: relative;top: 10px;" class="btn-round play both ripple"></div>
									<li><a href="#">Raaye Naa Range Leela</a></li>
									<span>4.36</span>
									<br>
									<li><a href="#">Shankar Mahadevan,</a></li> 
									<li><a href="#">Pradeep Kumar,</a></li>
									<li><a href="#">Ananthu</a></li>
									  
								</div>
					
					<MainContainMusicThree></MainContainMusicThree>
							
								<div class="music-list-one">
									<div style="position: relative;top: 10px;" class="btn-round play both ripple"></div>
									<li><a href="#">Nikkal Nikkal</a></li>
									<span>2.45</span>
									<br>
									<li><a href="#">Pranav Chaganty,</a></li> 
									<li><a href="#">Dopeadelicz,</a></li>
									<li><a href="#">Arunraja Kamaraj</a></li>
									  
								</div>
                  <MainContainMusicThree></MainContainMusicThree>	
				  
								<div class="music-list-one">
									<div style="position: relative;top: 10px;" class="btn-round play both ripple"></div>
									<li><a href="#">Poradathaam</a></li>
									<span>3.28</span>
									<br>
									<li><a href="#">Pranav Chaganty,</a></li> 
									<li><a href="#">Dopeadelicz</a></li>
									 
								</div>
							
                            <MainContainMusicThree></MainContainMusicThree>
							
								<div class="music-list-one">
									<div style="position: relative;top: 10px;" class="btn-round play both ripple"></div>
									<li><a href="#">Nele Maa Hakku</a></li>
									<span>6.43</span>
									<br>
									<li><a href="#">Vijay Prakash,</a></li> 
									<li><a href="#">Ananthu</a></li>
									 
								</div>
								
							<MainContainMusicThree></MainContainMusicThree>
							
								<div class="music-list-one">
									<div style="position: relative;top: 10px;" class="btn-round play both ripple"></div>
									<li><a href="#">Maa Veedhula</a></li>
									<span>2.38</span>
									<br>
									<li><a href="#">Vijaynarain,</a></li> 
									<li><a href="#">Pranav Chaganty,</a></li>
									<li><a href="#">Dopeadelicz</a></li>
									  
								</div>
								
								<MainContainMusicThree></MainContainMusicThree>
								
								<div class="music-list-one">
									<div style="position: relative;top: 10px;" class="btn-round play both ripple"></div>
									<li><a href="#">Onti Thala Raavana</a></li>
									<span>3.47</span>
									<br>
									<li><a href="#">Roshan Jamrock,</a></li> 
									<li><a href="#">Arunraja Kamaraj,</a></li>
									<li><a href="#">Ganesh Ram PS</a></li>
									  
								</div>
								
               <MainContainMusicThree></MainContainMusicThree>
								
								<div class="music-list-one">
									<div style="position: relative;top: 10px;" class="btn-round play both ripple"></div>
									<li><a href="#">Kaala (Telugu) Teaser Theme</a></li>
									<span>1.08</span>
									<br>
									<li><a href="#">Ganesh Ram PS</a></li>
									
								</div>
								
                 <MainContainMusicThree></MainContainMusicThree>-->

							</div>
						  </div>
						  
						</div>
						<!-- End Tab pills -->

                    </div>
					


                    <!-- right side -->


</template>
<script>
import MainContainMusicOne from "./forMainContainMusic/MainContainMusicOne.vue";
import MainContainMusicTwo from "./forMainContainMusic/MainContainMusicTwo.vue";
import MainContainMusicThree from "./forMainContainMusic/MainContainMusicThree.vue";
import { serverBus } from '../../main'; 

export default {
  components: {
    MainContainMusicOne,
    MainContainMusicTwo,
    MainContainMusicThree
  },
  data() {
    return {
	 categories:[],
	 artists:[],
	 artistst:[],
	 musicFiles:[],
	 pagination:{},
	 searchArtist:'',
	 server:null
	
	};
  },
  watch: {},
   created() {

  serverBus.$on('serverSelectedmusics', (server) => {
   this.server = server;
  });
 },
  mounted() {
    //edd
	
	this.showAllMusicCatbukr();
	this.showAllArtist();
	this.showAllMusicFiles();
  },
  methods: {
  	getArtistImg(artist_imag){
		
		return BaseUrlF + "/files/ArtistProfil/" + artist_imag;
		
		},
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
  showAllArtist(page)
           {
              page = page || '/showAllArtistBukar';
                var vm = this
                 axios.get(page)
          .then(response => {
             vm.artists = response.data.data
             vm.artistst = response.data.data
            console.log(response.data.data)
			vm.pagination = {
			  current_page: response.data.current_page,
			  last_page: response.data.last_page,
			  from_page: response.data.from,
			  to_page: response.data.to,
			  total_page: response.data.total,
			  path_page: response.data.path+"?page=",
			  first_link: response.data.first_page_url,
			  last_link: response.data.last_page_url,
			   next_link: response.data.next_page_url,
			  prev_link: response.data.prev_page_url,
			 
			
			
			};
           
          })
          .catch(error => {
            console.log(error)
          })
           },///End
  
   showAllArtistSearch(letter){
  ///if(this.searchArtist.length > 0){
  
      var vm = this
                 axios.get(`/showAllArtistSearch?searchArtist=${letter}`)
          .then(response => {
		   console.log(response.data.data)
		  if(response.data.data.data != null){
             vm.artistst = response.data.data.data
			 console.log(response.data.data.data)
           }
			
			
			 
			//  serverBus.$emit('serverSelectedmusics', response.data.data.data);
			
           
          })
          .catch(error => {
            console.log(error)
          })
		  
		//  }
  },//////////	  
  showAllMusicFiles()
           {
                var vm = this
                 axios.get('/musicFilesBuker')
          .then(response => {
             vm.musicFiles = response.data.data
            console.log(response.data.data)
           
          })
          .catch(error => {
            console.log(error)
          })
           },///End,
  
  
  
  
  
  
  
  
  
  
  },
  mixins: []
};
</script>
