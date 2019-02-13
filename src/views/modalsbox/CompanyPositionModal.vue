<template>


	
        <!-- VIDEO RECORD popUP---->
        <div class="modal fade" id="companyPositionModal" tabindex="-1" role="dialog" aria-labelledby="companyPositionLabel" aria-hidden="true" style="display: none;">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header text-center">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true" style="position: relative;left: 0px;">×</button>
                    </div>
                    <div class="modal-body">
                        <div class="video-record">
                            <div class="row">
                                <div class="col-md-12 text-center">
                                    <h3>Online Voice Recorder</h3>
                                    <h4>Is your microphone ready?</h4>
                                    <div class="round hollow ">
                                        <a href="#" id="addClass-browser"><span class="fa fa-microphone fa-1x"></span>Start recording </a>
                                    </div>
                                    <div border=0 class="rounded-list margin-top-30">
                                        <ol class="list-inline margin-bottom-zero">
                                            <li>Record </li>
                                            <li>Listen </li>
                                            <li>Send</li>
                                        </ol>
                                    </div>
                                    <p>
                                        SpeakPipe voice recorder allows you to create an audio recording directly from a browser by using your microphone. The recording is produced locally on your computer, and you can record as many times as you need. There is the option to save your recording on the SpeakPipe server and get a link to it, so you can send it via email or use on the web.

                                    </p>
                                    <p>
                                        Works on iPhone, iPad, iPod, and Android devices.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="video-record-browser-error text-center hidden">
                            <h3>Microphone access error</h3>
                            <p>
                                It seems your microphone is disabled in the browser settings.
                                Please go to your browser settings and enable access to your microphone.
                            </p>
                            <button type="button" class="btn btn-primary btn-md" id="tryagain">Try again</button>
                        </div>
                        <div class="video-record-speaknow text-center hidden">
                            <h2>Speak Now</h2>
                            <div class="microphone"><span class="fa fa-microphone fa-3x"></span></div>
                            <div class="recording-time">
                                <h5><b>Recording:</b> 00:003</h5>
                                <h5>Max Duration <b>5</b> mins</h5>
                            </div>
                            <div class="recordignbar text-center">
                                <span class="bg-gray"></span>
                                <span class="bg-primary"></span>
                                <span class="bg-primary"></span>
                                <span class="bg-gray"></span>
                            </div>
                            <p>
                                It seems your microphone is disabled in the browser settings.
                                Please go to your browser settings and enable access to your microphone.
                            </p>
                            <button type="button" class="btn btn-success btn-md" id="stop">Stop</button>
                            <button type="button" class="btn btn-default btn-md" id="reset">Reset</button>
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
