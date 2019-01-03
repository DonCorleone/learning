// create a new worker (a thread that will be run in the background)
var worker = new Worker("worker0.js");
// Watch for messages from the worker
worker.onmessage = function (e) {


    // Do something with the message from the client: e.data

    if (e.data === "done") {
        // Do some computation that can last a few seconds...
        // alert the creator of the thread that the job is finished
        alert("Got message that the background work is finished...")
    }
};
// Send a message to the worker
worker.postMessage("start");