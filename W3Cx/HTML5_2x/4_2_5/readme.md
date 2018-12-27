# Custom element example

[JSBin](https://jsbin.com/cacuvuf/edit?html,js,console,output)  
[W3Cx+HTML5.2x](https://courses.edx.org/courses/course-v1:W3Cx+HTML5.2x+3T2018/courseware/7a5ad94a16a24e8d9870c68468d1445f/a15f811948fa423185c346089a36bb85/)  

## watchout for

HTML

```html
<template id="mytemplate">
  <style>
    h1 {
      color:white;
      background:red;
    }
    </style>
    <h1>
       <slot name="my-title">My default text</slot>    
    </h1>
    <p>
       <slot name="my-paragraph">My default text</slot>
    </p>
</template>
```

```html
  <my-widget>
       <span slot="my-title">Title injected</span>
       <span slot="my-paragraph">Paragraph injected</span>
  </my-widget>
```

CSS

```CSS

```

JAVASCRIPT

```JavaScript
// TIP : use "document.currentScript" here to select
// the "local document", the one corresponding to this page.
// this may avoid problems when multiple WebComponents files
// are inserted in the same document. See below...
var localDoc = document.currentScript.ownerDocument;

```