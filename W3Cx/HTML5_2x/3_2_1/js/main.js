
var audioContext;
var source;
var audioBuffer;

function init() {
    // WebAudio context
    audioContext = new window.AudioContext();
}
function stopSound() {
    if (source)
        source.stop();
}

function playSound() {

    // Build a source node for the audio graph
    source = audioContext.createBufferSource();
    source.buffer = audioBuffer;
    source.loop = false;
    // connect to the speakers
    source.connect(audioContext.destination);
    // Play immediately.
    source.start(0);
}

function initSound(audioFile) {
    // The audio file may be an mp3 - we must decode it before playing it from memory
    audioContext.decodeAudioData(audioFile, function (buffer) {
        console.log('Geil');
        // audioBuffer the decoded audio file we're going to work with
        audioBuffer = buffer;
        // Enable all buttons once the audio file is decoded
        var buttonz = document.querySelectorAll('Button');
        buttonz[0].disabled = false;
        buttonz[1].disabled = false;
        buttonz[2].disabled = false;
        alert("Binary file has been loaded and decoded, use play / stop buttons!")
    }, function (e) {
        console.log('Shit');
    });
}

function downloadSoundFile(url) {

    var progress = document.querySelector('#downloadProgress');
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.responseType = 'arraybuffer';

    xhr.onprogress = function (param) {
        progress.value = param.loaded;
        progress.max = param.total;
    }

    xhr.onload = function (data) {

        console.log("Song downloaded, decoding...");
        initSound(this.response); // this.response is an ArrayBuffer.
    };

    xhr.onerror = function (e) {
        console.log('No good.');
    };

    xhr.send();
    console.log("Ajax request sent... wait until it downloads completely");
}
