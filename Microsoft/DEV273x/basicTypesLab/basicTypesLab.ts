let color: string = 'green';
let squareSizeNum: number = 100;

let squareSize: string = `${ squareSizeNum }px`

let button: Element = document.createElement('button');

button.textContent = 'Changez';
let div: Element = document.createElement('div');

document.body.appendChild(button);
document.body.appendChild(div);


let changeColor: Function = (elem: Element, color: string) : boolean => {
    (elem as HTMLElement).style.backgroundColor = color;
    return true;
}

(div as HTMLElement).style.width = squareSize;
(div as HTMLElement).style.height = squareSize;

(button as HTMLElement).onclick = (event) => {
    changeColor(div, color);
}