<style scoped>
.content {
  margin-top: 113px !important;
}
</style>
<template>
<div>


<div class="js--overlay"></div>
   <HeaderBazar></HeaderBazar>
<div class="content" style="margin-top: 105px">
            <div class="container-fluid">
                <div class="row">
				   <Leftsidebar></Leftsidebar>
				   
				   <MainContainBazar></MainContainBazar>
				   
				  
  				
			  </div><!-- row-->
          </div><!--container-fluid --> 				
</div><!--- content -->
				

 
</div>
</template>
<script>
import HeaderBazar from "./layouts/HeaderBazar.vue";
import Leftsidebar from "./layouts/Leftsidebar.vue";
import MainContainBazar from "./layouts/MainContainBazar.vue";

import Side2 from "./AllMixins/side2";

export default {
  components: {
    HeaderBazar,
    Leftsidebar,
    MainContainBazar
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
