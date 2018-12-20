function init() {
    var fileInput = document.querySelector('#fileInput');
    fileInput.addEventListener('change', fileInputChangeHandler, false);
}

function fileInputChangeHandler(event) {
    var files = event.target.files;
    readFilesAndDisplayPreview(files);
}

function readFilesAndDisplayPreview(files) {
    // Loop through the FileList and render image files as thumbnails.
    for (var i = 0, file; file = files[i]; i++) {

        // Only process image files.
        if (!file.type.match('image.*')) {
            continue;
        }

        var reader = new FileReader();

        //capture the file information.
        reader.onload = function (e) {
            // Render thumbnail.
            var span = document.createElement('span');
            span.innerHTML = "<img class='thumb' src='" + e.target.result + "'/>";
            document.getElementById('imageList').insertBefore(span, null);
        };


        // Read the image file as a data URL.
        reader.readAsDataURL(file);
    }
}
