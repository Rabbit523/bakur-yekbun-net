<style >
body {
  background-color: #eee;
}
</style>
<template>
  <div>
    <div class="js--overlay"></div>
    <Headers></Headers>
    <div class="content" style="margin-top: 134px">
      <div class="container-fluid">
        <div class="row">
          <Leftsidebar></Leftsidebar>
          <MainContain></MainContain>
          <Rightsidebar></Rightsidebar>
        </div>
        <!-- row-->
      </div>
      <!--container-fluid -->
    </div>
    <!--- content -->
    <!--<Footertem></Footertem>-->
  </div>
</template>
<script>
import Headers from "./layouts/Header.vue";
import Leftsidebar from "./layouts/Leftsidebar.vue";
import MainContain from "./layouts/MainContain.vue";
import Rightsidebar from "./layouts/Rightsidebar.vue";

import Side2 from "./AllMixins/side2";
import Owlcarousel from "./AllMixins/owlcarousel";
import Owlcarsulrun from "./AllMixins/owlcarsulrun";
import Videoplayer from "./AllMixins/videoplayer";

export default {
  components: {
    Headers,
    Leftsidebar,
    MainContain,
    Rightsidebar
  },
  data() {
    return {};
  },
  watch: {},
  mixins: [Side2, Owlcarousel, Owlcarsulrun, Videoplayer]
};
</script>
