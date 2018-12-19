function init() {
    var fileInput = document.querySelector('#file');
    var progress = document.querySelector('#uploadProgress');
    
    fileInput.onchange = function(e){
        
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'Upload.html');

        xhr.upload.onprogress = function(e){
            progress.value = e.loaded;
            progress.max = e.total;
        };

        xhr.onload = function(e){
            alert('Completed');
        };

        var form = new FormData();
        form.append('FormData', fileInput.files[0]);
        xhr.send(form);
    };
}