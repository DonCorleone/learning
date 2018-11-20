window.onload = init;

var canvas, divCanvas;
var context;
var mousePos, previousMousePos; 
var mouseButton;
var started = false;

function handleMouseMove(ev) {
	mousePos = getMousePos(canvas, ev);
	// if (!started){
	// 	previousMousePos = mousePos;
	// 	started = true;
	// }else{
	if(started){
		drawLineImmediately(previousMousePos.x, previousMousePos.y, mousePos.x, mousePos.y);
		previousMousePos = mousePos;
	}
}

function handleMouseDown(ev) {
	previousMousePos = getMousePos(canvas, ev);
	started = true;
}

function handleMouseUp(ev){
	started = false;
}

function drawLineImmediately(x1, y1, x2, y2) {
	context.beginPath();
	context.strokeStyle='red';
	context.moveTo(x1,y1);
	context.lineTo(x2,y2);
	context.stroke();
}

function resizeCanvasAccordingToParentSize() {
	// adjust canvas size
	canvas.width = divCanvas.clientWidth;
	canvas.height = divCanvas.clientHeight;
	drawLineImmediately();
}

function init() {
	divCanvas = document.getElementById('divCanvas');
	canvas = document.getElementById('myCanvas');
	context = canvas.getContext('2d');

	
	canvas.addEventListener(
		'mousemove',
		handleMouseMove,
		// function(ev) {
		// 	mousePos = getMousePos(canvas, ev);
		// 	var message = 'MousePosition X:' + mousePos.x + ' Y:' + mousePos.y;
		// 	writeMessage(canvas, message);
		// },
		false
	);

	canvas.addEventListener(
		'mousedown',
		handleMouseDown,
		// function(ev) {
		// 	var mouseButton = ev.button;
		// 	var message =
		// 		'MouseButton ' + mouseButton + ' down at X:' + mousePos.x + ' Y:' + mousePos.y;
		// 	writeMessage(canvas, message);
		// },
		false
	);

	canvas.addEventListener(
		 'mouseup',
		 handleMouseUp,
		// function(ev) {
		// 	var message = 'Mouse up at position: ' + mousePos.x + ',' + mousePos.y;
		// 	writeMessage(canvas, message);
		// },
		false
	);
}

function writeMessage(canvas, message) {
	context.save();
	context.clearRect(0, 0, canvas.width, canvas.height);
	context.font = '18pt Arial';
	context.fillStyle = 'black';
	context.fillText(message, 10, 25);
	context.restore();
}

function getMousePos(canvas, ev) {
	var rect = canvas.getBoundingClientRect();
	return {
		x: ev.clientX - rect.left,
		y: ev.clientY - rect.top
	};
}
