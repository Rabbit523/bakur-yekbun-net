<style >
.side {
    display: none;
}
footer.verifyfooter {
    display: none ;
}
body.verifybody {
  background-color: #222;
}
#preloader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
#loader {
    display: block;
    position: relative;
    left: 50%;
    top: 50%;
    width: 150px;
    height: 150px;
    margin: -75px 0 0 -75px;
    border-radius: 50%;
    border: 3px solid transparent;
    border-top-color: #9370DB;
    -webkit-animation: spin 2s linear infinite;
    animation: spin 2s linear infinite;
}
#loader:before {
    content: "";
    position: absolute;
    top: 5px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    border-radius: 50%;
    border: 3px solid transparent;
    border-top-color: #BA55D3;
    -webkit-animation: spin 3s linear infinite;
    animation: spin 3s linear infinite;
}
#loader:after {
    content: "";
    position: absolute;
    top: 15px;
    left: 15px;
    right: 15px;
    bottom: 15px;
    border-radius: 50%;
    border: 3px solid transparent;
    border-top-color: #FF00FF;
    -webkit-animation: spin 1.5s linear infinite;
    animation: spin 1.5s linear infinite;
}
@-webkit-keyframes spin {
    0%   {
        -webkit-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}
@keyframes spin {
    0%   {
        -webkit-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}
</style>
<template>
<div>
 <body class="verifybody">

<div id="preloader">
  <div id="loader"></div>
</div>
 

 </body>
</div>
</template>
<script>

 export default {
    components: {
    
	  
    },	 
	data(){
            return{
               remember_token: '',
			   logintoken: '',
            }  
        },
        watch:{
         
        },
        mounted(){
		 
		
		
		var url_string = window.location.href;
	var urlss = new URL(url_string);
    this.remember_token = urlss.searchParams.get("remembertokenValue");
    this.logintoken = urlss.searchParams.get("logintoken");
     console.log(this.remember_token);
      console.log(this.logintoken);
		
		
		 this.loginUser();
		//edd		
        },
        methods:{
                   
		       loginUser(){
		       	axios({
  method: 'post',
  url: '/verifylogin',
  data: {
    logintoken:this.logintoken,remember_token:this.remember_token
  }
}).then(function(response) {
 

 console.log(response);

let accessToken=response.data.success.token;
let accesslogintoken=response.data.success.logintoken;
let rememberValue=response.data.success.rememberValue;
localStorage.setItem('token', accessToken);
localStorage.setItem('loginAccess', accesslogintoken);
localStorage.setItem('rememberValue', rememberValue);
console.log(accessToken);
console.log(accesslogintoken);
console.log(rememberValue);


 window.isSignedIn = true;
 //Bus.$emit('loggedIn');
   
	
	
 window.location = '/';
	
  }).catch(function (error) {
   
    //  console.log(error);
	 if(error){
	   window.location = process.env.VUE_APP_YEKBUN || 'https://yekbun.net/';
	 }
	 
 });
		  }
		  
        }
  }
</script>
