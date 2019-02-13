<template>

  
                    <!-- center side -->
                    <div class="col-xs-12 col-md-9 maincontentscroll">
				
                        <!-- top news -->
						<div v-for="categori, index in categories" v-bind:id="'advertismentsCat' +categori.id" class="tab-pane fade">
						 <!-- top news -->
                        <div class="col-xs-12 " style="padding:0; background: #fff">
                            <div class="top-news">
                                <div class="">

                                    <figure class="snip1268 col-xs-12 col-md-4" v-for="advatisment, index in server">
										<div class="snip12" style="background: #fff; padding: 10px">
											<div class="image">
												<img v-bind:src="BaseUrlF+'/storage/images/ads/'+advatisment.image" alt="sq-sample4"/>
												<div class="icons">
													<a href="#"><i class="fa fa-star"></i></a>
													<a href="#"> <i class="fa fa-share"></i></a>
												</div>
												<a href="#" class="add-to-cart">View</a>
											</div>
											<figcaption>
												<h2>{{advatisment.title}}</h2>
												<p v-html="showText(advatisment.description)"></p>
												<div class="price">{{advatisment.price}} </div>
											</figcaption>
										</div>
                                    </figure>
                                    <!--<figure class="snip1268 col-xs-12 col-md-4 ">
										<div class="snip12" style="background: #fff; padding: 10px">
											<div class="image">
												<img src="images/advertisement/post-2.jpg" alt="sq-sample4"/>
												<div class="icons">
													<a href="#"><i class="fa fa-star"></i></a>
													<a href="#"> <i class="fa fa-share"></i></a>
												</div>
												<a href="#" class="add-to-cart">View</a>
											</div>
											<figcaption>
												<h2>Denim Shirt</h2>
												<p>My family is dysfunctional and my parents won't empower me.</p>
												<div class="price">$65.00 </div>
											</figcaption>
										</div>
                                    </figure>
                                    <figure class="snip1268 col-xs-12 col-md-4 ">
										<div class="snip12" style="background: #fff; padding: 10px">
											<div class="image">
												<img src="images/advertisement/post-3.jpg" alt="sq-sample4"/>
												<div class="icons">
													<a href="#"><i class="fa fa-star"></i></a>
													<a href="#"> <i class="fa fa-share"></i></a>
												</div>
												<a href="#" class="add-to-cart">View</a>
											</div>
											<figcaption>
												<h2>Denim Shirt</h2>
												<p>My family is dysfunctional and my parents won't empower me. </p>
												<div class="price">$65.00 </div>
											</figcaption>
										</div>	
                                    </figure>
                                    <figure class="snip1268 col-xs-12 col-md-4 ">
										<div class="snip12" style="background: #fff; padding: 10px">
											<div class="image">
												<img src="images/advertisement/post-4.jpg" alt="sq-sample4"/>
												<div class="icons">
													<a href="#"><i class="fa fa-star"></i></a>
													<a href="#"> <i class="fa fa-share"></i></a>
												</div>
												<a href="#" class="add-to-cart">View</a>
											</div>
											<figcaption>
												<h2>Denim Shirt</h2>
												<p>My family is dysfunctional and my parents won't empower me.</p>
												<div class="price">$65.00 </div>
											</figcaption>
										</div>	
                                    </figure>
                                    <figure class="snip1268 col-xs-12 col-md-4 ">
										<div class="snip12" style="background: #fff; padding: 10px">
											<div class="image">
												<img src="images/advertisement/post-5.jpg" alt="sq-sample4"/>
												<div class="icons">
													<a href="#"><i class="fa fa-star"></i></a>
													<a href="#"> <i class="fa fa-share"></i></a>
												</div>
												<a href="#" class="add-to-cart">View</a>
											</div>
											<figcaption>
												<h2>Denim Shirt</h2>
												<p>My family is dysfunctional and my parents won't empower me.</p>
												<div class="price">$65.00 </div>
											</figcaption>
										</div>	
                                    </figure>
                                    <figure class="snip1268 col-xs-12 col-md-4">
										<div class="snip12" style="background: #fff; padding: 10px">
											<div class="image">
												<img src="images/advertisement/post-6.jpg" alt="sq-sample4"/>
												<div class="icons">
													<a href="#"><i class="fa fa-star"></i></a>
													<a href="#"> <i class="fa fa-share"></i></a>
												</div>
												<a href="#" class="add-to-cart">View</a>
											</div>
											<figcaption>
												<h2>Denim Shirt</h2>
												<p>My family is dysfunctional and my parents won't empower me.</p>
												<div class="price">$65.00 </div>
											</figcaption>
										</div>	
                                    </figure>
									
									                                    <figure class="snip1268 col-xs-12 col-md-4" >
										<div class="snip12" style="background: #fff; padding: 10px">
											<div class="image">
												<img src="images/advertisement/post-1.jpg" alt="sq-sample4"/>
												<div class="icons">
													<a href="#"><i class="fa fa-star"></i></a>
													<a href="#"> <i class="fa fa-share"></i></a>
												</div>
												<a href="#" class="add-to-cart">View</a>
											</div>
											<figcaption>
												<h2>Denim Shirt</h2>
												<p>My family is dysfunctional and my parents won't empower me.</p>
												<div class="price">$65.00 </div>
											</figcaption>
										</div>
                                    </figure>
                                    <figure class="snip1268 col-xs-12 col-md-4 ">
										<div class="snip12" style="background: #fff; padding: 10px">
											<div class="image">
												<img src="images/advertisement/post-2.jpg" alt="sq-sample4"/>
												<div class="icons">
													<a href="#"><i class="fa fa-star"></i></a>
													<a href="#"> <i class="fa fa-share"></i></a>
												</div>
												<a href="#" class="add-to-cart">View</a>
											</div>
											<figcaption>
												<h2>Denim Shirt</h2>
												<p>My family is dysfunctional and my parents won't empower me.</p>
												<div class="price">$65.00 </div>
											</figcaption>
										</div>
                                    </figure>
                                    <figure class="snip1268 col-xs-12 col-md-4 ">
										<div class="snip12" style="background: #fff; padding: 10px">
											<div class="image">
												<img src="images/advertisement/post-3.jpg" alt="sq-sample4"/>
												<div class="icons">
													<a href="#"><i class="fa fa-star"></i></a>
													<a href="#"> <i class="fa fa-share"></i></a>
												</div>
												<a href="#" class="add-to-cart">View</a>
											</div>
											<figcaption>
												<h2>Denim Shirt</h2>
												<p>My family is dysfunctional and my parents won't empower me. </p>
												<div class="price">$65.00 </div>
											</figcaption>
										</div>	
                                    </figure>-->

                                </div>
                            </div>
                        </div>
                        <!--                         category name-->
          </div>
                        <!-- top news -->

                    </div>
					<!-- End center Side -->
					
					

</template>
<script>
import MainContainVideoOne from "./forMainContainVideo/MainContainVideoOne.vue";
import { serverBus } from '../../main';

export default {
  components: {
    MainContainVideoOne
  },
  data() {
    return {
	 categories:[],
	
	
	};
  },
   created() {

  serverBus.$on('serverSelectedAdvertisment', (server) => {
   this.server = server;
  });
 },
  watch: {},
  mounted() {
    //edd
	
	this.showAllAdvertismentCatbukr();
  },
  methods: {
  showText(description){
     return description.substring(0, 40);
  },
  showAllAdvertismentCatbukr()
           {
                var vm = this
                 axios.get('/advertismentCategoriesBukar')
          .then(response => {
             vm.categories = response.data.data
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
