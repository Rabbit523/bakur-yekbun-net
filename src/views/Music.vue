<style scoped>
.content {
  margin-top: 113px !important;
}

</style>
<template>
<div>
 

<div class="js--overlay"></div>
   <HeaderMusic></HeaderMusic>
<div class="content" style="margin-top: 105px">
            <div class="container-fluid">
                <div class="row">
				   <Leftsidebar></Leftsidebar>
				   
				   <MainContainMusic></MainContainMusic>
				   
				  <RightsidebarMusic></RightsidebarMusic>
  				
			  </div><!-- row-->
          </div><!--container-fluid --> 				
</div><!--- content -->
				

  
</div>
</template>
<script>
import HeaderMusic from "./layouts/HeaderMusic.vue";
import Leftsidebar from "./layouts/Leftsidebar.vue";
import MainContainMusic from "./layouts/MainContainMusic.vue";
import RightsidebarMusic from "./layouts/RightsidebarMusic.vue";

import Side2 from "./AllMixins/side2";
import FooterMusic from "./AllMixins/footer-music";
import Owlcarousel from "./AllMixins/owlcarousel";
import Owlcarsulrun from "./AllMixins/owlcarsulrun";

export default {
  components: {
    HeaderMusic,
    Leftsidebar,
    MainContainMusic,
    RightsidebarMusic
  },
  data() {
    return {};
  },
  watch: {},
  mounted() {
    //edd
  },
  methods: {},
  mixins: [Side2, FooterMusic, Owlcarousel, Owlcarsulrun]
};
</script>
