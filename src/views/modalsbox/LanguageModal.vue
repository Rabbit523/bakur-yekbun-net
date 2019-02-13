<template>

            <!-- language popup -->
        <div id="language-popup" class="login-pop modal fade" role="dialog" style="display: none;">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title">Select Your Favorte Language</h4>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-xs-12 col-sm-6">
                                <div id="langclick" class="item-lang" onclick="myFunction()">
                                    <div id="sel-lang" class="select-lang"> <img src="images/lang/select-lang.png"> </div>
                                    <img src="images/lang/lang1.png">
                                    <p>English</p>
                                </div>
                            </div>  
                            <div class="col-xs-12 col-sm-6">
                                <div id="langclick2" class="item-lang" onclick="myFunction2()">
                                    <div id="sel-lang2" class="select-lang"> <img src="images/lang/select-lang.png"> </div>
                                    <img src="images/lang/lang2.png">
                                    <p>Hindi</p>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6">
                                <div id="langclick3" class="item-lang" onclick="myFunction3()">
                                    <div id="sel-lang3" class="select-lang"> <img src="images/lang/select-lang.png"> </div>
                                    <img src="images/lang/lang3.png">
                                    <p>China</p>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6">
                                <div id="langclick4" class="item-lang" onclick="myFunction4()">
                                    <div id="sel-lang4" class="select-lang"> <img src="images/lang/select-lang.png"> </div>
                                    <img src="images/lang/lang4.png">
                                    <p>Africa</p>
                                </div>
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
