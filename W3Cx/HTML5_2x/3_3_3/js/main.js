function dragEnterHandler(sender, event) {
    event.stopPropagation();
    event.preventDefault();

    sender.classList.add('draggedOver');
}

function dragOverHandler(sender, event) {
    event.stopPropagation();
    event.preventDefault();
}
 


function dragLeaveHandler(sender, event) {
    
    sender.classList.remove('draggedOver');
}

function dropHandler(sender, event) {

    // Do not propagate the event
    event.stopPropagation();
    // Prevent default behavior, in particular when we drop images or links
    event.preventDefault();

    var files = event.dataTransfer.files;

    var ol = document.querySelector('#loadedFiles');

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        var li = document.createElement('li');
        li.textContent = file.name;
        ol.appendChild(li);
    }
}