function drawCanvas() {
    var canvas = document.getElementById('mycanvas');
    var ctx = canvas.getContext('2d');
    var lingrad = ctx.createLinearGradient(0, 0, 0, 150);
    lingrad.addColorStop(0, '#000');
    lingrad.addColorStop(0.5, '#669');
    lingrad.addColorStop(1, '#fff');
    ctx.fillStyle = lingrad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    // Create an image from the canvas
    var img = new Image();
    img.src = canvas.toDataURL("image/png");
    img.alt = 'downloaded-from-image';
    //img.draggable='true' is not necessary, images are draggable
    // by default
    img.addEventListener('dragstart', dragStartHandler, false);
    // Add the image to the document
    document.querySelector("body").appendChild(img);
}

function dragStartHandler(e) {
    console.log("drag start");
    var element = e.target;
    var src;
    if (element.tagName === "IMG" &&
        element.src.indexOf("data:") === 0) {
        src = element.src;
    }
    if (element.tagName === "CANVAS") {
        src = element.toDataURL();
    }

    if (src) {
        var name = element.getAttribute("alt") || "download";
        var mime = src.split(";")[0].split("data:")[1];
        var ext = mime.split("/")[1] || "png";
        var download = mime + ":" + name + "." + ext + ":" + src;
        // Prepare file content to be draggable to the desktop
        e.dataTransfer.setData("DownloadURL", download);
    }
}