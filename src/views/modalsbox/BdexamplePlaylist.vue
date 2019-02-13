<template>



			<!-- popup-10-1 -->
		<div class="modal fade bd-example-modal-lg-10-1 add_to_playlist_pop" style="display: none;">
			<div class="modal-dialog modal-sm container">
				<div class="modal-content">
					<div class="popup-10-1">
						<h3 style="text-align: center">Add to playlist</h3>
						<div class="posi-input" style=" border-top: 1px solid #DADADA;color: #6f6e6c; margin-top: 10px">
							<div class="radio">
								<label>
									<input type="radio" name="optradio" disabled>Spater ansehen</label>
								<i class="fa fa-lock"></i>
							</div>
							<div class="radio">
								<label><input type="radio" name="optradio">Kurdi remix</label>
								<i class="flaticon-world"></i>
							</div>
							<div class="radio">
								<label><input type="radio" name="optradio">Training music</label>
								<i class="flaticon-world"></i>
							</div>

							<div class="radio">
								<label><input type="radio" name="optradio">Falafe</label>
								<i class="flaticon-world"></i>
							</div>

							<div class="radio">
								<label><input type="radio" name="optradio">Mix Music</label>
								<i class="flaticon-world"></i>
							</div>

							<div class="radio">
								<label><input type="radio" name="optradio">Commedy</label>
								<i class="flaticon-world"></i>
							</div>

							<div class="radio">
								<label><input type="radio" name="optradio">shaui</label>
								<i class="flaticon-world"></i>
							</div>

							<div class="radio">
								<label><input type="radio" name="optradio">Saz</label>
								<i class="flaticon-world"></i>
							</div>

							<div class="radio">
								<label><input type="radio" name="optradio">Chinesische Rezepte</label>
								<i class="flaticon-world"></i>
							</div>

							<div class="radio">
								<label><input type="radio" name="optradio">Remix 2016</label>
								<i class="flaticon-world"></i>
							</div>
							
						</div>
						<div class="modal-footer">
							<button type="button" class="btn btn-create-playlist" data-toggle="modal" data-target=".bs-example-modal-sm-2-1">+Create New playlist</button>
						</div>
						
					</div>
				</div><!-- modal-content -->
			</div><!-- modal-dialog -->
		</div><!-- modal fade -->
	
	
	<!-- End playlist Share Popup -->
	
	

</template>
<script>
import ArtistAlbumModalOne from "./forArtistAlbumModal/ArtistAlbumModalOne.vue";

export default {
  components: {
    ArtistAlbumModalOne
  }
};
</script>
