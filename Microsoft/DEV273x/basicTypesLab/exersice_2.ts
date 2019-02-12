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

for (let index: number = 0; index < 4; index++) {
    setOfElements.push({
        'div': document.createElement('div'),
        'button': document.createElement('button')
    });
}

let squareSizeNum2: number = 100;
let squareSize2: string = `${ squareSizeNum2 }px`

enum Colors{
    red,
    blue,
    yellow,
    black   
}

setOfElements.map((elem, index) => {
    let colorChangeClass = new colorChanger(elem.div);

    (elem.div as HTMLElement).style.width = squareSize2;
    (elem.div as HTMLElement).style.height = squareSize2;
    elem.button.textContent = 'Change';
    (elem.button as HTMLElement).onclick = (event) => {
        colorChangeClass.changeColor(Colors[index]);
    }
    document.body.appendChild(elem.button);
    document.body.appendChild(elem.div);
});