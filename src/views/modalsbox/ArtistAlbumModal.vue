<template>





<div class="modal fade in" id="artist_album_modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" style="display: none;">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                    <h4 class="modal-title" id="myModalLabel">Sunday Chilling</h4>
                </div>
                <div class="modal-body">
                          
						  <ArtistAlbumModalOne></ArtistAlbumModalOne>
						 
                           <ArtistAlbumModalOne></ArtistAlbumModalOne>

						   <ArtistAlbumModalOne></ArtistAlbumModalOne>
						   
                </div>
            </div>
        </div>
    </div>
	



</template>
<script>
import ArtistAlbumModalOne from "./forArtistAlbumModal/ArtistAlbumModalOne.vue";

export default {
  components: {
    ArtistAlbumModalOne
  }
};
</script>
