window.onload = init;

var myDiv;
var requestId;
var x = 0;

function init(){

   myDiv = document.querySelector('#myDiv');
}
function render(time){
   myDiv.style.left = x++ + "px";
   requestId = setTimeout(render, 10);
}

function start(){
  // requestId = setInterval(render, 10);
   requestId = setTimeout(render, 10);

}

function stop(){
   if (requestId) {
      clearTimeout(requestId);
   }
}
