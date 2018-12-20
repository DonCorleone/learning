function init() {
    var fileInput = document.querySelector('#fileInput');
    fileInput.addEventListener('change', fileInputChangeHandler, false);
}

function fileInputChangeHandler(event) {
    var files = event.target.files;
    readFilesAndDisplayPreview(files);
}

function dragEnterHandler(sender, event) {
    event.preventDefault();
    event.stopPropagation();

    event.target.classList.add('draggedOver');
}

function dragOverHandler(sender, event){
    event.preventDefault();
    event.stopPropagation();
}

function dragLeaveHandler(sender, event) {
    event.preventDefault();
    event.stopPropagation();    

    event.target.classList.remove('draggedOver');
}

function dropHandler(sender, event) {
    event.preventDefault();
    event.stopPropagation();    

    var files = event.dataTransfer.files;

    var filesLen = files.length;
    var filenames = "";
    // iterate on the files, get details using the file API
    // Display file names in a list.
    for(var i = 0 ; i < filesLen ; i++) {
       filenames += '\n' + files[i].name;
       // Create a li, set its value to a file name, add it to the ol
       var li = document.createElement('li');
       li.textContent = files[i].name;
       document.querySelector("#droppedFiles").appendChild(li);
    }

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
