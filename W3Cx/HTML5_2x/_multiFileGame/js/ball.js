// constructor function for balls
function Ball(x, y, angle, v, diameter) {
    this.x = x;
    this.y = y;
    this.angle = angle;
    this.v = v;
    this.radius = diameter / 2;
    this.color = 'black';


    this.move = function () {
        // add horizontal increment to the x pos
        // add vertical increment to the y pos
        var incX = this.v * Math.cos(this.angle);
        var incY = this.v * Math.sin(this.angle);

        // Calc distance to move
        this.x += calcDistanceToMove(delta, incX);
        this.y += calcDistanceToMove(delta, incY);
    }

    this.draw = function (context) {
        context.save();
        context.beginPath();
        context.fillStyle = this.color
        context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        context.fill();
        context.restore();

        this.color = 'black';
    }
}