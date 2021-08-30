if(!$( "#rec" ).length){


alert("set remainingTime to 180 secend & mp3 quality  bitRate to 44 if you want change it refer to  comment line with same title ")


URL = window.URL || window.webkitURL;

$(document).ready(function(){
	
	let recordingIsActive = false;
	let remainingTime = 0;
	let gumStream;
	let recorder;
	let input;
	let AudioContext = window.AudioContext || window.webkitAudioContext;
	let audioContext;
	
	function blinkChat() {
		$('#recording_chat').delay(400).fadeTo(300, 0.2).delay(400).fadeTo(300, 1, blinkChat);
	}
	function blinkPrivate() {
		$('#recording_private').delay(400).fadeTo(300, 0.2).delay(400).fadeTo(300, 1, blinkPrivate);
	}
	
	function voiceRecord(type, recTimer) {
		recorder = undefined;
		const constraints = {audio: true, video: false};
		navigator.mediaDevices.getUserMedia(constraints).then(stream => {
			if (recordingIsActive) return false;
			recordingIsActive = true;
			audioContext = new AudioContext();
			gumStream = stream;
			input = audioContext.createMediaStreamSource(stream);
			recorder = new WebAudioRecorder(input, {
				workerDir: "addons/voice_record/files/",
				encoding: 'mp3',
				numChannels: 2,
				onEncoderLoading: (recorder, encoding) => {
				},
				onEncoderLoaded: (recorder, encoding) => {
				}
			});
			recorder.onComplete = (recorder, blob) => {
				var formData = new FormData();
				formData.append('file', blob);
				formData.append('token', utk);
								if(type == 'private'){
					formData.append('target', $('#get_private').attr('value'));
					formData.append('private', 1);
				}
								$.ajax('addons/voice_record/system/blob_chat.php', {
					method: "POST",
					data: formData,
					processData: false,
					contentType: false,
					success: function (response) {
						if(response == 0){
							callSaved(system.error, 3);
						}
						if(response == 1){
							callSaved(system.wrongFile, 3);
						}
						if(response == 2){
							callSaved(system.cannotContact, 3);
						}
						$('#recording_' + type + '_spin').replaceWith('<i class="fa fa-microphone" id="record_' + type + '"></i>');
					},
					error: function () {
					}
				});
			};
			recorder.setOptions({
				timeLimit: recTimer,
				encodeAfterRecord: true,

/*** quality********************************/  mp3: {bitRate: 71}
				
			});
			recorder.startRecording();
			if (recTimer !== 0) {
				const time_callback = _RemainingTime => {
					if (_RemainingTime === 0 && recordingIsActive) {
						stopRecording(type);
					}
				};
				voiceTimer(recTimer, time_callback);
			}
			$('#record_' + type).replaceWith('<i class="fa fa-circle record-circle" id="recording_' + type + '"></i>');
			if(type == 'chat'){
				blinkChat();
			}
			if(type == 'private'){
				blinkPrivate();
			}

		}).catch((errors) => {
			console.log(errors);
			alert('Please allow microphone access!');
		});

	}
	function stopRecording(type) {
		remainingTime = 0;
		recordingIsActive = false;
		$('#recording_' + type).replaceWith('<i class="fa fa-spinner fa-spin fa-fw" id="recording_' + type + '_spin"></i>');
		gumStream.getAudioTracks()[0].stop();
		recorder.finishRecording();
	}
	function voiceTimer(seconds, cb) {
		remainingTime = seconds;
		setTimeout(() => {
			cb(remainingTime);
			if (remainingTime > 0) {
				voiceTimer(remainingTime - 1, cb);
			}
		}, 1000);
	}		


		$('<img width="30" height="30" id="rec" src="https://s4.uupload.ir/files/1-1_ux9u.png"></>').appendTo('.chat_footer_empty');

		$('<img width="30" height="30" id="stop" src="https://s4.uupload.ir/files/2-3_lrvi.png"></>').appendTo('.chat_footer_empty');



	$(document).on("click", "#rec", () => voiceRecord('chat', 120));
	$(document).on("click", "#stop", () => stopRecording('chat'));

		$('<img width="30" height="30" id="recp" src="https://s4.uupload.ir/files/1-1_ux9u.png"></>').insertAfter('#private_name');
		$('<img width="30" height="30" id="stopp" src="https://s4.uupload.ir/files/2-3_lrvi.png"></>').insertAfter('#private_name');
	$(document).on("click", "#recp", () => voiceRecord('private', 120));
	$(document).on("click", "#stopp", () => stopRecording('private'));
		
	
	boomAddCss('addons/voice_record/files/voice_record.css');
	
});

}
m.fn.init [document, context: document]
