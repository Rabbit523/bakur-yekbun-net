<template>
<div>

<footer class="flex" style="">
  <div class="shadow"></div>
  <div class="left flex align-center"><img class="artwork"/>
    <div class="show-more btn-round"></div>
    <div class="footer-info">
      <p class="song" style="color:inherit"></p>
      <p class="artist" style="color:inherit; text-align: left;"></p>
    </div>
  </div>
  <div class="center flex">
    <div class="btn shuffle"></div>
    <div class="btn previous"></div>
    <div class="btn-round play both ripple"></div>
    <div class="btn next"></div>
    <div class="btn repeat"></div>
  </div>
  <div class="right flex">
    <div class="btn volume"></div>
    <input class="range" id="volume" type="range" min="0" max="1" step="0.01" value="0.75"/>
	
	<a class="flip playlist_btn" style="margin: 0 0 0 15px;"><i class="fa fa-indent fa-2x" style="position:relative;color: rgba(11, 11, 11, 0.25);top: 2px"></i></a>
  </div>

  <div class="duration">
    <input class="range" id="time" type="range" min="0" max="100" step="0.01" value="0"/>
  </div>
  <div class="tracks"></div>
</footer>


<audio class="audio" id="audio" preload="metadata"></audio>
<div class="audio-next"></div>

			
	<div class="playlist-footer" style="display: none;">
						<div class="col-md-3" style="position: fixed;top: 58px;right: 10px;z-index: 9999;">
                            <div class="row ">                         
                                <div class=" itemno ">			

                                    <div class="col-xs-12">
                                        <main class='pre-enter' ontouchstart>

                                            <div class='player' style="color: inherit; text-shadow:none">
                                                <div class='back_1'>
                                                    <header>
                                                        <h1>
                                                            <a>&lsaquo;</a>
                                                        </h1>
                                                        <h1>My Playlist</h1>
                                                    </header>
                                                    <ol>
                                                        <li>
                                                            <a><div><h3>Obedear</h3><i class="fa fa-ellipsis-h"></i><h4>12:12</h4></div></a>
                                                            <hr>
                                                        </li>
                                                        <li>
                                                            <a>
                                                                <div>
                                                                    <h3>Obedear</h3>
                                                                    <i class="fa fa-ellipsis-h"></i>
                                                                    <h4>12:12</h4>
                                                                </div>
                                                            </a>
                                                            <hr>
                                                        </li>
                                                        <li>
                                                            <a>
                                                                <div>
                                                                    <h3>Obedear</h3>
                                                                    <i class="fa fa-ellipsis-h"></i>
                                                                    <h4>12:12</h4>
                                                                </div>
                                                            </a>
                                                            <hr>
                                                        </li>
                                                    
                                                   
                                                 
                                                
                                               
                                                     
                                                   
                                                  
                                                    </ol>
                                                </div>
                                                <div class='back_2'>
                                                    <header>
                                                        <h1>
                                                            <a>&lsaquo;</a>
                                                        </h1>
                                                        <h1>My Songs</h1>
                                                    </header>
                                                    <ol>
                                                        <li>
                                                            <a>
                                                                <div>
                                                                    <h3>Obedear</h3>
                                                                    <i class="fa fa-ellipsis-h"></i>
                                                                    <h4>12:12</h4>
                                                                </div>
                                                            </a>
                                                            <hr>
                                                        </li>
                                                        <li>
                                                            <a>
                                                                <div>
                                                                    <h3>Obedear</h3>
                                                                    <i class="fa fa-ellipsis-h"></i>
                                                                    <h4>12:12</h4>
                                                                </div>
                                                            </a>
                                                            <hr>
                                                        </li>
                                               
                                                
                                                
                                                  
                                                
                                                  
                                                 
                                                 
                                                    
                                                     

                                                    </ol>
                                                </div>

                                            </div>

                                        </main>
                                    </div>	

                                </div>

                            </div>
			</div>
        </div>



</div>

</template>
<script>
export default {
  components: {}
};
</script>
