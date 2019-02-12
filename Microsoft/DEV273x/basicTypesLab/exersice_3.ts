
class colorChanger {
    div: Element;
    constructor(div: Element) {
        this.div = div;
    }
    changeColor(color:string | number) : boolean{
        if (typeof(color) === "number") {
            return true;
        }
        (this.div as HTMLElement).style.backgroundColor = color;
        return true;
    }
}

interface SetOfElements{
    'div': Element,
    'button': Element
}

let setOfElements : Array<SetOfElements> = [];

let squareSizeNum2: number = 100;
let squareSize2: string = `${ squareSizeNum2 }px`

enum Colors{
    red,
    blue,
    yellow,
    black   
}

class numericColor extends colorChanger {

    static Colors: Colors;

    constructor(div: Element) {
        super(div);
        (this.div as HTMLElement).style.width = squareSize2;
        (this.div as HTMLElement).style.height = squareSize2;
    }
    changeColor(color:number) : boolean{
        (this.div as HTMLElement).style.backgroundColor = Colors[color];
        return true;
    }
}

let getRandomNumber: Function = (min:number, max, number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

interface SetOfElements{
    'div': Element,
    'button': Element
}


for (let index: number = 0; index < 4; index++) {
    setOfElements.push({
        'div': document.createElement('div'),
        'button': document.createElement('button')
    });
}


setOfElements.map((elem, index) => {
    let colorChangeClass = new numericColor(elem.div);

    elem.button.textContent = 'Change';
    (elem.button as HTMLElement).onclick = (event) => {
        colorChangeClass.changeColor(getRandomNumber(0,3));
    };
    document.body.appendChild(elem.button);
    document.body.appendChild(elem.div);
});