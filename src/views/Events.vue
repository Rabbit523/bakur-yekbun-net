<style scoped>
.content {
  margin-top: 113px !important;
}
</style>
<template>
<div>
 

<div class="js--overlay"></div>
   <HederEvent></HederEvent>
<div class="content" style="margin-top: 105px">
            <div class="container-fluid">
                <div class="row">
				   <Leftsidebar></Leftsidebar>
				   
				   <MainContainEvents></MainContainEvents>
				   
				  
  				
			  </div><!-- row-->
          </div><!--container-fluid --> 				
</div><!--- content -->
				

</div>
</template>
<script>
import HederEvent from "./layouts/HederEvent.vue";
import Leftsidebar from "./layouts/Leftsidebar.vue";
import MainContainEvents from "./layouts/MainContainEvents.vue";

import Side2 from "./AllMixins/side2";

export default {
  components: {
    HederEvent,
    Leftsidebar,
    MainContainEvents
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
