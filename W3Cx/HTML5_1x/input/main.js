window.onload = init;

var myDiv;
var requestId;
var x = 0;

function init() {
	var myBtn = document.querySelector('#myButton');
	myBtn.addEventListener('click', doClick, false);
	window.addEventListener('keydown', doKey, false);
}

function doClick(ev) {
	alert(ev.x + ':' + ev.y);
}

function doKey(ev){
	alert(ev.keyCode + ':' + ev.code);
}
