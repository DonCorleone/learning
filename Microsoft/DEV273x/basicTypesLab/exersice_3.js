var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var squareSizeNum2 = 100;
var squareSize2 = squareSizeNum2 + "px";
var Colors;
(function (Colors) {
    Colors[Colors["red"] = 0] = "red";
    Colors[Colors["blue"] = 1] = "blue";
    Colors[Colors["yellow"] = 2] = "yellow";
    Colors[Colors["black"] = 3] = "black";
})(Colors || (Colors = {}));
var numericColor = /** @class */ (function (_super) {
    __extends(numericColor, _super);
    function numericColor(div) {
        var _this = _super.call(this, div) || this;
        _this.div.style.width = squareSize2;
        _this.div.style.height = squareSize2;
        return _this;
    }
    numericColor.prototype.changeColor = function (color) {
        this.div.style.backgroundColor = Colors[color];
        return true;
    };
    return numericColor;
}(colorChanger));
var getRandomNumber = function (min, max, number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
for (var index = 0; index < 4; index++) {
    setOfElements.push({
        'div': document.createElement('div'),
        'button': document.createElement('button')
    });
}
setOfElements.map(function (elem, index) {
    var colorChangeClass = new numericColor(elem.div);
    elem.button.textContent = 'Change';
    elem.button.onclick = function (event) {
        colorChangeClass.changeColor(getRandomNumber(0, 3));
    };
    document.body.appendChild(elem.button);
    document.body.appendChild(elem.div);
});
