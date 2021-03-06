var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function animated(constructor) {
    constructor.prototype.animated = true;
    return constructor;
}
var genericClass = /** @class */ (function () {
    function genericClass() {
    }
    genericClass.prototype.setVal = function (val) {
        this.val = val;
    };
    genericClass.prototype.getVal = function () {
        return this.val;
    };
    return genericClass;
}());
var Rotater = /** @class */ (function () {
    function Rotater() {
    }
    Rotater.prototype.rotate = function (elem) {
        elem.style.transform = "rotate(-315deg)";
    };
    ;
    Rotater.prototype.rotateBack = function (elem) {
        elem.style.transform = "";
    };
    ;
    return Rotater;
}());
var Mover = /** @class */ (function () {
    function Mover() {
    }
    Mover.prototype.move = function (elem) {
        elem.style.transform = "translateX(50px)";
    };
    ;
    Mover.prototype.moveBack = function (elem) {
        elem.style.transform = "";
    };
    ;
    return Mover;
}());
var movingElement = /** @class */ (function () {
    function movingElement(elem) {
        var _this = this;
        elem.onmousedown = function () {
            _this.move(elem);
        };
        elem.onmouseup = function () {
            _this.moveBack(elem);
        };
        elem.onmouseover = function () {
            _this.rotate(elem);
        };
        elem.onmouseout = function () {
            _this.rotateBack(elem);
        };
        if (this.animated) {
            elem.style.transition = "transform .5s ease";
        }
        this.element = elem;
    }
    movingElement = __decorate([
        animated
    ], movingElement);
    return movingElement;
}());
function isHTMLElement(input) {
    return input.style !== undefined;
}
function convertElement(elem) {
    return (!isHTMLElement(elem)) ? elem : elem;
}
function standardizeElements(elemArray) {
    for (var _i = 0, elemArray_1 = elemArray; _i < elemArray_1.length; _i++) {
        var elem = elemArray_1[_i];
        convertElement(elem);
    }
    return elemArray;
}
var element1 = new genericClass();
var element2 = new genericClass();
var element3 = new genericClass();
//    Let's go ahead and add some values to our classes using the setVal() function.
element1.setVal(document.createElement('div'));
element2.setVal(document.createElement('div'));
element3.setVal(document.createElement('div'));
//   Now we are going to create an array of our returned values from the classes.
var elementArray = [
    element1.getVal(),
    element2.getVal(),
    element3.getVal(),
];
var standardElements = standardizeElements(elementArray);
function applyMixins(derivedClass, baseClasses) {
    baseClasses.forEach(function (baseClass) {
        Object.getOwnPropertyNames(baseClass.prototype).forEach(function (name) {
            derivedClass.prototype[name] = baseClass.prototype[name];
        });
    });
}
applyMixins(movingElement, [Mover, Rotater]);
for (var _i = 0, standardElements_1 = standardElements; _i < standardElements_1.length; _i++) {
    var elem = standardElements_1[_i];
    elem.style.width = "60px";
    elem.style.height = "60px";
    elem.style.margin = "5px";
    var elemClass = new movingElement(elem);
    getAvatar_promise(elemClass.element);
}
function getAvatar_promise(elem) {
    fetch('https://uinames.com/api/').then(function (response) {
        return response.json();
    }).then(function (response) {
        alert('Hi! My name is ' + response.name);
        var avatar = 'https://robohash.org/set_set3/' + response.name + '?size=60x60';
        elem.style.backgroundImage = 'url("' + avatar + '")';
        document.body.appendChild(elem);
    });
}
//# sourceMappingURL=advancedTypeScriptLab.js.map