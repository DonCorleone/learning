var canvas, ctx;
var width, height;
var x, y, incX; // incX is the distance from the previous drawn rectangle to the new one
var speedX; // speedX is the target speed of the rectangle in pixels/s

// for time based animation
var now, delta = 0;
// High resolution timer
var oldTime = performance.now();

// Called after the DOM is ready (page loaded)
function init() {
    // init the different variables
    canvas = document.querySelector("#mycanvas");
    ctx = canvas.getContext('2d');
    width = canvas.width;
    height = canvas.height;

    x = 10; y = 10;
    // Target speed in pixels/second, try with high values, 1000, 2000...
    speedX = 200;

    // Start animation 
    requestAnimationFrame(animationLoop);
}

function animationLoop(currentTime) {
    // How long between the current frame and the previous one ?
    // the first time oldtime is not defined.
    delta = currentTime - oldTime;


    // Compute the displacement in x (in pixels) in function of the time elapsed and
    // in function of the wanted speed
    incX = calcDistanceToMove(delta, speedX);

    // an animation is : 1) clear canvas and 2) draw shapes, 
    // 3) move shapes, 4) recall the loop with requestAnimationFrame

    // clear canvas
    ctx.clearRect(0, 0, width, height);

    ctx.strokeRect(x, y, 10, 10);

    // move rectangle
    x += incX;

    // check collision on left or right
    if (((x + 10) > width) || (x < 0)) {
        // inverse speed
        x -= incX;
        speedX = -speedX;
    }

    // Store time
    oldTime = currentTime;

    // asks for next frame  
    requestAnimationFrame(animationLoop);
}

var calcDistanceToMove = function (delta, speed) {
    //console.log("#delta = " + delta + " speed = " + speed);
    return (speed * delta) / 1000;
}