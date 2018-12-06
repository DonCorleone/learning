var GF = function () {
    // vars for counting frames/s, used by the measureFPS function
    var frameCount = 0;
    var lastTime;
    var fpsContainer;
    var fps;

    // var for canvas
    var ctx, canvas;
    var w, h;

    var oldTime;

    // vars for handling inputs
    var inputStates = {};

    var measureFPS = function (newTime) {

        // test for the very first invocation
        if (lastTime === undefined) {
            lastTime = newTime;
            return;
        }

        //calculate the difference between last & current frame
        var diffTime = newTime - lastTime;

        if (diffTime >= 1000) {
            fps = frameCount;
            frameCount = 0;
            lastTime = newTime;
        }

        //and display it in an element we appended to the 
        // document in the start() function
        fpsContainer.innerHTML = 'FPS: ' + fps;
        frameCount++;
    };


    function timer(currentTime) {
        var delta = currentTime - oldTime;
        oldTime = currentTime;
        return delta;
    }
    // The monster!
    var rect = {
        x: 10,
        y: 10,
        speed: 100 // pixels/s this time !
    };

    var mainLoop = function (time) {
        //main function, called each frame 
        measureFPS(time);

        delta = timer(time);

        // canvas part
        clearCanvas(ctx, w, h);

        // draw my rect
        drawMyRect(rect.x, rect.y);

        updateRectPosition(delta);

        // check inputStates
        if (inputStates.left) {
            ctx.fillText("left", 150, 20);
        }
        if (inputStates.up) {
            ctx.fillText("up", 150, 50);
        }
        if (inputStates.right) {
            ctx.fillText("right", 150, 80);
        }
        if (inputStates.down) {
            ctx.fillText("down", 150, 120);
        }
        if (inputStates.space) {
            ctx.fillText("space bar", 140, 150);
        }

        if (inputStates.mousePos) {
            ctx.fillText("x = " + inputStates.mousePos.x + " y = " +
                inputStates.mousePos.y, 5, 150);
        }
        if (inputStates.mousedown) {
            ctx.fillText("mousedown b" + inputStates.mouseButton, 5, 180);
        }
        // call the animation loop every 1/60th of second
        requestAnimationFrame(mainLoop);
    };

    function getMousePos(evt) {
        // Necessary to take into account CSS boudaries
        var rect = canvas.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    }

    var start = function () {
        // adds a div for displaying the fps value
        fpsContainer = document.createElement('div');
        document.body.appendChild(fpsContainer);

        canvas = document.body.querySelector("#myCanvas");
        w = canvas.width;
        h = canvas.height;

        ctx = canvas.getContext('2d');

        // Default police for text
        ctx.font = "20px Arial";
        // Add the listener to the main, window object, and update the states
        window.addEventListener('keydown', function (event) {
            if (event.keyCode === 37) {
                inputStates.left = true;
            } else if (event.keyCode === 38) {
                inputStates.up = true;
            } else if (event.keyCode === 39) {
                inputStates.right = true;
            } else if (event.keyCode === 40) {
                inputStates.down = true;
            } else if (event.keyCode === 32) {
                inputStates.space = true;
            }
        }, false);

        // If the key is released, change the states object
        window.addEventListener('keyup', function (event) {
            if (event.keyCode === 37) {
                inputStates.left = false;
            } else if (event.keyCode === 38) {
                inputStates.up = false;
            } else if (event.keyCode === 39) {
                inputStates.right = false;
            } else if (event.keyCode === 40) {
                inputStates.down = false;
            } else if (event.keyCode === 32) {
                inputStates.space = false;
            }
        }, false);

        // Mouse event listeners
        canvas.addEventListener('mousemove', function (evt) {
            inputStates.mousePos = getMousePos(evt);
        }, false);
        canvas.addEventListener('mousedown', function (evt) {
            inputStates.mousedown = true;
            inputStates.mouseButton = evt.button;
        }, false);
        canvas.addEventListener('mouseup', function (evt) {
            inputStates.mousedown = false;
        }, false);

        requestAnimationFrame(mainLoop);
    };

    function clearCanvas(ctx, w, h) {
        ctx.clearRect(0, 0, w, h);
    }

    function drawMyRect(x, y) {

        ctx.save();

        ctx.translate(x, y);

        ctx.strokeRect(0, 0, 100, 100);

        ctx.fillRect(0, 0, 50, 50)

        ctx.restore();
    }

    function updateRectPosition(delta) {
        rect.speedX = rect.speedY = 0;
        // Checks inputStates
        if (inputStates.left) {
            ctx.fillText("left", 150, 20);
            rect.speedX = -rect.speed;
        }
        if (inputStates.up) {
            ctx.fillText("up", 150, 40);
            rect.speedY = -rect.speed;
        }
        if (inputStates.right) {
            ctx.fillText("right", 150, 60);
            rect.speedX = rect.speed;
        }
        if (inputStates.down) {
            ctx.fillText("down", 150, 80);
            rect.speedY = rect.speed;
        }
        if (inputStates.space) {
            ctx.fillText("space bar", 140, 100);
        }
        if (inputStates.mousePos) {
            ctx.fillText("x = " + inputStates.mousePos.x + " y = " +
                inputStates.mousePos.y, 5, 150);
        }
        if (inputStates.mousedown) {
            ctx.fillText("mousedown b" + inputStates.mouseButton, 5, 180);
            rect.speed = 5;
        } else {
            // Mouse up
            rect.speed = 1;
        }
        rect.x += calcDistanceToMove(delta, rect.speedX);
        rect.y += calcDistanceToMove(delta, rect.speedY);
    }
    var calcDistanceToMove = function (delta, speed) {
        //console.log("#delta = " + delta + " speed = " + speed);
        return (speed * delta) / 1000;
    };

    //our GameFramework returns a public API visible from outside its scope
    return {
        start: start
    };
};

window.onload = function init() {
    var game = new GF();
    game.start();
}
