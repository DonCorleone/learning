class colorChange {
    div: Element;
    constructor(div: Element) {
        this.div = div;
    }
    changeColor(color:string) : boolean{
        (this.div as HTMLElement).style.backgroundColor = color;
        return true;
    }
}

interface ElementSet{
    'div': Element,
    'button': Element
}

let elementsSet : Array<ElementSet> = [];

for (let index: number = 0; index < 4; index++) {
    elementsSet.push({
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

elementsSet.map((elem, index) => {
    let colorChangeClass = new colorChange(elem.div);

    (elem.div as HTMLElement).style.width = squareSize2;
    (elem.div as HTMLElement).style.height = squareSize2;
    elem.button.textContent = 'Changez';
    (elem.button as HTMLElement).onclick = (event) => {
        colorChangeClass.changeColor(Colors[index]);
    }
    document.body.appendChild(elem.button);
    document.body.appendChild(elem.div);
});