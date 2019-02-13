<style scoped>
.content {
  margin-top: 113px !important;
}
</style>
<template>
<div>
 

<div class="js--overlay"></div>
   <Header></Header>
  
        <!-- Content -->
        <div class="content">
            <div class="container-fluid">
                <div class="row">

                    <!-- left side -->
                    <div class="col-xs-12 col-md-3 maincontentscroll" style="padding:3px">


                        <!-- Birthday -->
                       

                    </div>  

                    <!-- center side -->
                    <div class="col-xs-12 col-md-6 maincontentscroll">

                        <!-- latest uploads -->
                        <div class="col-xs-12" style='background:#fff'>
                            <div class="latest-uploads" style="text-align:center;padding:100px">
                                <h1 style="color: inherit;">Coming soon</h1>

                            </div>
                        </div>

                        <!-- featured products -->

                    </div>

                    <!-- right side -->
                    <div class="col-xs-12 col-md-3 maincontentscroll">
                        <!-- Video player -->						  
                        <div class="row ">                         
                            

                        </div>
                        
                    </div>  

					
					
					
					
                </div>
            </div>
        </div>

			

 
</div>
</template>
<script>
import Header from "./layouts/Header.vue";

import Side2 from "./AllMixins/side2";

export default {
  components: {
    Header
  },
  data() {
    return {};
  },
  watch: {},
  mounted() {
    //edd
  },
  methods: {},
  mixins: [Side2]
};
</script>
