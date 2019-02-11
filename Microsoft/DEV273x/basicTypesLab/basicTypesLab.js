var color = 'green';
var squareSizeNum = 100;
var squareSize = squareSizeNum + "px";
var button = document.createElement('button');
button.textContent = 'Changez';
var div = document.createElement('div');
document.body.appendChild(button);
document.body.appendChild(div);
var changeColor = function (elem, color) {
    elem.style.backgroundColor = color;
    return true;
};
div.style.width = squareSize;
div.style.height = squareSize;
button.onclick = function (event) {
    changeColor(div, color);
};
