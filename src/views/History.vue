<style scoped>
.content {
  margin-top: 113px !important;
}
</style>
<template>
<div>
 
<div class="js--overlay"></div>
   <HeaderHistory></HeaderHistory>
<div class="content" style="margin-top: 105px">
            <div class="container-fluid">
                <div class="row">
				   <Leftsidebar></Leftsidebar>
				   
				   <MainContainHistory></MainContainHistory>
				   
				  
  				
			  </div><!-- row-->
          </div><!--container-fluid --> 				
</div><!--- content -->
				

 
</div>
</template>
<script>
import HeaderHistory from "./layouts/HeaderHistory.vue";
import Leftsidebar from "./layouts/Leftsidebar.vue";
import MainContainHistory from "./layouts/MainContainHistory.vue";

import Side2 from "./AllMixins/side2";

export default {
  components: {
    HeaderHistory,
    Leftsidebar,
    MainContainHistory
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
