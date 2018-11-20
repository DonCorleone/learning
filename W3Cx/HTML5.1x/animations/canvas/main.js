window.onload = init;

var canvas;
var ctx;
var rectX = 20, rectY = 20;
var rectAngle = 0;
var requestId;

function init(){
   canvas = document.querySelector('#myCanvas');
   ctx = canvas.getContext('2d');
   
   startAnimation();
}

var id;
function startAnimation(){

}

function animationLoop(timestamp){
   ctx.clearRect(0,0,canvas.width, canvas.height);

   draw(rectX,rectY, rectAngle);

   move();

   requestId = requestAnimationFrame(animationLoop);
}

function draw(x,y,angle){
   ctx.save();

   ctx.translate(x,y);

   ctx.rotate(angle);

   ctx.fillStyle="blue";
   ctx.fillRect(x,y,50,50);

   ctx.restore();
}

function move(){
   rectX += 10;
   rectX %= canvas.width;
   rectAngle += 0.01;
}

function start(){
  // requestId = setInterval(render, 10);
   requestId = requestAnimationFrame(animationLoop);

}

function stop(){
   if (requestId) {
      cancelAnimationFrame(requestId);
   }
}