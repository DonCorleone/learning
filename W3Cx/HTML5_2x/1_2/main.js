var video, htmlTracks;
var trackStatusesDiv;

window.onload = function () {

    video = document.querySelector("#myVideo");
    trackStatusesDiv = document.querySelector("#trackStatusesDiv");

    buttonLoadFirstTrack = document.querySelector("#buttonLoadFirstTrack");
    buttonLoadFirstTrack.disabled = false;
    buttonLoadThirdTrack = document.querySelector("#buttonLoadThirdTrack");
    buttonLoadThirdTrack.disabled = false;

    htmlTracks = document.querySelectorAll("track");

    displayTrackStatuses(htmlTracks);
};

function displayTrackStatuses(htmlTracks) {
    trackStatusesDiv.innerHTML = "";

    for (var i = 0; i < htmlTracks.length; i++) {
        var currentHtmlTrack = htmlTracks[i];
        var currentTextTrack = currentHtmlTrack.track;

        var label = "<li>label = " + currentHtmlTrack.label + "</li>";
        var kind = "<li>kind = " + currentHtmlTrack.kind + "</li>";
        var lang = "<li>lang = " + currentHtmlTrack.srclang + "</li>";
        var readyState = "<li>readyState = " + currentHtmlTrack.readyState + "</li>";
        var mode = "<li>mode = " + currentTextTrack.mode + "</li>";

        trackStatusesDiv.innerHTML += "<li><b>Track:" + i + ":</b></li>" + "<ul>" + label + kind + lang + readyState + mode + "</ul>";
    }
    console.log("done.");
};

function forceLoadTrack(n) {
    // first parameter = track number,
    // second = a callback function called when the track is loaded,
    // that takes the loaded TextTrack as parameter
    getTrack(htmlTracks[n], readContent);
}

function getTrack(htmlTrack, callback) {
    var textTrack = htmlTrack.track;

    if (htmlTrack.readyState === 2) {
        console.log("text track already loaded");
        callback(textTrack);
    } else {
        console.log("Forcing the text track to be loaded");

        // this will force the track to be loaded
        textTrack.mode = "hidden";
        htmlTrack.addEventListener('load', function (e) {
            // the track is arrived, call the callback function
            callback(textTrack);
        })
    }
}

function readContent(track) {
    console.log("reading content of loaded track...");

    trackStatusesDiv.innerHTML = "";

    track.addEventListener("cuechange", function(e){

        var cue = this.activeCues[0];

        if (cue !== undefined) {
            trackStatusesDiv.innerHTML += cue.text + "<br>";
        }
    });

    video.play();
    // var cues = track.cues;

    // for (let i = 0; i < cues.length; i++) {
    //     const cue = cues[i];

    //     var id = cue.id + "<br>";
    //     var timeSegment = cue.startTime + " => " + cue.endTime + "<br>";
    //     var text = cue.text + "<p>"
    //     trackStatusesDiv.innerHTML += id + timeSegment + text;
    // }
    // displayTrackStatuses(htmlTracks); // update document with new track statuses 
}