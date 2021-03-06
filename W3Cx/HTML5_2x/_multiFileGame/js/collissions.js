// We can add the other collision functions seen in the
// course here...

// Collisions between rectangle and circle
function circRectsOverlap(x0, y0, w0, h0, cx, cy, r) {
    var testX = cx;
    var testY = cy;

    if (testX < x0)
        testX = x0;
    if (testX > (x0 + w0))
        testX = (x0 + w0);
    if (testY < y0)
        testY = y0;
    if (testY > (y0 + h0))
        testY = (y0 + h0);

    return (((cx - testX) * (cx - testX) + (cy - testY) * (cy - testY)) < r * r);
}

function circleCollideNonOptimised(x1, y1, r1, x2, y2, r2) {
    var dx = x1 - x2;
    var dy = y1 - y2;
    var distance = Math.sqrt(dx * dx + dy * dy);
    return (distance < r1 + r2);
}

function circleCollide(x1, y1, r1, x2, y2, r2) {
    var dx = x1 - x2;
    var dy = y1 - y2;
    return ((dx * dx + dy * dy) < (r1 + r2) * (r1 + r2));
}

function testCollisionWithWalls(ball, w, h) {
    // left
    if (ball.x < ball.radius) {
        ball.x = ball.radius;
        ball.angle = -ball.angle + Math.PI;
    }
    // right
    if (ball.x > w - (ball.radius)) {
        ball.x = w - (ball.radius);
        ball.angle = -ball.angle + Math.PI;
    }
    // up
    if (ball.y < ball.radius) {
        ball.y = ball.radius;
        ball.angle = -ball.angle;
    }
    // down
    if (ball.y > h - (ball.radius)) {
        ball.y = h - (ball.radius);
        ball.angle = -ball.angle;
    }
}