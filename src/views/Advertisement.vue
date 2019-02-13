<style scoped>
.content {
  margin-top: 113px !important;
}
</style>
<template>
<div>
 

<div class="js--overlay"></div>
   <HeaderAdvertisement></HeaderAdvertisement>
<div class="content" style="margin-top: 105px">
            <div class="container-fluid">
                <div class="row">
				   <Leftsidebar></Leftsidebar>
				   
				   <MainContainAdvertisement></MainContainAdvertisement>
				   
				  
  				
			  </div><!-- row-->
          </div><!--container-fluid --> 				
</div><!--- content -->
				

  
 
</div>
</template>
<script>
import HeaderAdvertisement from "./layouts/HeaderAdvertisement.vue";
import Leftsidebar from "./layouts/Leftsidebar.vue";
import MainContainAdvertisement from "./layouts/MainContainAdvertisement.vue";

import Side2 from "./AllMixins/side2";

export default {
  components: {
    HeaderAdvertisement,
    Leftsidebar,
    MainContainAdvertisement
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
