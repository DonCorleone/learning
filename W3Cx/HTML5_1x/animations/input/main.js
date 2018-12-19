window.onload = init;

var canvas;
var ctx;
var rectX = 20,
	rectY = 20;
var requestId;
var incrementX = 0;
var incrementY = 0;

function init() {
	canvas = document.querySelector('#myCanvas');
	ctx = canvas.getContext('2d');
	
	canvas.addEventListener('keydown', doKeyDown, false);
	canvas.addEventListener('keyup', doKeyUp, false);

	canvas.addEventListener('mouseEnter', setFocus, false);
	canvas.addEventListener('mouseLeave', unsetFocus, false);

	requestId = requestAnimationFrame(animationLoop);
}


function doKeyDown(param) {
	if (param.keyCode === 37) {
		// left
		incrementX -= 1;
	} else if(param.keyCode === 39) {
		// right
		incrementX += 1;
	} else if(param.keyCode === 38){
		// up
		incrementY -= 1;
	} else if (param.keyCode === 40){
		// down
		incrementY +=1;
	}
}

function doKeyUp(param) {

	incrementX = 0;
	incrementY = 0;
}

function setFocus(param) {
	canvas.focus();
}

function unsetFocus(param){
	canvas.blur();
	incrementX = 0;
	incrementY = 0;
}
function animationLoop(timestamp) {
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	draw(rectX, rectY);

	move();

	requestId = requestAnimationFrame(animationLoop);
}

function draw(x, y) {
	ctx.save();

	ctx.translate(x, y);


	ctx.fillStyle = 'red';
	ctx.fillRect(x, y, 50, 50);

	ctx.restore();
}

function move() {
	rectX += incrementX;
	rectY += incrementY;
}
