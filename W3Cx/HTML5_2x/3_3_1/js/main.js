function dragStartHandler(event) {
    // alert('dragan ' + event.target.innerHTML)

    event.dataTransfer.setData("Fruit", event.target.dataset.value);

    event.target.style.opacity = '0.4';
    event.target.classList.add('dragged');

    event.dataTransfer.effectAllowed = 'copy';
}

var counter = 0;
function dropHandler(event) {


    event.target.classList.remove('draggedOver'); 
    var canvas = document.querySelector('#dropZone');

    var context = canvas.getContext('2d');

    context.fillStyle = 'red';
    context.font = '24px sans-serif';

    context.fillText(event.dataTransfer.getData('Fruit'), 10, 10 + (24 * ++counter));
}

function dragOverHandler(event){
    event.preventDefault();
}

function dragEnterHandler(event){
    event.target.classList.add('draggedOver');

    event.dataTransfer.dropEffect = 'copy';
}

function dragLeaveHandler(event){
    event.target.classList.remove('draggedOver');
}

function dragEndHandler(event) {
    event.target.style.opacity = '1';
    event.target.classList.remove('dragged');
}

function init() {
    var input = document.querySelector('input');

    input.dataset.myvaluename = input.value; // Set an initial value.

    input.addEventListener('change', function (e) {
        this.dataset.myvaluename = this.value;
    });
}