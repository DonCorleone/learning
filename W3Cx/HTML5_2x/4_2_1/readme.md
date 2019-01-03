# HTML template example

[JSBin](https://jsbin.com/dozele/edit?html,js,output)  
[W3Cx+HTML5.2x](https://courses.edx.org/courses/course-v1:W3Cx+HTML5.2x+3T2018/courseware/7a5ad94a16a24e8d9870c68468d1445f/a15f811948fa423185c346089a36bb85/)  

## watchout for

HTML

```html
</head>
<template id="mytemplate">
    <img src="" alt="alt">
    <div class="comment">hello</div>
</template>
<body>
```

CSS

```CSS

```

JAVASCRIPT  

template.content
```JavaScript
var t = document.querySelector('#mytemplate');
// Populate the src at runtime.
t.content.querySelector('img').src = 'http://webcomponents.github.io/img/logo.svg';
// Clone the template, sort of "instantiation"!
var clone = document.importNode(t.content, true);
```