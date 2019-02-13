<template>

                    <!-- center side -->
                    <div class="col-xs-12 col-md-9 maincontentscroll">
			
				<div class="tab-content">		
				
				<div id="Votingupload" class="tab-pane fade in active">
                        <!-- top news -->
                        <div class="col-xs-12" style="background:#fff">
                            <div class="title col-xs-12" >
 
                            </div>
                        </div>
                        <!-- top news -->
                        <div class="col-xs-12 " style="background-color: #fff;padding:0">
                            <div class="top-news">
                                <div class="">

                                 <figure class="snip1268 col-xs-12 col-md-4" v-for="lastvot, index in last6votingss">
                                        <div class="image">
                                            <img :src="getVotingImg(lastvot.voting_image)" alt="sq-sample4"/>


                                        </div>
                                        <figcaption>
										<h2>{{lastvot.voting_title}}</h2>
                                                <p v-html="voting_description(lastvot.voting_description)"></p>
                                           
                                            <div class="price">
                                                <button class=" btn-vote">Yes</button>
                                                <button class=" btn-vote">I don't Know</button>
                                                <button class=" btn-vote">No</button>
                                            </div>
                                        </figcaption>
                                    </figure>
									
                                  

                                </div>
                            </div>
                        </div>
                        <!--                         category name-->


                        <!-- top news -->
                        <div class="col-xs-12" style="background:#fff;margin-top:20px">
                            <div class="title item-yellow  col-xs-12" >
                                <div class="col-md-6 col-sm-6 col-xs-12">
                                    <h3><span class="emon">Expired Voting</span> </h3>
                                </div>

                            </div>
                            <div class="col-xs-12 " style="background-color: #fff;padding:0">
                                <div class="top-news">
                                    <div class="">

                                      <MainContainVotingOne></MainContainVotingOne>
										
                                       <MainContainVotingTwo></MainContainVotingTwo>
										
										
                                          <MainContainVotingTwo></MainContainVotingTwo>

                                      <MainContainVotingTwo></MainContainVotingTwo>

                                      <MainContainVotingTwo></MainContainVotingTwo>
									  
                                    </div>
                                </div>
                            </div>
                        </div>
						
						
						
						</div>
						
						
							<div v-for="categori, index in categories" v-bind:id="'votingCat' +categori.id" class="tab-pane fade">
					<div class="col-xs-12" style="background:#fff; padding: 25px; margin: 15px 0;">
						<div class="row">
						
					
						
							<figure class="snip1268 col-xs-12 col-md-4" v-for="votng, index in server">
                                            <div class="image">
                                                <img :src="getVotingImg(votng.voting_image)" alt="sq-sample4"/>

                                                <a href="#" class="add-to-cart">View</a>

                                            </div>
                                            <figcaption>
                                                <h2>{{votng.voting_title}}</h2>
                                                <p v-html="voting_description(votng.voting_description)"></p>

                                            </figcaption>
                                        </figure>
								</div>
					
						
						
						
					</div>
					</div>
					
					
					<div class="col-md-12 col-sm-12 col-xs-12 divider" style="margin: 15px 0;"></div>
					
					<div class="col-md-12 col-sm-12 col-xs-12 divider" style="margin: 15px 0;"></div>
					
						
				</div>
						
						
						
						
						
						
						
						
						</div>

                    </div>
					



</template>
<script>
import MainContainVotingOne from "./forMainContainVoting/MainContainVotingOne.vue";
import MainContainVotingTwo from "./forMainContainVoting/MainContainVotingTwo.vue";
import { serverBus } from '../../main'; 

export default {
  components: {
    MainContainVotingOne,
    MainContainVotingTwo
  },
  data() {
    return {
	 categories:[],
	 last6votingss:[],
	 votingexart:'',
	 server:null,
	
	};
  },
  created() {

  serverBus.$on('serverSelectedVotings', (server) => {
   this.server = server;
  });
 },
  watch: {
    votingexart(){
               // this.getSearchpost(),
              
           },
  
  },
  mounted() {
    //edd
	
	this.showAllVotingCatbukr();
	this.last6VotingBukar();
  },
  methods: {
   getVotingImg(voting_image){
		
		return BaseUrlF + "/files/VotingImage/" + voting_image;
		
		},////
  showAllVotingCatbukr()
           {
                var vm = this
                 axios.get('/votingCategoriesBukar')
          .then(response => {
             vm.categories = response.data.data
            console.log(response.data.data)
           
          })
          .catch(error => {
            console.log(error)
          })
           },///End,
voting_description(voting_description){
console.log(voting_description);
  return voting_description.substring(0, 50);
},///
last6VotingBukar(){
 var vm = this
                 axios.get('/last6votingBukar')
          .then(response => {
             vm.last6votingss = response.data
            console.log(response.data)
           
          })
          .catch(error => {
            console.log(error)
          })
},///End,




  
  },
  mixins: []
};
</script>
