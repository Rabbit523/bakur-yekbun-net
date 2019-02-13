<style scoped>
.content {
  margin-top: 113px !important;
}
</style>
<template>
<div>
 

<div class="js--overlay"></div>
   <HeaderVoting></HeaderVoting>
<div class="content" style="margin-top: 105px">
            <div class="container-fluid">
                <div class="row">
				   <Leftsidebar></Leftsidebar>
				   
				   <MainContainVoting></MainContainVoting>
				   
				  
  				
			  </div><!-- row-->
          </div><!--container-fluid --> 				
</div><!--- content -->
				

  
 
</div>
</template>
<script>
import HeaderVoting from "./layouts/HeaderVoting.vue";
import Leftsidebar from "./layouts/Leftsidebar.vue";
import MainContainVoting from "./layouts/MainContainVoting.vue";

import Side2 from "./AllMixins/side2";

export default {
  components: {
    HeaderVoting,
    Leftsidebar,
    MainContainVoting
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
