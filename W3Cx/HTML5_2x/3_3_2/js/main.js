function dragHandler(sender, event) {
    // When dragged, copy into the drag'n'drop clipboard
    // the id of the dragged elem (it's target.id)
    event.dataTransfer.setData("browser", event.target.id);
}

function dropHandler(sender, event) {
    // get the id of the element being dragged
    var id = event.dataTransfer.getData("browser");

    sender.appendChild(document.getElementById(id));
    // prevent default behavior
    event.preventDefault();
}