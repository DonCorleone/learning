// This line is a trick to initialize the AudioContext
// that will work on all recent browsers
var ctx = window.AudioContext || window.webkitAudioContext;
var audioContext;
var player, gainSlider, gainNode;
var pannerSlider, pannerNode;

window.onload = function () {

    // get the AudioContext
    audioContext = new ctx();

    // the audio element
    player = document.querySelector('#audioElement');
    player.onplay = (e) => { audioContext.resume(); }

    gainSlider = document.querySelector('#gainSlider');
    buildAudioGraph();

    pannerSlider = document.querySelector('#pannerSlider');
    buildAudioGraphPanner();


    var biquadFilterFrequencySlider = document.querySelector('#biquadFilterFrequencySlider');
    var biquadFilterDetuneSlider = document.querySelector('#biquadFilterDetuneSlider');
    var biquadFilterQSlider = document.querySelector('#biquadFilterQSlider');
    var biquadFilterTypeSelector = document.querySelector('#biquadFilterTypeSelector');

    var biquadExampleMediaElementSource = audioContext.createMediaElementSource(player);

    var filterNode = audioContext.createBiquadFilter();

    // input listener on the gain slider
    gainSlider.oninput = function (evt) {
        gainNode.gain.value = evt.target.value;
    };
    // input listener on the gain slider
    pannerSlider.oninput = function (evt) {
        pannerNode.pan.value = evt.target.value;
    };

    biquadExampleMediaElementSource.connect(filterNode);

    filterNode.connect(audioContext.destination);

    biquadFilterFrequencySlider.oninput = function (evt) {
        filterNode.frequency.value = parseFloat(evt.target.value);
    };

    biquadFilterDetuneSlider.oninput = function (evt) {
        filterNode.detune.value = parseFloat(evt.target.value);
    };

    biquadFilterQSlider.oninput = function (evt) {
        filterNode.Q.value = parseFloat(evt.target.value);
    };

    biquadFilterTypeSelector.onchange = function (evt) {
        filterNode.type = evt.target.value;
    };
};

function buildAudioGraph() {
    // create source and gain node
    var gainMediaElementSource = audioContext.createMediaElementSource(player);
    gainNode = audioContext.createGain();

    // connect nodes together
    gainMediaElementSource.connect(gainNode);
    gainNode.connect(audioContext.destination);
}

function buildAudioGraphPanner() {
    // create source and gain node
    var source = audioContext.createMediaElementSource(player);
    pannerNode = audioContext.createStereoPanner();

    // connect nodes together
    source.connect(pannerNode);
    pannerNode.connect(audioContext.destination);
}