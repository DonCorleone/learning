var colorChanger = /** @class */ (function () {
    function colorChanger(div) {
        this.div = div;
    }
    colorChanger.prototype.changeColor = function (color) {
        if (typeof (color) === "number") {
            return true;
        }
        this.div.style.backgroundColor = color;
        return true;
    };
    return colorChanger;
}());
var setOfElements = [];
for (var index = 0; index < 4; index++) {
    setOfElements.push({
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
setOfElements.map(function (elem, index) {
    var colorChangeClass = new colorChanger(elem.div);
    elem.div.style.width = squareSize2;
    elem.div.style.height = squareSize2;
    elem.button.textContent = 'Change';
    elem.button.onclick = function (event) {
        colorChangeClass.changeColor(Colors[index]);
    };
    document.body.appendChild(elem.button);
    document.body.appendChild(elem.div);
});
