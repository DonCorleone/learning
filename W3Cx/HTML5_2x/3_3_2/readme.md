# Drag and drop images or any HTML element within a document

[JSBin](https://codepen.io/w3devcampus/pen/xwxEZg)  
[W3Cx+HTML5.2x](https://courses.edx.org/courses/course-v1:W3Cx+HTML5.2x+3T2018/courseware/1c530fbca988429899cd827dd5a4cc8b/43e28c81dfee4cad9e148d1e544faedf/?child=first)  

## watchout for

HTML

```html
ondragstart="drag(this, event)"

ondrop="drop(this, event)"
```

JAVASCRIPT

```JavaScript

// When dragged, copy into the drag'n'drop clipboard
// the id of the dragged elem (it's target.id)
evt.dataTransfer.setData("browser", target.id);

// get the id of the element being dragged
var id = evt.dataTransfer.getData("browser");

target.appendChild(document.getElementById(id));
```