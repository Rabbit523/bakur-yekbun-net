<style lang="css" >
@import "https://use.fontawesome.com/releases/v5.3.1/css/all.css";
@import "assets/css/video-player-style.css";
@import "assets/css/normalize.css";
@import "assets/css/bootstrap-theme.min.css";
@import "assets/css/owl.carousel.min.css";
@import "assets/css/owl.theme.default.min.css";
@import "assets/css/owl.theme.green.min.css";
@import "assets/css/sharepopup/custom.css";
@import "assets/css/sharepopup/paper-wizard.css";
@import "assets/css/sharepopup/emoji.css";
@import "assets/css/sharepopup/spectrum.css";
@import "assets/css/sharepopup/themify-icons.css";
@import "assets/css/video-style.css";

@import "assets/nhp-popup/css/flaticon.css";
@import "assets/css/popup/flexslider.css";
@import "assets/css/popup/custom.css";
@import "assets/css/flaticon2.css";
@import "assets/css/flaticon3.css";

a.router-link-exact-active {
  color: #49494b !important;
  background-color: #fff !important;
  border-radius: 0 !important;
}
a.router-link-exact-active.router-link-active {
  background-color: #fff !important;
  color: #0c992d !important;
  border-bottom: 3px solid #0c992d !important;
}
nav ol,
ul {
  /* margin-top: 0 !important;*/
  margin-bottom: -5px !important;
}
.nav-tabs {
  background: rgb(229, 226, 221);
}

.nav-tabs li.router-link-active {
  background-color: #fff !important;
}
.nav-tabs > li.router-link-active > a[data-v-4286b900],
.nav-tabs > li.router-link-active > a[data-v-4286b900]:focus,
.nav-tabs > li.router-link-active > a[data-v-4286b900]:hover {
  color: #0c992d;
  background-color: #fff;
}
.btn,
.navbar .navbar-nav > li > a.btn {
  border-color: #f7f7f7;
}
.side .nav-tabs.nav-justified {
  background-color: #fff;
}
.modalfooter p {
  margin: 0;
  width: 80%;
}
.modalfooter {
  padding-bottom: 50px !important;
}
.modelhelp a {
  padding-left: 25px !important;
}
.modalfooter i.fa {
  color: #fff !important;
  font-size: 18px !important;
}
i.fa.fa-sign-out {
  font-size: 20px !important;
}
.setting_profile {
  width: 100% !important;
}
.my-profile_setting span {
  color: #fff !important;
}
.my-profile_setting i.fa {
  color: #fff !important;
}
.setting_profile .dropdown a {
  color: #fff !important;
}
.h1,
.h2,
.h3,
.h4,
.h5,
.h6,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0 !important;
}
.container-fluid {
  padding-left: 30px !important;
  padding-right: 30px !important;
}

@media only screen and (max-width: 768px) {
  .search-panel {
    margin-bottom: 50px;
  }
  input.form-control.search-bar.col-xs-6 {
    left: 0;
  }
}

.fa {
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome !important;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
nav > ul > li > a {
  color: #b4b4b4 !important;
}

ul.list-inline.list-unstyle .fa {
  font-size: 20px !important;
}

.logo h1 img {
  margin-top: 0px;
  margin-left: -40px;
}
logo h1 img {
  width: 172px !important;
}
a.router-link-exact-active.router-link-active {
  border-bottom: 3px solid #f9f9f9 !important;
}
nav > ul.list-inline.list-unstyle > li > a:hover {
  border-bottom: 3px solid #f9f9f9 !important;
}

.fa-book-open:before {
  content: "\f518";
}
.fa-book-reader:before {
  content: "\f5da";
}

.heart_img {
  margin: 0 0 0 0;
}

.heart_img img {
  animation: 2.5s ease 0s normal none infinite running animateHeartBeat;
  overflow: inherit;
  position: relative;
  display: inline-block;
  max-width: 25px;
}

@keyframes animateHeartBeat {
  0% {
    transform: scale(1);
  }
  5% {
    transform: scale(1.4);
  }
  10% {
    transform: scale(1.3);
  }
  15% {
    transform: scale(1.8);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes animateHeartBeat {
  0% {
    transform: scale(1);
  }
  5% {
    transform: scale(1.4);
  }
  10% {
    transform: scale(1.3);
  }
  15% {
    transform: scale(1.8);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(1);
  }
}

a.router-link-exact-active.router-link-active {
  background-color: #ece7e7eb !important;
  padding: 8px 10px;
  border-radius: 50% !important;
  padding-bottom: 5px;
  margin-bottom: 4px;
}
a.fornews.router-link-exact-active.router-link-active {
  padding-bottom: 8px;
}
a.router-link-exact-active.router-link-active i.fa {
  margin-top: 2px;
}

.list-inline > li {
  padding-left: 10px !important;
}

.reaction:hover::before {
  opacity: 0 !important;
}
span.like-btn-text {
  display: none;
}
span.flaticon-sharing-interface + span {
  display: none;
}
.nav-tabs {
  background-color: unset !important;
}

body {
  margin-bottom: 0px !important;
}
</style>
<template>
  <div>
    <CompanyPositionModal></CompanyPositionModal>
    <MySmallModalLabel></MySmallModalLabel>
    <Side></Side>
    <FriendOptionsMore></FriendOptionsMore>
    <router-view/>
    <FooterSecond></FooterSecond>
    <LanguageModal></LanguageModal>
    <MyModal></MyModal>
    <ModalCompleteUserProfile/>
    <NewmyModal></NewmyModal>
    <Micmodal></Micmodal>
    <Nhppopup></Nhppopup>
    <MyblogModal></MyblogModal>

    <VideoModal></VideoModal>

    <BDexample2></BDexample2>

    <Bdexample1></Bdexample1>

    <Bdexample3></Bdexample3>

    <ArtistAlbumModal></ArtistAlbumModal>

    <BdexampleMusic1></BdexampleMusic1>

    <BdexamplePlaylist></BdexamplePlaylist>
  </div>
</template>

<script>
//import jQuery from "jquery";
import $ from "jquery";
//var $ = require("jquery")(window);

// import SideBar from './views/layouts/Sidebar.vue'
//import Footertem from './views/layouts/Footertem.vue'
import FooterSecond from "./views/layouts/FooterSecond.vue";
import LanguageModal from "./views/modalsbox/LanguageModal.vue";
import MyModal from "./views/modalsbox/MyModal.vue";
import NewmyModal from "./views/modalsbox/NewmyModal.vue";
import ModalCompleteUserProfile from "./views/modalsbox/ModalCompleteUserProfile";
import Micmodal from "./views/modalsbox/Micmodal.vue";
import Nhppopup from "./views/modalsbox/Nhppopup.vue";
import MyblogModal from "./views/modalsbox/MyblogModal.vue";
import VideoModal from "./views/modalsbox/VideoModal.vue";
import BDexample2 from "./views/modalsbox/BDexample2.vue";
import Bdexample1 from "./views/modalsbox/Bdexample1.vue";
import Bdexample3 from "./views/modalsbox/Bdexample3.vue";
import CompanyPositionModal from "./views/modalsbox/CompanyPositionModal.vue";
import MySmallModalLabel from "./views/modalsbox/MySmallModalLabel.vue";
import Side from "./views/modalsbox/Side.vue";
import FriendOptionsMore from "./views/modalsbox/FriendOptionsMore.vue";

import ArtistAlbumModal from "./views/modalsbox/ArtistAlbumModal.vue";
import BdexampleMusic1 from "./views/modalsbox/BdexampleMusic1.vue";
import BdexamplePlaylist from "./views/modalsbox/BdexamplePlaylist.vue";

//import Jquery from "./assets/newMixin/jquery";
import Bootstrapmin from "./assets/newMixin/bootstrapmin";
import Jqueryflexslider from "./assets/newMixin/Jqueryflexslider";
import Custom from "./assets/newMixin/Custom";
import JqueryBootstrapWizard from "./assets/newMixin/jqueryBootstrapWizard";
import Spectrum from "./assets/newMixin/spectrum";
import JqueryValidatemin from "./assets/newMixin/jqueryValidatemin";

import Videoplayer from "./assets/newMixin/videoplayer";
import PaperWizard from "./assets/newMixin/paper-wizard";

import JqueryUi from "./assets/newMixin/JqueryUi";
import scriptMin from "./assets/newMixin/scriptMin";
import JqueryNicescrollmin from "./assets/newMixin/new/jqueryNicescrollmin";
import Player1 from "./assets/newMixin/new/player-1";
import Footermusic from "./assets/newMixin/new/footer-music";
import NewCustom from "./assets/newMixin/new/mewCustom";

//import Nhpsmilyicon from "./assets/newMixin/nhp-popup/nhp-smilyicon";
import Nhpmusic from "./assets/newMixin/nhp-popup/nhp-music";

import Config from "./assets/newMixin/sharepopup/config";
import Util from "./assets/newMixin/sharepopup/util";
import Jqueryemojiarea from "./assets/newMixin/sharepopup/jqueryemojiarea";
import EmojiPicker from "./assets/newMixin/sharepopup/emojiPicker";

export default {
  components: {
    FooterSecond,
    LanguageModal,
    MyModal,
    NewmyModal,
    Micmodal,
    Nhppopup,
    MyblogModal,
    VideoModal,
    BDexample2,
    Bdexample1,
    Bdexample3,
    CompanyPositionModal,
    MySmallModalLabel,
    Side,
    FriendOptionsMore,
    ArtistAlbumModal,
    BdexampleMusic1,
    BdexamplePlaylist,
    ModalCompleteUserProfile
  },
  data() {
    return {};
  },
  watch: {},
  mounted() {
    $(document).ready(function() {});

    this.loginUserMew();
    //edd
  },
  methods: {
    loginUserMew() {
      axios({
        method: "get",
        url: "/test"
      }).then(function(response) {
        console.log(response);
      });
    }
  },
  mixins: [
    Bootstrapmin,
    Jqueryflexslider,
    Custom,
    JqueryBootstrapWizard,
    PaperWizard,
    JqueryValidatemin,
    Spectrum,
    Config,
    Util,
    Jqueryemojiarea,
    EmojiPicker,
    JqueryUi,
    scriptMin,
    JqueryNicescrollmin,
    Player1,
    Footermusic,
    Nhpmusic,
    Videoplayer,
    NewCustom
  ]
};
</script>
