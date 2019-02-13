<style scoped>
.content {
  margin-top: 113px !important;
}
</style>
<template>
<div>
 

<div class="js--overlay"></div>
  <HeaderSchool></HeaderSchool>
<div class="content" style="margin-top: 105px">
            <div class="container-fluid">
                <div class="row">
				   <Leftsidebar></Leftsidebar>
				   
				   <MainContainSchool></MainContainSchool>
				   
				  
  				
			  </div><!-- row-->
          </div><!--container-fluid --> 				
</div><!--- content -->
				

 
</div>
</template>
<script>

import HeaderSchool from "./layouts/HeaderSchool.vue";
import Leftsidebar from "./layouts/Leftsidebar.vue";
import MainContainSchool from "./layouts/MainContainSchool.vue";

import Side2 from "./AllMixins/side2";

export default {
  components: {
    HeaderSchool,
    Leftsidebar,
    MainContainSchool
	
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
