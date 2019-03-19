
function animated(constructor: any) {
    constructor.prototype.animated = true;
    return constructor;
 }
 


class genericClass<T>{

    private val: T;

    setVal(val: T) {
        this.val = val;
    }

    getVal(): T {
        return this.val;
    }
}

class Rotater {
    rotate (elem: HTMLElement) {
        elem.style.transform = "rotate(-315deg)";
    };
    rotateBack (elem: HTMLElement) {
        elem.style.transform = "";
    };
    
}

class Mover {
    move (elem: HTMLElement) {
        elem.style.transform = "translateX(50px)";
    };
    moveBack (elem: HTMLElement) {
        elem.style.transform = "";
    };
    
}
 
@animated
class movingElement implements Rotater, Mover {
    rotate: (elem: HTMLElement) => any
    move: (elem: HTMLElement) => any
    moveBack: (elem: HTMLElement) => any
    rotateBack: (elem: HTMLElement) => any
    animated: false;
    
    element: HTMLElement
    constructor(elem: HTMLElement) {
        elem.onmousedown = () => {
            this.move(elem);
        }
        elem.onmouseup = () => {
            this.moveBack(elem);
        }
        elem.onmouseover = () => {
            this.rotate(elem);
        }
        elem.onmouseout = () => {
            this.rotateBack(elem);
        }
        if (this.animated) {
             elem.style.transition = "transform .5s ease"
        }
        this.element = elem;
    }
}

function isHTMLElement(input: any): input is HTMLElement {
    return input.style !== undefined;
}

function convertElement(elem: HTMLElement | Element) {
    
    return (!isHTMLElement(elem))? <HTMLElement>elem : elem;
}
function standardizeElements(elemArray: Array<any>): Array<HTMLElement>{
    for (const elem of elemArray) {
        convertElement(elem);
    }
    return elemArray;
}

let element1 = new genericClass<Element>();
let element2 = new genericClass<HTMLElement>();
let element3 = new genericClass<Element>();

//    Let's go ahead and add some values to our classes using the setVal() function.

element1.setVal(document.createElement('div'));
element2.setVal(document.createElement('div'));
element3.setVal(document.createElement('div'));

//   Now we are going to create an array of our returned values from the classes.

let elementArray = [
    element1.getVal(),
    element2.getVal(),
    element3.getVal(),
]

let standardElements = standardizeElements(elementArray);

function applyMixins(derivedClass: any, baseClasses: any[]) {
    baseClasses.forEach(baseClass => {
        Object.getOwnPropertyNames(baseClass.prototype).forEach(name => {
            derivedClass.prototype[name] = baseClass.prototype[name];
        });
    });
}


applyMixins(movingElement, [Mover, Rotater])

for (let elem of standardElements) {
    elem.style.width = "60px"
    elem.style.height = "60px"
    elem.style.backgroundColor = "green";
    elem.style.margin = "5px";
    let elemClass = new movingElement(elem);
    document.body.appendChild(elemClass.element);
}