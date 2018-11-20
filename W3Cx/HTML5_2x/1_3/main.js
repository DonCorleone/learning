var video, textTracks, trackAsHtmlElements, trackUrls = [];
var trackStatusesDiv, transcriptDiv;
var buttonEnglish, buttonDeutsch;


window.onload = function () {

    video = document.querySelector("#myVideo");
    transcriptDiv = document.querySelector("#transcript");
    trackAsHtmlElements = document.querySelectorAll("track");

    for (let i = 0; i < trackAsHtmlElements.length; i++) {
        const element = trackAsHtmlElements[i];
        trackUrls[i] = element.src;
    }

    buttonEnglish = document.querySelector("#buttonEnglish");
    buttonEnglish.disabled = false;
    buttonDeutsch = document.querySelector("#buttonDeutsch");
    buttonDeutsch.disabled = false;

    textTracks = video.textTracks;
};

function loadTranscript(lang) {

    clearTransscriptDiv();

    disableAllTracks();

    for (let i = 0; i < textTracks.length; i++) {
        const textTrack = textTracks[i];
        var trackAsHtmlElement = trackAsHtmlElements[i];
        if ((textTrack.language === lang) && (textTrack.kind !== "chapters")) {

            textTrack.mode = "showing";

            if (trackAsHtmlElement.readyState === 2) {
                displayCues(textTrack);
            } else {
                displayCueAfterTrackLoaded(trackAsHtmlElement, textTrack);
            }
        }
    }
};

function displayCueAfterTrackLoaded(trackAsHtmlElement, textTrack) {

    trackAsHtmlElement.addEventListener("load", function (e) {
        console.log("track loaded");

        displayCues(textTrack);
    });
}

function displayCues(htmlTrack) {
    var cues = htmlTrack.cues;
    for (let i = 0; i < cues.length; i++) {
        const cue = cues[i];
        addCueListener(cue);

        var voices = getVoices(cue.text);
        var transText = "";

        if (voices.length > 0) {
            for (let j = 0; j < voices.length; j++) {
                transText += voices[j].voice + ': ' + removeHTML(voices[j].text);
            }
        } else {
            transText = cue.text;
        }

        var clickableTransText = "<li class='cues' id=" + cue.id
            + " onclick='jumpTo("
            + cue.startTime + ");'" + ">"
            + transText + "</li>";

        addToTranscriptDiv(clickableTransText);
    }
}
function jumpTo(time){
    video.currentTime = time;
    video.play();
}
function removeHTML(text) {
    var div = document.createElement('div');
    div.innerHTML = text;
    return div.textContent || div.innerText || '';
}
function addToTranscriptDiv(htmlText) {
    transcriptDiv.innerHTML += htmlText;
}

function getVoices(speech) {
    // takes a text content and check if there are voices
    var voices = [];
    var pos = speech.indexOf('<v'); // voices are like <v Michel> ....
    while (pos != -1) {
        endVoice = speech.indexOf('>');
        var voice = speech.substring(pos + 2, endVoice).trim();
        var endSpeech = speech.indexOf('</v>');
        var text = speech.substring(endVoice + 1, endSpeech);
        voices.push({
            'voice': voice,
            'text': text
        });
        speech = speech.substring(endSpeech + 4);
        pos = speech.indexOf('<v');
    }
    return voices;
}

function addCueListener(cue) {
    cue.onenter = function () {
        // Highlight current cue transcript by adding the
        // cue.current CSS class
        console.log('enter id=' + this.id);
        var transscriptText = document.getElementById(this.id);
        transscriptText.classList.add("current");
    };

    cue.onexit = function () {
        console.log('exit id=' + cue.id);
        var transscriptText = document.getElementById(this.id);
        transscriptText.classList.remove("current");
    };
}

function disableAllTracks() {
    for (let i = 0; i < textTracks.length; i++) {
        textTracks[i].mode = "disabled";
    }
}

function clearTransscriptDiv() {
    transcriptDiv.innerHTML = "";
}
