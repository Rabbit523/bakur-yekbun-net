<template>

   <ul class="nav sidebar-nav list-unstyled unstyled">
                                        <li class="">
                                            <a href="javascript:;" @click="loginRojava">
                                                <div class="media yourPages pull-left">
                                                    <div class="media-left">
                                                        <img src="images/logo.png" class="media-object img-circle" style="width:40px; height:40px" alt="">
                                                    </div>
                                                    <div class="media-body">
                                                        <h4 class="media-heading">Rojava.yekbun.net</h4>
                                                        <p class="text-black"><strong>1000 Follower</strong> / <strong>5000 Member</strong></p>
                                                    </div>
                                                </div>

                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:;" @click="loginBasur">
                                                <div class="media yourPages pull-left">
                                                    <div class="media-left">
                                                        <img src="images/logo.png" class="media-object img-circle" style="width:40px; height:40px" alt="">
                                                    </div>
                                                    <div class="media-body">
                                                        <h4 class="media-heading">Basur.yekbun.net</h4>
                                                        <p class="text-black"><strong>1000 Follower</strong> / <strong>5000 Member</strong></p>
                                                    </div>
                                                </div> 

                                            </a>

                                        </li>
                                    </ul>

</template>
<script>
export default {
  data() {
    return {};
  },
  watch: {},
  mounted() {
    window.token = localStorage.getItem("token");
    window.loginAccess = localStorage.getItem("loginAccess");
    window.rememberValue = localStorage.getItem("rememberValue");

    console.log(user);
    //end
  },
  methods: {
    loginRojava() {
      window.location = 'https://rojava.yekbun.net/verifyuserauth/?remembertokenValue=' + rememberValue + '&logintoken=' + loginAccess;  
    },

    loginBasur() {
      window.location =
         window.location = 'https://basur.yekbun.net//verifyuserauth/?remembertokenValue=' + rememberValue + '&logintoken=' + loginAccess; 
    }
  }
};
</script>
