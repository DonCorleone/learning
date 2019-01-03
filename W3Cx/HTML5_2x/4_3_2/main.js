if (window.Worker) {
   // web workers supported by the browser
   var worker = new Worker("worker2.js");
   worker.onmessage = function (event) {
      document.getElementById('result').textContent = event.data;
   };
} else {
   // the browser does not support web workers
   alert("Sorry, your browser does not support Web Workers");
}
setTimeout(function () {
   // After 10 seconds, we kill the worker
   worker.terminate();
   document.body.appendChild(document.createTextNode("Worker killed, 10 seconds elapsed !")
   );
}, 10000);