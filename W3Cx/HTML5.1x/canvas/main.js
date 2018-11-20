window.onload = init;

var canvas;
var ctx;

function init(){
   canvas = document.querySelector('#myCanvas');
   ctx = canvas.getContext('2d');
   ctx.save();
   ctx.translate(200,200);
   ctx.rotate(Math.PI / 4);
   ctx.scale(0.5,0.5);
   // draws a filled rectangle
   ctx.fillStyle = 'yellow';
   ctx.fillRect(10,10,100,100);

   // rectangle is drawn in wireframe mode
   ctx.strokeStyle = 'red';
   ctx.lineWidth=3;
   ctx.strokeRect(10,120,100,100);

   // draws a filled rectangle
   ctx.fillStyle = 'pink';
   ctx.fillRect(10,230,100,100);
   ctx.clearRect(20,240,20,20);

   ctx.fillStyle = 'olive';
   ctx.font='25pt arial';
   ctx.fillText('Ciao Bella', 10, 360, 700);
   ctx.restore();

   // ctx.beginPath();
   // ctx.moveTo(20, 20);
   // ctx.lineTo(100, 160);
   // ctx.quadraticCurveTo(100, 100, 250, 120);
   // ctx.bezierCurveTo(290, -40, 300, 200, 400, 150);
   // ctx.lineTo(500, 90);
   // // TRY TO COMMENT THIS LINE
   // ctx.closePath();
   // ctx.lineWidth = 5;
   // ctx.strokeStyle = "#0000ff";
   // ctx.stroke();

}
