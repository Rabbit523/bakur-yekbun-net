<style scoped>
.content {
  margin-top: 113px !important;
}
</style>
<template>
<div>
 

<div class="js--overlay"></div>
   <HeaderNews></HeaderNews>
<div class="content" style="margin-top: 105px">
            <div class="container-fluid">
                <div class="row">
				   <Leftsidebar></Leftsidebar>
				   
				   <MainContainNews></MainContainNews>
				   
				  
  				
			  </div><!-- row-->
          </div><!--container-fluid --> 				
</div><!--- content -->
				

   
 
</div>
</template>
<script>
import HeaderNews from "./layouts/HeaderNews.vue";
import Leftsidebar from "./layouts/Leftsidebar.vue";
import MainContainNews from "./layouts/MainContainNews.vue";

import Side2 from "./AllMixins/side2";

export default {
  components: {
    HeaderNews,
    Leftsidebar,
    MainContainNews
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
