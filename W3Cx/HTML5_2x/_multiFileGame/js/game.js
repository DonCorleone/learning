// Inits
window.onload = function init() {
    var game = new GF();
    game.start();
}

// GAME FRAMEWORK STARTS HERE
var GF = function () {
    // Vars relative to the canvas
    var canvas, context, w, h;

    // vars for handling inputs
    var inputStates = {};

    var gameStates = {
        mainMenu: 0,
        gameRunning: 1,
        gameOver: 2
    };

    var currentGameState = gameStates.gameRunning;
    var currentLevel = 1;
    var TIME_BETWEEN_LEVELS = 5000; // 5 seconds
    var currentLevelTime = TIME_BETWEEN_LEVELS;
    var plopSound; // Sound of a ball exploding

    var pacMan = {
        dead: false,
        x: 10,
        y: 10,
        width: 50,
        height: 50,
        speed: 100 // pixels/s this time !
    };

    // array of balls to animate
    var ballArray = [];
    var nbBalls = 5;

    function clearCanvas() {
        context.clearRect(0, 0, w, h);
    }

    function drawMyPacMan(x, y) {
        context.save();

        context.translate(x, y);
        context.scale(0.5, 0.5);

        context.strokeRect(0, 0, 100, 100);

        context.restore();
    }

    var mainLoop = function (time) {

        //main function, called each frame 

        measureFPS(time);

        // number of ms since last frame draw
        var delta = timer(time);

        // Clear the canvas
        clearCanvas();

        // check
        if (pacMan.dead) {
            currentGameState = gameStates.gameOver;
        }

        switch (currentGameState) {
            case gameStates.gameRunning:

                // draw the PacMan
                drawMyPacMan(pacMan.x, pacMan.y);

                // move the PacMan
                updatePacManPosition(delta);

                // update and draw Balls
                updateBalls();

                // display Score
                displayScore();

                currentLevelTime -= delta;

                if (currentLevelTime < 0) {

                    // Go to next level
                    goToNextLevel();
                }

                break;

            case gameStates.gameOver:

                context.fillText("GAME OVER", 50, 100);
                context.fillText("Press SPACE to start again", 50, 150);
                context.fillText("Move with arrow keys", 50, 200);
                context.fillText("Survive 5 seconds for next level", 50, 250);

                if (inputStates.space) {
                    // Start New Game
                    startNewGame();
                }
                break;

            case gameStates.mainMenu:

                // ToDo
                break;
        }

        // call the animation loop every 1/60th of second
        requestAnimationFrame(mainLoop);
    };

    function startNewGame() {
        pacMan.dead = false;

        currentLevelTime = 5000;
        currentLevel = 1;
        nbBalls = 5;

        // Create Balls
        createBalls(nbBalls);

        currentGameState = gameStates.gameRunning;

    }

    function goToNextLevel() {

        // reset time available for next level
        // 5 seconds in this example
        currentLevelTime = 5000;
        currentLevel++;
        // Add two balls per level
        nbBalls += 2;
        createBalls(nbBalls);
    }

    function createBalls(ballsAmount) {
        // Start from an empty array
        ballArray = [];

        for (let i = 0; i < ballsAmount; i++) {
            var ball = new Ball(
                w * Math.random(),
                h * Math.random(),
                2 * Math.PI * Math.random(),
                80 * Math.random(),
                30);


            // Do not create a ball on the player. We augmented the ball radius 
            // to sure the ball is created far from the PacMan. 
            if (!circRectsOverlap(
                pacMan.x, pacMan.y,
                pacMan.width, pacMan.height,
                ball.x, ball.y, ball.radius * 3)) {

                ballArray.push(ball);
            } else {
                i--;
            }
        }
    }

    function updateBalls() {
        for (let i = 0; i < ballArray.length; i++) {
            var ball = ballArray[i];

            ball.move()

            // Test collission with wall
            testCollisionWithWalls(ball, w, h);

            // Test collission with PacMan
            if (circRectsOverlap(pacMan.x, pacMan.y, pacMan.width, pacMan.height, ball.x, ball.y, ball.radius)) {
                //change the color of the ball
                ball.color = 'red';
                pacMan.dead = true;

                plopSound.play();
            }

            ball.draw(context);
        }
    }

    function updatePacManPosition(delta) {

        pacMan.speedX = pacMan.speedY = 0;
        if (inputStates.left) {
            pacMan.speedX = -pacMan.speed;
        }
        if (inputStates.up) {
            pacMan.speedY = -pacMan.speed;
        }
        if (inputStates.right) {
            pacMan.speedX = pacMan.speed;
        }
        if (inputStates.down) {
            pacMan.speedY = pacMan.speed;
        }
        if (inputStates.space) {
        }
        if (inputStates.mousePos) {
        }
        if (inputStates.mousedown) {
            pacMan.speed = 500;
        }
        else {
            // mouse up
            pacMan.speed = 100;
        }

        // Calc distance To moove
        pacMan.x += calcDistanceToMove(delta, pacMan.speedX);
        pacMan.y += calcDistanceToMove(delta, pacMan.speedY);
    }

    function displayScore() {
        context.save();
        context.fillStyle = 'Green';
        context.fillText("Level: " + currentLevel, 300, 30);
        context.fillText("Time: " + (currentLevelTime / 1000).toFixed(1), 300, 60);
        context.fillText("Balls: " + nbBalls, 300, 90);
        context.restore();
    }

    function loadAssets(callback) {
        // here we should load the souds, the sprite sheets etc.
        // then at the end call the callback function

        // simple example that loads a sound and then calls the callback. We used the howler.js WebAudio lib here.
        // Load sounds asynchronously using howler.js
        plopSound = new Howl({
            urls: ['http://mainline.i3s.unice.fr/mooc/plop.mp3'],
            autoplay: false,
            volume: 1,
            onload: function () {
                console.log("all sounds loaded");
                // We're done!
                callback();
            }

        })
    }

    var start = function () {

        // Init FPS counter
        initFPSCounter();

        // important, we will draw with this object
        canvas = document.querySelector('#myCanvas');

        // often useful
        w = canvas.width;
        h = canvas.height;

        // important, we will draw with this object
        context = canvas.getContext('2d');

        // default police for text
        context.font = '20px Arial';

        // Create the different key and mouse listeners
        addListeners(inputStates, canvas);

        // Create Balls
        createBalls(nbBalls);

        // load Assets
        loadAssets(function () {

            // all assets (images, sounds) loaded, we can start the animation
            requestAnimationFrame(mainLoop);
        });
    };


    //our GameFramework returns a public API visible from outside its scope
    return {
        start: start
    };
};

