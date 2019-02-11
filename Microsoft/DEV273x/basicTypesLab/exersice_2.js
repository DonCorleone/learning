var colorChange = /** @class */ (function () {
    function colorChange(div) {
        this.div = div;
    }
    colorChange.prototype.changeColor = function (color) {
        this.div.style.backgroundColor = color;
        return true;
    };
    return colorChange;
}());
var elementsSet = [];
for (var index = 0; index < 4; index++) {
    elementsSet.push({
        'div': document.createElement('div'),
        'button': document.createElement('button')
    });
}
var squareSizeNum2 = 100;
var squareSize2 = squareSizeNum2 + "px";
var Colors;
(function (Colors) {
    Colors[Colors["red"] = 0] = "red";
    Colors[Colors["blue"] = 1] = "blue";
    Colors[Colors["yellow"] = 2] = "yellow";
    Colors[Colors["black"] = 3] = "black";
})(Colors || (Colors = {}));
elementsSet.map(function (elem, index) {
    var colorChangeClass = new colorChange(elem.div);
    elem.div.style.width = squareSize2;
    elem.div.style.height = squareSize2;
    elem.button.textContent = 'Changez';
    elem.button.onclick = function (event) {
        colorChangeClass.changeColor(Colors[index]);
    };
    document.body.appendChild(elem.button);
    document.body.appendChild(elem.div);
});
